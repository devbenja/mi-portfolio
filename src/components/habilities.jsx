import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillGrid } from "./SkillGrid";
import '../app/Scroll.css';

export const Habilities = () => {
    return (
        <section id="skills" className="w-full h-screen py-12 md:py-24 lg:py-24 border-b-2 md:px-20 scrollcito">
            <div className="container px-4 md:px-6">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 text-center">Habilidades y Tecnologías</h3>
                <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-8">
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                        <TabsTrigger value="tools">Herramientas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend" className="space-y-4">
                        <SkillGrid
                            skills={[
                                { name: "React", icon: "/react-svgrepo-com.svg", description: "Biblioteca para construir interfaces de usuario" },
                                { name: "Javascript", icon: "/javascript-svgrepo-com.svg", description: "Lenguaje de Programación" },
                                { name: "HTML", icon: "/html-5-svgrepo-com.svg", description: "Maquetación Web" },
                                { name: "CSS/SASS", icon: "/css-3-svgrepo-com.svg", description: "Estilos y preprocesador CSS" },
                                { name: "Tailwind CSS", icon: "/tailwindcss-icon-svgrepo-com.svg", description: "Framework CSS de utilidad" },
                            ]}
                        />
                    </TabsContent>
                    <TabsContent value="backend" className="space-y-4">
                        <SkillGrid
                            skills={[
                                { name: "Node.js", icon: "/nodejs-svgrepo-com.svg", description: "Entorno de ejecución para JavaScript" },
                                { name: "Express", icon: "/express-svgrepo-com.svg", description: "Framework web para Node.js" },
                                { name: "PostgreSQL", icon: "/postgresql-svgrepo-com.svg", description: "Sistema de gestión de bases de datos relacional" },
                                { name: "Python", icon: "/python-svgrepo-com.svg", description: "Lenguaje de programación versátil" },
                                { name: "Django", icon: "/django-svgrepo-com.svg", description: "Framework de Python para la Web" },
                                { name: "SQL Server", icon: "/microsoft-sql-server-logo-svgrepo-com.svg", description: "Sistema de gestión de bases de datos relacional" },
                            ]}
                        />
                    </TabsContent>
                    <TabsContent value="tools" className="space-y-4">
                        <SkillGrid
                            skills={[
                                { name: "Git", icon: "/git-svgrepo-com.svg", description: "Sistema de control de versiones" },
                                { name: "Github", icon: "/github-142-svgrepo-com.svg", description: "Repositorios en la Nube" },
                                { name: "Postman", icon: "/postman-icon-svgrepo-com.svg", description: "Pruebas de APIS" },
                                { name: "VS Code", icon: "/visual-studio-code-svgrepo-com.svg", description: "Editor de Código" },
                                { name: "Excel", icon: "/excel2-svgrepo-com.svg", description: "Hojas de Cálculo" },
                                { name: "Powerpoint", icon: "/powerpoint2-svgrepo-com.svg", description: "Creación de Presentaciones" },
                                { name: "Word", icon: "/word2-svgrepo-com.svg", description: "Creación de Documentos" },
                            ]}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
