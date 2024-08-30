import { Phone, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import Link from "next/link";
import '../app/Scroll.css';


export const Contact = () => {
    return (
        <section id="contact" className="h-screen w-full py-12 md:py-24 scrollcito">
            <div className="container px-4 md:px-6 lg:px-40">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Get in Touch</h3>
                <div className="grid gap-10 md:gap-6 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 text-primary" />
                            <span>sbenjacarias@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-5 w-5 text-primary" />
                            <span>+505 7726 6874</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>Managua, Nicaragua</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-startA space-x-4 mt-4">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <Input id="email" placeholder="Your email" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <Textarea id="message" placeholder="Your message" />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
