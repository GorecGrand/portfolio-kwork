import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Package, DollarSign, Clock, CreditCard, RefreshCw } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    icon: Package,
    title: 'Понятные пакеты и кворки',
    description: 'Каждая услуга разбита на понятные пакеты с чётким описанием объёма работы.',
  },
  {
    icon: DollarSign,
    title: 'Фиксированная стоимость',
    description: 'Цена известна заранее, никаких скрытых платежей и неожиданностей.',
  },
  {
    icon: Clock,
    title: 'Прозрачные сроки',
    description: 'Точные дедлайны для каждого этапа работы, отслеживание прогресса онлайн.',
  },
  {
    icon: CreditCard,
    title: 'Безопасная оплата',
    description: 'Оплата через защищённую систему Kwork, деньги в безопасности до приёмки работы.',
  },
  {
    icon: RefreshCw,
    title: 'Правки и гарантия',
    description: 'Включённые правки в каждый пакет и гарантия качества выполненной работы.',
  },
]

export default function WhyKwork() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return
        gsap.from(item, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
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
      id="why-kwork"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            Преимущества
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4 max-w-3xl mx-auto">
            Почему со мной удобно работать через Kwork
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => { itemsRef.current[index] = el }}
              className="group flex flex-col p-6 bg-[#111111]/50 border border-[#222222] rounded-xl hover:bg-[#111111] hover:border-[#333333] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ff6f61]/10">
                  <benefit.icon className="w-5 h-5 text-[#ff6f61]" />
                </div>
                <Check className="w-5 h-5 text-green-400" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
