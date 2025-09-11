import React from "react";
import { Shield, Play, ScrollText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/60 z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					<div className="flex items-center space-x-3">
						<div className="relative">
							<ScrollText className="h-10 w-10 text-blue-600 animate-pulse-glow" />
							{/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> */}
						</div>
						<div>
							<span className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
								Truth
							</span>
							<div className="text-xs text-slate-500 font-medium tracking-wider">
								AI VERIFICATION
							</div>
						</div>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						{/* <a
							href="#solution"
							className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
						>
							Solution
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
						</a>
                        */}
						<a
							href="#technology"
							className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
						>
							Technology
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
						</a> 
						<a
							href="#how-it-works"
							className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
						>
							How it works
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
						</a> 
						<Link href="/admin">
							<Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
								<Play className="h-4 w-4" />
								Try now
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
