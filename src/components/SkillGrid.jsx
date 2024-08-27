import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 rounded-full">
                <Image src={skill.icon} alt={skill.name} width={30} height={30} />
              </div>
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}