import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cases = [
  {
    image: './case-landing.jpg',
    category: 'Лендинг',
    title: 'Интернет-магазин электроники',
    description: 'Ниша: E-commerce. Задача: увеличение продаж через посадочную страницу.',
    result: 'Результат: +40% к конверсии за первый месяц.',
    testimonial: 'Отличная работа! Лендинг начал приносить заявки с первого дня запуска.',
  },
  {
    image: './case-copywriting.jpg',
    category: 'Копирайтинг',
    title: 'Тексты для IT-стартапа',
    description: 'Проект: SaaS-платформа для управления проектами.',
    result: 'Помог с продающим текстом для главной страницы и email-рассылок.',
    testimonial: 'Текст точно попал в целевую аудиторию, отличная конверсия.',
  },
  {
    image: './case-parsing.jpg',
    category: 'Парсинг',
    title: 'Сбор данных товаров',
    description: 'Собрано: 10 000 позиций с крупного маркетплейса.',
    result: 'Клиент получил готовый каталог с ценами, описаниями и изображениями.',
    testimonial: 'Быстро и качественно. Данные в идеальном формате, сразу загрузили в CRM.',
  },
  {
    image: './case-automation.jpg',
    category: 'Автоматизация',
    title: 'Автоматизация отчётности',
    description: 'Процесс: еженедельный сбор заявок из 5 источников и формирование отчётов.',
    result: 'Экономия: 15 часов в неделю ручной работы менеджера.',
    testimonial: 'Теперь отчёты собираются автоматически, ошибок стало в разы меньше.',
  },
  {
    image: './case-design.jpg',
    category: 'Дизайн',
    title: 'Фирменный стиль ресторана',
    description: 'Разработка визиток, меню и промо-материалов.',
    result: 'Единый стиль во всех материалах, узнаваемость бренда выросла.',
    testimonial: 'Дизайн превзошёл ожидания, гости постоянно берут визитки с собой.',
  },
  {
    image: './case-images.jpg',
    category: 'Изображения',
    title: 'Обложки для блога',
    description: 'Генерация уникальных обложек и баннеров через нейросети.',
    result: '50 уникальных изображений для статей и соцсетей за неделю.',
    testimonial: 'Креативные изображения, идеально подходят под наш стиль контента.',
  },
]

export default function Cases() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
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
      id="cases"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
            Портфолио
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            Кейсы
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group relative bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#333333] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#ff6f61]/20 text-[#ff6f61] text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-[#ff6f61] text-sm font-medium mb-4">
                  {item.result}
                </p>

                {/* Testimonial */}
                <div className="flex gap-3 pt-4 border-t border-[#222222]">
                  <Quote className="w-5 h-5 text-[#ff6f61]/40 flex-shrink-0 mt-0.5" />
                  <p className="text-white/40 text-sm italic">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
