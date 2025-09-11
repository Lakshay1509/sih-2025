import { Badge } from '../ui/badge';
import { 
    CheckCircle, 
    Shield, 
    Users,
    Globe,
    Star,
    Award,
    ArrowRight
} from 'lucide-react';
import AnimatedCounter from '../ui/animated-counter';
import FloatingElement from '../ui/floating-element';
import Link from 'next/link';
import { Button } from '../ui/button';

const Showcase = () => {
  return (
    <section id="enterprise" className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 px-6 py-3 text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Trusted Worldwide
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  The Global Standard
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    for Academic Integrity
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Join the revolution that&apos;s protecting educational institutions worldwide. 
                  Our enterprise-grade platform is the trusted choice for governments, 
                  universities, and corporations across the globe.
                </p>
              </div>
              
              {/* Feature List */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">State-Wide Deployment Ready</h4>
                    <p className="text-slate-600">Scalable infrastructure that grows with your needs, from single institutions to entire educational systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Enterprise Security</h4>
                    <p className="text-slate-600">Military-grade encryption, SOC 2 compliance, and zero-trust architecture protect sensitive data.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">24/7 Expert Support</h4>
                    <p className="text-slate-600">Dedicated support team and professional services to ensure seamless integration and operation.</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/admin">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
                >
                  Schedule Enterprise Demo
                </Button>
              </div>
            </div>
            
            {/* Right Stats Dashboard */}
            <div className="relative">
              {/* Main Dashboard */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Live Statistics</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">LIVE</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">
                      <AnimatedCounter value={2847} />
                    </div>
                    <div className="text-blue-200 text-sm">Verifications Today</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2 text-green-400">
                      <AnimatedCounter value={2756} />
                    </div>
                    <div className="text-blue-200 text-sm">Authentic</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2 text-red-400">
                      <AnimatedCounter value={91} />
                    </div>
                    <div className="text-blue-200 text-sm">Fraudulent Detected</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2 text-purple-400">2.1s</div>
                    <div className="text-blue-200 text-sm">Avg Response Time</div>
                  </div>
                </div>
                
                {/* Mini Chart Representation */}
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-200">Detection Accuracy</span>
                    <span className="text-sm font-bold text-green-400">99.7%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{width: '99.7%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Mini Cards */}
              <div className="absolute -top-4 -right-4">
                <FloatingElement delay={0}>
                  <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
                    <Star className="h-6 w-6 text-yellow-500 mx-auto" />
                    <div className="text-xs text-slate-600 mt-1">Top Rated</div>
                  </div>
                </FloatingElement>
              </div>
              
              <div className="absolute -bottom-6 -left-6">
                <FloatingElement delay={1}>
                  <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
                    <Award className="h-6 w-6 text-blue-500 mx-auto" />
                    <div className="text-xs text-slate-600 mt-1">Certified</div>
                  </div>
                </FloatingElement>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Showcase;
