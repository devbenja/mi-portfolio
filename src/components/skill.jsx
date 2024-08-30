export function Skill({ icon, name }) {

    const Icon = icon;

    return (
      <div className="flex items-center space-x-2 bg-secondary text-secondary-foreground rounded-full px-3 py-1 !bg-blue-600">
        <Icon className="h-4 w-4 text-white" />
        <span className="text-sm font-medium text-white">{name}</span>
      </div>
    )

  }