interface SkillCardProps {
  title: string
  icon: React.ReactNode
}

export default function SkillCard({icon, title}: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-sm border-2 border-muted-foreground bg-muted-foreground/10 p-6 text-muted-foreground transition-all duration-200 ease-in-out-expo hover:shadow-md hover:shadow-muted-foreground">
      {icon}
      <h4 className="text-center text-sm font-medium leading-none">{title}</h4>
    </div>
  )
}
