import { Badge } from '../ui/badge'
import { 
    Target,
    FileSearch,
    Brain,
    BarChart3,
    Clock,
    TrendingUp,
    ShieldCheck,
    Award
} from 'lucide-react'

const HowItWorks = () => {
  return (
<section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 border-indigo-200 px-6 py-3 text-lg">
              <Target className="w-5 h-5 mr-2" />
              How it works?
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Built for Scale,
              <br />
              <span className="text-indigo-600">Designed for Trust</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From single verification to state-wide deployment, Truth scales seamlessly 
              while maintaining the highest standards of security and accuracy.
            </p>
          </div>
          
          {/* Process Flow */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-bold">
                  STEP 1
                </div>
                <div className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileSearch className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Upload</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Drag, drop, or bulk upload certificates. Our AI automatically detects document type, 
                    orientation, and quality, preprocessing for optimal analysis.
                  </p>
                </div>
              </div>
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold">
                  STEP 2
                </div>
                <div className="pt-8">
                  <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Analysis</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Multi-layer neural networks extract text, analyze fonts, detect tampering, 
                    and cross-reference with 500+ institutional databases simultaneously.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold">
                  STEP 3
                </div>
                <div className="pt-8">
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Instant Report</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Comprehensive verification report with confidence scores, detailed findings, 
                    and actionable insights delivered in under 3 seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/90 transition-all duration-300">
              <Clock className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Lightning Fast</h4>
              <p className="text-sm text-slate-600">Average verification in under 3 seconds</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/90 transition-all duration-300">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Scalable</h4>
              <p className="text-sm text-slate-600">Handle millions of verifications daily</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/90 transition-all duration-300">
              <ShieldCheck className="h-10 w-10 text-purple-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Secure</h4>
              <p className="text-sm text-slate-600">Enterprise-grade security & compliance</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/90 transition-all duration-300">
              <Award className="h-10 w-10 text-orange-600 mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Accurate</h4>
              <p className="text-sm text-slate-600">99.7% accuracy with continuous learning</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks;