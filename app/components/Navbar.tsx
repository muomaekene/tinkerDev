"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [active, setActive] = useState("hero");
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const links = [
		{ name: "Home", href: "hero" },
		{ name: "Services", href: "services" },
		{ name: "Projects", href: "projects" },
		{ name: "Contact", href: "contact" },
	];

	// Scroll spy + shadow
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			links.forEach((link) => {
				const section = document.getElementById(link.href);
				if (!section) return;

				const rect = section.getBoundingClientRect();
				if (rect.top <= 120 && rect.bottom >= 120) {
					setActive(link.href);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-black/60 backdrop-blur-xl border-b border-gray-800 shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-6xl mx-0 px-5 md:px-10 py-4 md:py-5 flex items-center">
				<div className="flex-1">
					<Logo />
				</div>

				<div className="hidden md:flex gap-10 text-sm">
					{links.map((link) => (
						<a
							key={link.name}
							href={`#${link.href}`}
							className="relative group"
						>
							<span
								className={`transition ${
									active === link.href
										? "text-white"
										: "text-gray-400 group-hover:text-white"
								}`}
							>
								{link.name}
							</span>

							<span
								className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-500 transition-all duration-300 ${
									active === link.href ? "w-full" : "w-0 group-hover:w-full"
								}`}
							/>
						</a>
					))}
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden ml-auto text-white"
				>
					{isOpen ? <X size={26} /> : <Menu size={26} />}
				</button>
			</div>

			{/* 📱 MOBILE MENU */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -15 }}
						transition={{ duration: 0.25 }}
						className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 px-6 py-8 space-y-6"
					>
						{links.map((link) => (
							<a
								key={link.name}
								href={`#${link.href}`}
								onClick={() => setIsOpen(false)}
								className={`block text-lg ${
									active === link.href ? "text-white" : "text-gray-400"
								}`}
							>
								{link.name}
							</a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
