import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Palette, Globe, Briefcase, GraduationCap, Heart, Gamepad2, Book, Plane, FileCheck, TrendingUp } from "lucide-react";
import { Skill } from "./skill.jsx";
import { Interest } from "./Interest.jsx";

export const About = () => {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-24 border-b-2">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Sobre mí</h2>
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-4">
                        <p className="text-lg text-muted-foreground text-justify md:ml-20">
                            Soy un desarrollador full-stack con más de 2 años de experiencia en la creación de aplicaciones web innovadoras y eficientes. Mi pasión por la tecnología y el diseño me impulsa a crear soluciones que no solo funcionan bien, sino que también ofrecen una experiencia de usuario excepcional.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 md:ml-20 justify-between">
                            <Skill icon={Code} name="Desarrollo Full-Stack" />
                            <Skill icon={Palette} name="Diseño UI/UX" />
                            <Skill icon={FileCheck} name="SEO" />
                            <Skill icon={Globe} name="Desarrollo Responsivo" />
                            <Skill icon={TrendingUp} name="Optimización de Rendimiento" />
                        </div>
                    </div>
                    <div>
                        <Carousel className="w-full max-w-xs mx-auto">
                            <CarouselContent>
                                <CarouselItem>
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <Briefcase className="h-12 w-12 mb-4 text-primary text-blue-700" />
                                            <h3 className="text-lg font-semibold mb-2">Experiencia</h3>
                                            <p className="text-center text-sm text-muted-foreground">
                                                2+ años en desarrollo web, trabajando en diferentes proyectos fullstack.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem>
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <GraduationCap className="h-12 w-12 mb-4 text-primary text-blue-600" />
                                            <h3 className="text-lg font-semibold mb-2">Educación</h3>
                                            <p className="text-center text-sm text-muted-foreground">
                                                Ingeniería en Computación y múltiples certificaciones en tecnologías web modernas.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem>
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6">
                                            <Heart className="h-12 w-12 mb-4 text-primary text-blue-600" />
                                            <h3 className="text-lg font-semibold mb-2">Pasiones</h3>
                                            <p className="text-center text-sm text-muted-foreground">
                                                Contribuir a proyectos, mentoría de desarrollo y explorar nuevas tecnologías.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="ml-3" />
                            <CarouselNext className="mr-3"/>
                        </Carousel>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Mis intereses</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Interest icon={Book} name="Lectura" />
                        <Interest icon={Plane} name="Viajes" />
                        <Interest icon={Gamepad2} name="Videojuegos" />
                        <Interest icon={Code} name="Coding" />
                    </div>
                </div>
            </div>
        </section>
    )
}
