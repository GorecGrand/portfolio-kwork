import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageSquare, ClipboardList, ShoppingCart, Code2, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    icon: MessageSquare,
    title: 'Вы пишете мне на Kwork',
    description: 'Опишите вашу задачу в личных сообщениях, я отвечаю в течение часа.',
  },
  {
    icon: ClipboardList,
    title: 'Мы уточняем задачу и сроки',
    description: 'Обсуждаем детали, объём работы, сроки и выбираем подходящий пакет.',
  },
  {
    icon: ShoppingCart,
    title: 'Вы оформляете заказ на Kwork',
    description: 'Оплата через безопасную систему Kwork, деньги замораживаются до приёмки.',
  },
  {
    icon: Code2,
    title: 'Я выполняю работу',
    description: 'Работаю над проектом, показываю промежуточные результаты на каждом этапе.',
  },
  {
    icon: CheckCircle,
    title: 'Вносим правки и закрываем заказ',
    description: 'Финальные правки, приёмка работы, закрытие заказа и отзыв.',
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        if (!step) return
        gsap.from(step, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: step,
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
      id="process"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#050505]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            Процесс
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            Как я работаю
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[#222222]" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => { stepsRef.current[index] = el }}
                className="relative flex gap-6 sm:gap-8 items-start"
              >
                {/* Step number & icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#111111] border border-[#222222] rounded-full">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6f61]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 sm:pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[#ff6f61] font-medium">
                      Шаг {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
