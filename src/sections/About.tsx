import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#050505]"
    >
      <div ref={contentRef} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Обо мне
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4 leading-tight">
              Кто я
            </h2>
            <div className="mt-8 space-y-6 text-white/70 text-base sm:text-lg leading-relaxed">
              <p>
                Меня зовут Игорь. Я фрилансер на платформе Kwork с многолетним опытом 
                в веб-разработке, копирайтинге и автоматизации бизнес-процессов.
              </p>
              <p>
                Моя цель — помогать клиентам решать задачи быстро, качественно и без головной боли. 
                Специализируюсь на создании лендингов, которые продают, написании текстов, которые цепляют, 
                и настройке скриптов, которые экономят часы рабочего времени.
              </p>
              <p>
                Работаю с проектами любого масштаба: от простых визиток и текстов до сложных 
                систем автоматизации и парсинга данных. Каждый проект — это индивидуальный подход 
                и полная вовлеченность в результат.
              </p>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              {/* Abstract tech illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6f61]/20 to-transparent rounded-2xl" />
              <div className="absolute inset-4 border border-white/10 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-7xl sm:text-8xl text-white/10">V</div>
                  <div className="mt-4 text-[#ff6f61] font-display text-xl tracking-wider">VIBE</div>
                  <div className="mt-2 text-white/40 text-sm uppercase tracking-widest">Freelance Studio</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#ff6f61]/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#ff6f61]/10 rounded-full" />
              <div className="absolute top-1/2 -right-8 w-2 h-2 bg-[#ff6f61] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
