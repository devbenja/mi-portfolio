import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    return (
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Featured Projects</h3>
                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        <CarouselItem>
                            <ProjectCard
                                title="Patient Manager"
                                description="A patient administrator with clinical history and reports of your visits"
                                image="/Patient1.jpeg"
                                technologies={["React", "Bootstrap", "SQL Server", ".Net Core", "Emtity Framework"]}
                                demoLink="https://example.com/ecommerce-demo"
                                githubLink="https://github.com/janedoe/ecommerce-platform"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <ProjectCard
                                title="Task Management App"
                                description="A collaborative task management application with real-time updates and team communication features."
                                image="/placeholder.svg?height=400&width=600"
                                technologies={["Vue.js", "Express", "PostgreSQL", "Socket.io"]}
                                demoLink="https://example.com/taskapp-demo"
                                githubLink="https://github.com/janedoe/task-management-app"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <ProjectCard
                                title="AI-powered Chatbot"
                                description="An intelligent chatbot leveraging natural language processing to provide customer support and information."
                                image="/placeholder.svg?height=400&width=600"
                                technologies={["Python", "TensorFlow", "Flask", "React"]}
                                demoLink="https://example.com/chatbot-demo"
                                githubLink="https://github.com/janedoe/ai-chatbot"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <div className="flex justify-center mt-4">
                        <CarouselPrevious className="hidden md:block" />
                        <CarouselNext className="hidden md:block" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
