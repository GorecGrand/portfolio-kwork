import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, FileText, Palette, Database, Cpu } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Globe,
    title: 'Разработка лендингов',
    description: 'Создание одностраничных сайтов под продукты и услуги. Продающие страницы с современным дизайном и адаптивной вёрсткой.',
    timeframe: '3 — 7 дней',
  },
  {
    icon: FileText,
    title: 'Копирайтинг',
    description: 'Тексты для лендингов, продающие описания, тексты для визиток и профилей. Контент, который конвертирует.',
    timeframe: '1 — 3 дня',
  },
  {
    icon: Palette,
    title: 'Визитки и изображения',
    description: 'Дизайн визиток и промо-материалов, обложки и баннеры с использованием нейросетей.',
    timeframe: '1 — 2 дня',
  },
  {
    icon: Database,
    title: 'Парсинг данных',
    description: 'Сбор информации с сайтов по заданным параметрам: товары, контакты, каталоги и многое другое.',
    timeframe: '2 — 5 дней',
  },
  {
    icon: Cpu,
    title: 'Автоматизация',
    description: 'Скрипты, интеграции и упрощение рутинных задач. Сбор заявок, отчёты, связка сервисов.',
    timeframe: '3 — 10 дней',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            Услуги
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            Что я делаю
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group relative p-8 bg-[#111111] border border-[#222222] rounded-2xl hover:-translate-y-1 hover:border-[#333333] transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff6f61]/10 mb-6">
                <service.icon className="w-6 h-6 text-[#ff6f61]" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-xs text-[#ff6f61] font-medium">
                <span className="w-1.5 h-1.5 bg-[#ff6f61] rounded-full" />
                Срок: {service.timeframe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
