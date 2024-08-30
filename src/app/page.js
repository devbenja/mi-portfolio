"use client";

import './Scroll.css';
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Moon, Sun, FileText, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { About } from "@/components/about.jsx";
import { Habilities } from "@/components/habilities";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from '@/components/Contact';

import { ReactTyped  } from 'react-typed';

export default function Home() {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(true);


	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={`${darkMode ? 'dark' : ''}`}>
			<div className="bg-background text-foreground">
				<header className="px-4 lg:px-6 h-14 flex items-center justify-between">
					<Link className="flex items-center justify-center" href="#">
						<Terminal className="h-6 w-6" />
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

				<section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-44 border-b-2 mt-8 md:mt-0">
					<div className="container px-4 md:px-6 lg:px-40">
						<div className="grid gap-10 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_350px] items-center">
							<div className="flex items-center justify-center lg:justify-end order-first lg:order-last mt-8">
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
							<div className="flex flex-col justify-center space-y-14 md:space-y-4 text-center md:text-left">
								<div className="space-y-3">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										<span className="text-blue-600 mr-3">Hi, I'm</span>
										<ReactTyped 
											strings={['Benjamín Carías']}
											typeSpeed={40}
											backSpeed={60}
											loop
										/>
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

				<About />

				<Habilities />

				<Experience />

				<Projects />

				<Contact />
			</div>
		</div>
	);
}

