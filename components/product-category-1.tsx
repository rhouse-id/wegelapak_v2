import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'

// Create a type for valid icon names
type IconName = keyof typeof LucideIcons

interface Category {
  id: string
  name: string
  courses: string
  icon: IconName
}

const categories = [
  { id: '1', name: 'Featured', courses: '03 Courses', icon: 'MonitorSmartphone' },
  { id: '2', name: 'Language', courses: '04 Courses', icon: 'Languages' },
  { id: '3', name: 'Marketing', courses: '04 Courses', icon: 'BarChart3' },
  { id: '4', name: 'Networking', courses: '02 Courses', icon: 'Network' },
  { id: '5', name: 'Programming', courses: '01 Course', icon: 'Code2' },
  { id: '6', name: 'SEO', courses: '03 Courses', icon: 'Search' },
  { id: '7', name: 'Technology', courses: '03 Courses', icon: 'Lightbulb' },
  { id: '8', name: 'UI/UX Design', courses: '02 Courses', icon: 'Pencil' },
] as const satisfies readonly Category[]

const ProductCategory2 = ({ className }: { className?: string }) => {
  return (
    <section className={cn('relative w-full py-12 md:py-16 lg:py-20', className)}>
      <div className='relative z-10 container mx-auto px-4 md:px-6'>
        <header className='mx-auto mb-12 max-w-5xl'>
          <div className='flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-start'>
            <div className='space-y-4'>
              <div className='inline-flex'>
                <span className='bg-secondary/80 text-secondary-foreground rounded-full px-4 py-1.5 text-sm font-medium'>
                  Course List
                </span>
              </div>
              <div className='space-y-2'>
                <h2 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl'>Popular Courses</h2>
                <p className='text-muted-foreground max-w-2xl'>
                  Explore our wide range of courses designed to help you achieve your learning goals.
                </p>
              </div>
            </div>
            <Button className='cursor-pointer whitespace-nowrap' size='lg'>
              View All Courses
              <LucideIcons.ArrowRight className='ms-2' />
            </Button>
          </div>
        </header>

        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {categories.map(category => {
            const Icon = LucideIcons[category.icon] || LucideIcons['X']
            return (
              <Card
                key={category.id}
                className='group relative overflow-hidden shadow-xs transition-all hover:shadow-md'
              >
                <CardContent>
                  <div className='space-y-4'>
                    <div className='bg-secondary/80 text-secondary-foreground flex size-12 items-center justify-center rounded-lg'>
                      <Icon className='size-5' strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className='text-foreground text-lg font-semibold'>{category.name}</h3>
                      <p className='text-muted-foreground text-sm'>{category.courses}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { ProductCategory2 as default }
