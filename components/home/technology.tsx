import { Badge } from '../ui/badge'
import { 
    Brain,
    Layers,
    Database,
    Fingerprint,
    Microscope
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import AnimatedCounter from '../ui/animated-counter'

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-500/30 px-6 py-3 text-lg">
              <Microscope className="w-5 h-5 mr-2" />
              Revolutionary Technology
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Next-Generation
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI Detection Engine
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our proprietary technology stack combines machine learning, blockchain verification, 
              and advanced cryptography to create an unbreachable verification system.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {/* Advanced OCR Engine */}
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">Neural OCR Engine</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  Advanced computer vision models trained on 50M+ documents extract text with 99.9% accuracy, 
                  even from damaged or low-quality scans.
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Blockchain Verification */}
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">Blockchain Integrity</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  Immutable certificate hashes stored on distributed ledger ensure tamper-proof verification 
                  with cryptographic proof of authenticity.
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Real-time Database */}
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">Live Database Sync</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  Real-time integration with 500+ institutional databases provides instant cross-verification 
                  against official academic records.
                </CardDescription>
              </CardHeader>
            </Card>
            
            {/* Forensic Analysis */}
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Fingerprint className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-3">Forensic Analysis</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  Multi-layer forensic algorithms detect pixel-level tampering, font inconsistencies, 
                  and digital manipulation with microscopic precision.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={99.7} suffix="%" />
                </div>
                <div className="text-blue-200 font-medium">Detection Accuracy</div>
                <div className="text-xs text-slate-400 mt-1">Industry Leading</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={2.3} suffix="s" />
                </div>
                <div className="text-blue-200 font-medium">Avg Processing Time</div>
                <div className="text-xs text-slate-400 mt-1">Lightning Fast</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={50} suffix="M+" />
                </div>
                <div className="text-blue-200 font-medium">Training Documents</div>
                <div className="text-xs text-slate-400 mt-1">Massive Dataset</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-blue-200 font-medium">System Uptime</div>
                <div className="text-xs text-slate-400 mt-1">Enterprise Grade</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Technology;
