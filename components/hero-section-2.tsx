'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Medal } from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

const HeroSection2 = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className='w-full py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col items-center space-y-6 lg:items-start'>
            <Badge variant='outline' className='text-muted-foreground gap-2 px-4 py-2'>
              <Medal className='!size-4' aria-hidden='true' />
              PREMIUM COMPONENTS
            </Badge>

            <div className='space-y-4 text-center lg:text-start'>
              <h1 className='text-4xl font-bold tracking-tight text-balance md:text-5xl'>
                Build Beautiful UIs with ShadcnStore
              </h1>
              <p className='text-muted-foreground text-balance md:text-lg'>
                Access our premium collection of responsive, accessible, and customizable UI components to accelerate
                your development workflow.
              </p>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-4 lg:justify-start'>
              <Button size='lg' className='cursor-pointer'>
                Browse Components
              </Button>
              <Button variant='outline' size='lg' className='cursor-pointer'>
                View Documentation
              </Button>
            </div>
          </div>

          <div className='group relative overflow-hidden rounded-xl'>
            <Card className='overflow-hidden border-0 shadow-lg py-0'>
              <CardContent className='p-0'>
                <AspectRatio ratio={16 / 9}>
                  {isPlaying ? (
                    <iframe
                      src='https://www.youtube.com/embed/zc6JjX95Tn0?si=TxJQQ8F9CXAvloUs'
                      title='Shadcn UI Tutorial - Build Beautiful Interfaces'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='size-full rounded-lg'
                      loading='lazy'
                    />
                  ) : (
                    <div className='relative size-full'>
                      <img
                        src='https://ui.shadcn.com/placeholder.svg'
                        alt='ShadcnStore Demo'
                        className='size-full rounded-lg object-cover dark:brightness-[0.95] dark:invert'
                        width={800}
                        height={450}
                      />
                      <div className='from-background/40 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent' />

                      <Button
                        variant='ghost'
                        onClick={() => setIsPlaying(true)}
                        className='focus-visible:ring-ring/50 absolute inset-0 flex size-full cursor-pointer items-center justify-center transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none'
                        aria-label='Play demo video'
                      >
                        <div className='bg-background/90 flex size-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105'>
                          <Play size={20} className='ms-1' />
                        </div>
                      </Button>

                      <div className='absolute start-4 end-4 bottom-4'>
                        <p className='text-foreground text-sm font-medium'>Watch Demo</p>
                        <p className='text-muted-foreground text-xs'>1:54 mins</p>
                      </div>
                    </div>
                  )}
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection2
