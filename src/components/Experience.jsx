import { TimelineItem } from "./TimeLineItem";
import { Briefcase, BookMarked } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 border-b-2">
            <div className="container px-4 md:px-6">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Experiencia Profesional</h3>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
                    <div className="space-y-12 lg:space-y-24">
                        <TimelineItem
                            year="2021 - Presente"
                            title="Desarrollador Full Stack Senior"
                            icon={Briefcase}
                            company="TechCorp Inc."
                            description="Desarrollador líder para aplicaciones web de nivel empresarial, mentorando a desarrolladores junior e implementando mejores prácticas para arquitectura escalable."
                            technologies={["React", "Node.js", "AWS", "GraphQL"]}
                            index={0}
                        />
                        <TimelineItem
                            year="2018 - 2021"
                            title="Desarrollador Full Stack"
                            icon={Briefcase}
                            company="InnoSoft Solutions"
                            description="Desarrollé y mantuve múltiples proyectos de clientes, enfocándome en diseño responsivo y optimización de rendimiento."
                            technologies={["Vue.js", "Express", "PostgreSQL", "Docker"]}
                            index={1}
                        />
                        <TimelineItem
                            year="2016 - 2018"
                            title="Desarrollador Frontend"
                            icon={BookMarked}
                            company="WebDesign Pro"
                            description="Creé interfaces de usuario atractivas e implementé lógica frontend compleja para varias aplicaciones web."
                            technologies={["JavaScript", "CSS3", "HTML5", "jQuery"]}
                            index={2}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
