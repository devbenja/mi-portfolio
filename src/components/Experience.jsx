import { TimelineItem } from "./TimeLineItem";
import { Briefcase } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 border-b-2 scrollcito">
            <div className="container px-4 md:px-6">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Experiencia Profesional</h3>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
                    <div className="space-y-12 lg:space-y-24">
                        <TimelineItem
                            year="2023 - Presente"
                            title="Desarrollador Full Stack"
                            icon={Briefcase}
                            company="Desarrollador Independiente"
                            description="Desarrollo aplicaciones SPA y APIs REST, utilizando tecnologías modernas y buenas prácticas de desarrollo."
                            technologies={["React", "Next", "Node", "Express", "PostgreSQL", "Tailwind CSS"]}
                            index={0}
                        />
                        <TimelineItem
                            year="2022 - 2023"
                            title="Software Specialist"
                            icon={Briefcase}
                            company="GBM Nicaragua"
                            description="Desarrollé y mantuve múltiples proyectos de clientes, enfocándome en la optimización de procesos empresariales."
                            technologies={["Automation Anywhere", "Python", "SQL", "Excel"]}
                            index={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
