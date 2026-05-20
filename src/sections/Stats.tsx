import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { service: 'Лендинг', timeframe: '3 — 7 дней', note: 'В зависимости от объёма и правок' },
  { service: 'Копирайтинг', timeframe: '1 — 3 дня', note: 'Тексты для лендингов и визиток' },
  { service: 'Визитки / Изображения', timeframe: '1 — 2 дня', note: 'Дизайн и генерация через AI' },
  { service: 'Парсинг данных', timeframe: '2 — 5 дней', note: 'В зависимости от объёма и сложности' },
  { service: 'Автоматизация', timeframe: '3 — 10 дней', note: 'Сложные интеграции до 14 дней' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row) => {
        if (!row) return
        gsap.from(row, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 90%',
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
      id="stats"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            Сроки
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            Средние сроки выполнения
          </h2>
        </div>

        {/* Table */}
        <div className="border-t border-[#222222]">
          {/* Table header */}
          <div className="hidden sm:grid sm:grid-cols-3 py-4 text-xs uppercase tracking-wider text-white/40 border-b border-[#222222]">
            <span>Услуга</span>
            <span>Срок</span>
            <span>Примечание</span>
          </div>

          {/* Rows */}
          {stats.map((stat, index) => (
            <div
              key={stat.service}
              ref={(el) => { rowsRef.current[index] = el }}
              className="grid sm:grid-cols-3 gap-2 sm:gap-0 py-5 border-b border-[#222222] hover:bg-[#111111]/50 transition-colors px-2 -mx-2 rounded"
            >
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#ff6f61] flex-shrink-0" />
                <span className="text-white font-medium">{stat.service}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0 sm:hidden" />
                <span className="text-[#ff6f61] font-semibold">{stat.timeframe}</span>
              </div>
              <span className="text-white/40 text-sm">{stat.note}</span>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="mt-8 p-4 bg-[#111111]/50 border border-[#222222] rounded-xl">
          <p className="text-white/40 text-sm text-center leading-relaxed">
            В среднем по Kwork исполнители по таким задачам выполняют заказы в диапазоне от 1 до 7 дней. 
            Крупные автоматизации и сложные парсинги могут занимать до 10–14 дней. 
            Срочные заказы обсуждаются индивидуально.
          </p>
        </div>
      </div>
    </section>
  )
}
