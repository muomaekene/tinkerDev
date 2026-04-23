import { Wrench } from "lucide-react";

export default function Logo() {
	return (
		<a href="#hero" className="flex items-center gap-1.5">
			<div className="text-indigo-500 group-hover:scale-110 transition">
				<Wrench className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7" />
			</div>
			<span className="font-semibold tracking-tight leading-none">
				<span className="text-white text-xl md:text-lg lg:text-xl">tinker</span>
				<span className="text-indigo-500 text-xl md:text-lg lg:text-xl font-bold">
					Dev
				</span>
			</span>
		</a>
	);
}
