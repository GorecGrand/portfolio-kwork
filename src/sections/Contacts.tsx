import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, MessageCircle, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contacts() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 40,
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
      id="contacts"
      className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0a]"
    >
      <div className="contact-content max-w-3xl mx-auto text-center">
        {/* Header */}
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
          Контакты
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
          Свяжитесь со мной
        </h2>
        <p className="mt-6 text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Готов обсудить ваш проект. Пишите на Kwork или в Telegram — обычно отвечаю в течение часа.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://kwork.ru/user/garri88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff6f61] text-white rounded-full font-medium text-base hover:bg-[#e56357] transition-colors shadow-lg shadow-[#ff6f61]/20"
          >
            <ExternalLink className="w-5 h-5" />
            Мой профиль Kwork
          </a>
          
          <a
            href="https://t.me/IgorSharko_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-[#333333] rounded-full font-medium text-base hover:border-[#ff6f61] hover:bg-[#ff6f61]/5 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Написать в Telegram
          </a>
        </div>

        {/* Email */}
        <div className="mt-8 flex items-center justify-center gap-2 text-white/40">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:wizirb@gmail.com"
            className="text-sm hover:text-[#ff6f61] transition-colors"
          >
            wizirb@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
