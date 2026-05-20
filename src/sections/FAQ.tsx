import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus, Minus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: 'Как рассчитывается цена?',
    answer: 'Цена фиксирована и зависит от выбранного кворка. Все дополнительные опции обсуждаются заранее. Вы точно знаете, сколько заплатите ещё до начала работы.',
  },
  {
    question: 'Что нужно от клиента для начала работы?',
    answer: 'Подробное техническое задание или описание задачи. Если нужно — помогу составить ТЗ, задаю уточняющие вопросы и предлагаю оптимальные решения.',
  },
  {
    question: 'Сколько правок включено?',
    answer: 'В стандартный пакет входит до 3 раундов правок. Каждый раунд — это возможность внести корректировки по вашим пожеланиям.',
  },
  {
    question: 'Что если мне нужно срочно?',
    answer: 'Возможен приоритетный режим работы. Уточняйте в личных сообщениях на Kwork — обсудим сроки и найдём оптимальное решение.',
  },
  {
    question: 'Какие гарантии качества?',
    answer: 'Работа через Kwork предполагает безопасную сделку. Вы получаете результат и только потом подтверждаете оплату. Если результат не устроит — возможен возврат средств.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#050505]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            Частые вопросы
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#222222]">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-[#222222]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-base sm:text-lg text-white font-medium pr-4 group-hover:text-[#ff6f61] transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#333333] group-hover:border-[#ff6f61] transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-[#ff6f61]" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/60" />
                  )}
                </span>
              </button>
              
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="pb-6 text-white/50 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
