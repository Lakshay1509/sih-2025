import { Badge } from "../ui/badge";
import { CheckCircle, ScrollText, Shield } from "lucide-react";
import AnimatedCounter from "../ui/animated-counter";

const Stats = () => {
	return (
		<div className="border-t border-slate-800 pt-12 mb-12">
			<div className="grid md:grid-cols-4 gap-8 text-center">
				<div>
					<div className="text-3xl font-bold text-white mb-2">
						<AnimatedCounter value={500} suffix="+" />
					</div>
					<div className="text-slate-400">Active Institutions</div>
				</div>
				<div>
					<div className="text-3xl font-bold text-white mb-2">
						<AnimatedCounter value={2.5} suffix="M+" />
					</div>
					<div className="text-slate-400">Certificates Verified</div>
				</div>
				<div>
					<div className="text-3xl font-bold text-white mb-2">99.7%</div>
					<div className="text-slate-400">Accuracy Rate</div>
				</div>
				<div>
					<div className="text-3xl font-bold text-white mb-2">24/7</div>
					<div className="text-slate-400">Global Support</div>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<footer className="bg-slate-900 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
				{/* Main Footer Content */}
				<div className="grid lg:grid-cols-4 gap-12 mb-12">
					{/* Brand Column */}
					<div className="lg:col-span-2 space-y-6">
						<div className="flex items-center space-x-3">
							<div className="relative">
								<ScrollText className="h-12 w-12 text-blue-500" />
							</div>
							<div>
								<h3 className="text-3xl font-bold text-white">Truth</h3>
								<p className="text-blue-400 text-sm font-medium">
									AI VERIFICATION PLATFORM
								</p>
							</div>
						</div>

						<p className="text-slate-300 text-lg leading-relaxed max-w-md">
							Revolutionizing academic integrity with AI-powered certificate
							verification. Trusted by institutions worldwide to combat academic
							fraud.
						</p>

						<div className="flex items-center space-x-4">
							<Badge className="bg-green-500/20 text-green-400 border-green-500/30">
								<CheckCircle className="w-4 h-4" />
								Secure
							</Badge>
						</div>
					</div>

					{/* Solutions Column */}
					<div>
						<h4 className="text-white font-bold text-lg mb-6">Solutions</h4>
						<ul className="space-y-3 text-slate-300">
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									Certificate Verification
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									Bulk Processing
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									API Integration
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									Custom Deployment
								</a>
							</li>
						</ul>
					</div>

					{/* Company Column */}
					<div>
						<h4 className="text-white font-bold text-lg mb-6">Company</h4>
						<ul className="space-y-3 text-slate-300">
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									Contact
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-blue-400 transition-colors">
									Support
								</a>
							</li>
						</ul>
					</div>
				</div>

        {/* <Stats /> */}

				{/* Bottom Footer */}
				<div className="border-t border-slate-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-slate-400 text-sm">
							© 2025 Truth AI Verification Platform. All rights reserved.
							<span className="text-blue-400 ml-2">
								Building the future of academic integrity.
							</span>
						</div>

						<div className="flex space-x-6 text-slate-400 text-sm">
							<a href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Terms of Service
							</a>
							<a href="#" className="hover:text-white transition-colors">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
