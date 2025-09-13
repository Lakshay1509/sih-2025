import { GoogleGenerativeAI } from '@google/generative-ai';

interface GeminiAnalysisResult {
  description: string;
  confidence: number;
  categories: string[];
  details: string;
}

class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
  }

  async analyzeImage(imageBuffer: Buffer, mimeType: string): Promise<GeminiAnalysisResult> {
    try {
      const imagePart = {
        inlineData: {
          data: imageBuffer.toString('base64'),
          mimeType: mimeType
        }
      };

      const prompt = `
        Analyze this image and provide detailed information about:
        1. What is shown in the image (main subject/content)
        2. Key details and characteristics
        3. Context or setting
        4. Any text visible in the image
        5. Overall quality and clarity
        
        Please provide a comprehensive analysis in a structured format.
      `;

      const result = await this.model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const analysis = response.text();

      return {
        description: analysis,
        confidence: 0.95, // Gemini doesn't provide confidence scores, so this is estimated
        categories: this.extractCategories(analysis),
        details: analysis
      };
    } catch (error) {
      console.error('Error analyzing image with Gemini:', error);
      throw new Error(`Failed to analyze image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async extractSpecificInfo(imageBuffer: Buffer, mimeType: string): Promise<any> {
    try {
      const imagePart = {
        inlineData: {
          data: imageBuffer.toString('base64'),
          mimeType: mimeType
        }
      };

      let prompt = `
            Extract the following information from this certificate image:
            - Certificate ID (as certid)
            - Name of the recipient (as name)
            - Roll number (as "roll number")
            - Marks or grade (as marks)
            
            Return ONLY a raw JSON object in the format { "certid": "...", "name": "...", "roll number": "...", "marks": "..." }.
            Do not include markdown formatting, explanations, or any other text outside of the JSON object.
          `;

      const result = await this.model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const analysis = response.text();

      // Clean the response to get raw JSON
      const jsonString = analysis.replace(/```json\n/g, '').replace(/\n```/g, '').trim();

      try {
        // Parse the JSON string
        const parsedJson = JSON.parse(jsonString);
        return parsedJson;
      } catch (e) {
        console.error("Failed to parse JSON from Gemini response:", jsonString);
        throw new Error("Invalid JSON response from AI service");
      }
    } catch (error) {
      console.error('Error extracting specific info:', error);
      throw new Error(`Failed to extract information: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private extractCategories(analysis: string): string[] {
    // Simple keyword-based category extraction
    const categories: string[] = [];
    const keywords = {
      'document': ['document', 'paper', 'text', 'form'],
      'certificate': ['certificate', 'diploma', 'award', 'achievement'],
      'photo': ['photo', 'picture', 'image', 'portrait'],
      'screenshot': ['screenshot', 'screen', 'interface', 'app'],
      'chart': ['chart', 'graph', 'data', 'statistics'],
    };

    for (const [category, words] of Object.entries(keywords)) {
      if (words.some(word => analysis.toLowerCase().includes(word))) {
        categories.push(category);
      }
    }

    return categories.length > 0 ? categories : ['general'];
  }
}

export default new GeminiService();
