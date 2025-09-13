import { Hono } from "hono";
import geminiService from "@/lib/gemini-service";

const app = new Hono()
    .post('/',async(ctx)=>{
        try {
            const body = await ctx.req.parseBody();
            const file = body['image'] as File;
             
            if(!file){
                return ctx.json({error:"No image file provided"}, 400)
            }

            if(!file.type.startsWith('image/')){
                return ctx.json({error:"File must be an image"}, 400);
            }

            const maxSize = 10 * 1024 * 1024; // 10 MB
            if(file.size > maxSize){
                return ctx.json({error:"File should not exceed 10 MB limit"}, 400);
            }

            const imageBuffer = Buffer.from(await file.arrayBuffer());

            const result = await geminiService.extractSpecificInfo(
                imageBuffer,
                file.type,
            );

            return ctx.json(result);

        } catch (e) {
            console.error('OCR processing error:', e);
            const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
            return ctx.json({ error: "Failed to process image", details: errorMessage }, 500);
        }
    })


export default app;