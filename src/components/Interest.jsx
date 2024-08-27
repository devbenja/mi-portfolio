export function Interest({ icon, name }) {

    const Icon = icon;

    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="bg-primary text-primary-foreground rounded-full p-3 bg-blue-700">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    )

  }