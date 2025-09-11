import React from "react";
import { Badge } from "../ui/badge";
import {
	CheckCircle,
	Shield,
	Sparkles,
	ArrowRight,
	Building2,
	Award,
	Globe,
	ShieldCheck,
	Brain,
	Play,
} from "lucide-react";
import AnimatedCounter from "../ui/animated-counter";
import FloatingElement from "../ui/floating-element";
import Link from "next/link";
import { Button } from "../ui/button";

const StatsBar = () => {
	return (
		<div className="flex flex-wrap justify-center items-center gap-8 py-8">
			<div className="text-center">
				<div className="text-4xl font-bold text-slate-900">
					<AnimatedCounter value={99.7} suffix="%" />
				</div>
				<div className="text-sm text-slate-600 font-medium">Accuracy Rate</div>
			</div>
			<div className="text-center">
				<div className="text-4xl font-bold text-slate-900">
					<AnimatedCounter value={500} suffix="+" />
				</div>
				<div className="text-sm text-slate-600 font-medium">Institutions</div>
			</div>
			<div className="text-center">
				<div className="text-4xl font-bold text-slate-900">
					<AnimatedCounter value={2.5} suffix="M+" />
				</div>
				<div className="text-sm text-slate-600 font-medium">
					Certificates Verified
				</div>
			</div>
			<div className="text-center">
				<div className="text-4xl font-bold text-slate-900">
					<AnimatedCounter value={3} suffix="s" />
				</div>
				<div className="text-sm text-slate-600 font-medium">
					Average Verification
				</div>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<section className="relative pt-32 pb-20 overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute top-40 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "4s" }}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="text-center space-y-8">
					{/* Trust Indicators */}
					<div className="flex justify-center items-center space-x-6 mb-8">
						<Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
							<CheckCircle className="w-4 h-4 mr-2" />
							Blockchain Secured
						</Badge>
						<Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
							<Shield className="w-4 h-4 mr-2" />
							Nation-wide Scalable
						</Badge>
						<Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
							<Sparkles className="w-4 h-4 mr-2" />
							AI Powered
						</Badge>
					</div>

					{/* Main Headline */}
					<div className="space-y-6">
						<h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none tracking-tight">
							Stop Academic
							<br />
							<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
								Fraud Forever
							</span>
						</h1>

						<div className="max-w-4xl mx-auto">
							<p className="text-xl tracking-wide md:text-2xl text-slate-500 font-light leading-relaxed mb-4">
								The world&apos;s first{" "}
								<span className="font-semibold text-slate-700">
									smart certificate verification platform
								</span>{" "}
								that instantly detects <br/>fake degrees using blockchain and AI.
							</p>
							<p className="text-lg text-slate-400 tracking-tight">
                                Powered by — Ethereum, Next.js and IPFS
                            </p>
						</div>
					</div>

                    {/* <StatsBar /> */}

                    {/* CTA  */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
						<Link href="/admin">
							<Button
								size="lg"
								className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
							>
								Start Free Verification
								<ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>
						<Button
							variant="outline"
							size="lg"
							className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-12 py-4 text-xl transition-all duration-300 group"
						>
							<Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
							Watch Demo
						</Button>
					</div>

					<div className="pt-8">
						<p className="text-sm text-slate-500 mb-6">
                            Designed and built for
						</p>
						<div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
							<div className="flex items-center space-x-2">
								<Building2 className="h-8 w-8 text-slate-400" />
								<span className="text-slate-600 font-semibold">National Universities</span>
							</div>
							<div className="flex items-center space-x-2">
								<Award className="h-8 w-8 text-slate-400" />
								<span className="text-slate-600 font-semibold">
                                    Private Employers
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Globe className="h-8 w-8 text-slate-400" />
								<span className="text-slate-600 font-semibold">
									State Universities
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<Shield className="h-8 w-8 text-slate-400" />
								<span className="text-slate-600 font-semibold">
									Govt. Agencies
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
