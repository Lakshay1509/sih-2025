import React from "react";
import { Badge } from "../ui/badge";
import { Sparkles, ArrowRight, CheckCircle, Shield, Users, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Cta = () => {
	return (
		<section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
				<div className="max-w-4xl mx-auto space-y-8">
					{/* Urgency Badge */}
					<Badge className="mb-6 bg-red-500/20 text-red-300 border-red-500/30 px-6 py-3 text-lg animate-pulse">
						<Sparkles className="w-5 h-5 mr-2" />
						Limited Time: Early Access Available
					</Badge>

					{/* Main CTA Headline */}
					<h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-none">
						Join the
						<br />
						<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
							Verification Revolution
						</span>
					</h2>

					<p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
						Be among the first institutions to deploy next-generation AI
						verification.
						<span className="text-white font-semibold">
							Early adopters save 40%
						</span>{" "}
						and get priority onboarding.
					</p>

					{/* Premium CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
						<Link href="/admin">
							<Button
								size="lg"
								className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<span className="relative flex items-center">
									Start Your Free Trial
									<ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
								</span>
							</Button>
						</Link>

						<Button
							variant="outline"
							size="lg"
							className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl backdrop-blur-sm transition-all duration-300"
						>
							<Play className="mr-3 h-5 w-5" />
							Watch 2-Min Demo
						</Button>
					</div>

					{/* Guarantee & Risk Reversal */}
					<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
						<div className="flex items-center justify-center space-x-6 text-white">
							<div className="text-center">
								<CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
								<div className="text-sm font-medium">30-Day Free Trial</div>
							</div>
							<div className="text-center">
								<Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
								<div className="text-sm font-medium">No Setup Costs</div>
							</div>
							<div className="text-center">
								<Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
								<div className="text-sm font-medium">24/7 Support</div>
							</div>
						</div>
					</div>

					{/* Urgency Timer Effect */}
					<div className="text-center">
						<p className="text-slate-400 text-sm">
							🔥{" "}
							<span className="text-orange-400 font-semibold">
								47 institutions
							</span>{" "}
							joined this week
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
