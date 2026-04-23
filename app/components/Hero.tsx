"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
	return (
		<section id="hero" className="min-h-screen flex flex-col items-start pt-18">
			<div className="grid md:grid-cols-2 gap-10 items-center w-full">
				<div className="flex flex-col gap-4 md:gap-4 max-w-xl">
					<span className="bg-gray-900 text-zinc-300 px-4 py-2 rounded-full w-fit">
						👋 Hi, I&apos;m a developer
					</span>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl font-bold leading-tight"
					>
						I build fast, scalable{" "}
						<span className="text-indigo-500">web apps</span> for startups.
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-400 text-lg max-w-xl"
					>
						I help businesses implement digital solutions that scale — from
						dashboards and payment systems to automation tools.
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="flex gap-4"
					>
						<button className="bg-indigo-500 hover:bg-indigo-600 transition px-8 py-4 rounded-xl font-medium glow">
							View Work
						</button>
						<button className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-xl">
							Contact Me
						</button>
					</motion.div>

					<div className="mt-4">
						<p className="text-xs text-gray-500 mb-3 tracking-widest uppercase">
							Tech Stack
						</p>

						<div className="flex items-center gap-6 w-fit flex-wrap bg-white/5 border border-gray-800 rounded-xl px-4 py-3 backdrop-blur">
							<Image
								alt="Next.js"
								height="24"
								width="24"
								className="h-7 w-7 opacity-80 hover:opacity-100 transition"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
							/>
							<Image
								alt="Next.js"
								height="24"
								width="24"
								className="h-7 w-7 opacity-80 hover:opacity-100 transition"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
							/>
							<Image
								alt="Next.js"
								height="24"
								width="24"
								className="h-7 w-7 opacity-80 hover:opacity-100 transition"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
							/>
							<Image
								alt="Next.js"
								height="24"
								width="24"
								className="h-7 w-7 opacity-80 hover:opacity-100 transition"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
							/>
							<Image
								alt="Next.js"
								height="24"
								width="24"
								className="h-7 w-7 opacity-80 hover:opacity-100 transition"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
							/>
							<Image
								alt="Next.js"
								height="24"
								width="24"
								className="h-7 w-7 opacity-80 hover:opacity-100 transition"
								src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
							/>
						</div>
					</div>
				</div>

				<div className="relative w-full h-87.5 md:h-125">
					<Image
						src="/programming-guy.png"
						alt="Developer illustration"
						fill
						className="object-contain"
						sizes="24"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
