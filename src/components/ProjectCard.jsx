import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function ProjectCard({ title, description, image, technologies, demoLink, githubLink }) {
    return (
        <Card className="overflow-hidden max-w-2xl mx-auto">
            <Image src={image} alt={title} width={600} height={400} className="w-full h-64 object-cover" />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1 !bg-blue-600 text-white">
                            {tech}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex items-center">
                    <Button variant="outline" disabled className="mr-2 opacity-50 cursor-not-allowed">
                        {/* <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                            
                        </Link> */}
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                    </Button>
                    <span className="text-sm text-muted-foreground">Próximamente</span>
                </div>
                <Button variant="outline" asChild>
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}