import Card from './ui/Card'

interface SkillCardProps {
  title: string
  icon: React.ReactNode
}

export default function SkillCard({ icon, title }: SkillCardProps) {
  return (
    <Card className='text-paragraph '>
      {icon}
      <h4 className='text-center text-sm font-medium leading-none text-paragraph'>{title}</h4>
    </Card>
  )
}
