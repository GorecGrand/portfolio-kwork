import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111111]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff6f61]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6f61]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight opacity-0 translate-y-8"
        >
          <span className="block">Лендинги, тексты,</span>
          <span className="block mt-2">
            <span className="text-[#ff6f61]">автоматизация</span> и парсинг
          </span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-8"
        >
          Ваш личный фрилансер на Kwork. Увеличиваю продажи и экономлю время 
          через автоматизацию и профессиональные тексты.
        </p>
        
        <a
          ref={ctaRef}
          href="https://kwork.ru/user/garri88"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-10 px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-base hover:border-[#ff6f61] hover:bg-[#ff6f61]/10 transition-all duration-300 opacity-0 translate-y-8 group"
        >
          Перейти на мой профиль Kwork
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Листайте вниз</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
