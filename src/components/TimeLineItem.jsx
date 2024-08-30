import { Card, CardContent } from "./ui/card";

export function TimelineItem({ year, title, company, description, technologies, align, icon }) {

    const Icon = icon;

    return (
        <div className={`relative flex items-start md:items-center ${align === 'left' ? 'justify-start' : 'justify-end'} lg:even:flex-row-reverse`}>
            <div className="absolute left-1/2 !bg-blue-600 transform -translate-x-1/2 -translate-y-4 lg:translate-y-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon className="text-primary-foreground w-4 h-4 text-white" />
            </div>
            <div className={`w-full lg:w-5/12 ${align === 'left' ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <Card>
                    <CardContent className="p-6">
                        <time className="text-sm font-semibold text-primary">{year}</time>
                        <h3 className="text-lg font-bold mt-2">{title}</h3>
                        <p className="text-muted-foreground">{company}</p>
                        <p className="mt-2 text-justify">{description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech, index) => (
                                <span key={index} className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-1">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}