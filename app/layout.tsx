import "./globals.css";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-jakarta",
});
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata = {
	title: "Ekene Muoma | Developer",
	description: "Web Developer, Businness Owner and Tech Enthusiast",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={` ${jakarta.variable} ${sora.variable}`}>
				{children}
			</body>
		</html>
	);
}
