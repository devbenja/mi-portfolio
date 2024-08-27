"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Moon, Sun, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { About } from "@/components/about.jsx";
import { Habilities } from "@/components/habilities";

export default function Home() {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<div className="bg-background text-foreground">
				<header className="px-4 lg:px-6 h-14 flex items-center justify-between">
					<Link className="flex items-center justify-center" href="#">
						<MountainIcon className="h-6 w-6" />
						<span className="sr-only">BC</span>
					</Link>
					<nav className="hidden md:flex gap-4 sm:gap-6 ml-auto">
						<Button variant="ghost" className="text-sm font-medium" asChild>
							<Link href="#about">About</Link>
						</Button>
						<Button variant="ghost" className="text-sm font-medium" asChild>
							<Link href="#projects">Projects</Link>
						</Button>
						<Button variant="ghost" className="text-sm font-medium" asChild>
							<Link href="#contact">Contact</Link>
						</Button>
					</nav>
					<div className="flex items-center">
						<Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
							{darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
							<span className="sr-only">Toggle theme</span>
						</Button>
						<Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</header>
				{mobileMenuOpen && (
					<div className="md:hidden bg-background text-foreground">
						<nav className="flex flex-col items-center py-4">
							<Button variant="ghost" className="w-full text-sm font-medium" asChild>
								<Link href="#about">About</Link>
							</Button>
							<Button variant="ghost" className="w-full text-sm font-medium" asChild>
								<Link href="#projects">Projects</Link>
							</Button>
							<Button variant="ghost" className="w-full text-sm font-medium" asChild>
								<Link href="#contact">Contact</Link>
							</Button>
						</nav>
					</div>
				)}
				<section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-44 border-b-2 border-gray-600 mt-8 md:mt-0">
					<div className="container px-4 md:px-6 lg:px-40">
						<div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_350px] items-center">
							<div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
								<div className="relative w-48 h-48 lg:w-64 lg:h-64">
									<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-25 blur-xl"></div>
									<div className="relative z-10 w-full h-full overflow-hidden">
										<Image
											alt="Benjamín Carías"
											className="object-cover object-center rounded-2xl"
											src="/plin.png"
											layout="fill"
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center space-y-12 md:space-y-4 text-center md:text-left">
								<div className="space-y-3">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Hi, I'm Benjamín Carías
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl dark:text-gray-400">
										I'm a full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
									</p>
								</div>
								<div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
									<Button className="inline-flex items-center justify-center w-full sm:w-auto h-12 sm:h-auto">
										View My Work
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
									<Button className="inline-flex items-center justify-center w-full sm:w-auto h-12 sm:h-auto">
										Download CV
										<FileText className="ml-2 h-4 w-4" />
									</Button>
								</div>

							</div>
						</div>
					</div>
				</section>

				<About/>	

				<Habilities/>
			</div>
		</div>
	);
}

function MountainIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
