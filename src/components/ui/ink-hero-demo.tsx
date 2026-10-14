"use client";

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Snap from 'lenis/snap'
import InkHero from '@/components/ui/ink-hero'

const settings = {
  ease: 'ink',
  travel: 300,
  feather: 0.12,
  grain: 0.35,
  noiseScale: 5,
  inkColor: '#00d4ff',
  pointerDevelops: true,
  smoothScroll: true,
  snapToStations: true,
  eyebrow: 'Opash Architecture · scroll score in three stations',
  headline: 'Autonomous systems,\ndeveloped by scroll.',
  caption: 'Opash Software · Surat HQ Campus · High-Concurrency Cloud Systems',
  ctaLabel: 'Read the score',
  imageSrc:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80',
}

/** Lenis on the window, driven by the GSAP ticker: the canonical four statements (scroll-architecture §1.1). Demo-only; the component never owns scroll. */
function useSmoothScroll(enabled: boolean, snapToStations: boolean) {
  const lenisRef = useRef<Lenis | null>(null)
  useEffect(() => {
    if (!enabled || (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return
    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({ autoRaf: false, lerp: 0.1, smoothWheel: true, syncTouch: false, anchors: true })
    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    ;(window as unknown as { lenis?: Lenis }).lenis = lenis
    lenisRef.current = lenis

    let snap: Snap | null = null
    const placeStations = () => {
      snap?.destroy()
      snap = null
      if (!snapToStations) return
      const hero = document.querySelector<HTMLElement>('[data-ink-hero]')
      if (!hero) return
      const travelPx = hero.offsetHeight - window.innerHeight
      if (travelPx <= 0) return
      snap = new Snap(lenis, { type: 'proximity', distanceThreshold: '18%', debounce: 400, lerp: 0.1 })
      snap.add(hero.offsetTop + travelPx * 0.5)
      snap.add(hero.offsetTop + travelPx)
    }
    placeStations()
    const onRefresh = () => placeStations()
    ScrollTrigger.addEventListener('refresh', onRefresh)
    return () => {
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      snap?.destroy()
      gsap.ticker.remove(tick)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      lenisRef.current = null
      delete (window as unknown as { lenis?: Lenis }).lenis
    }
  }, [enabled, snapToStations])
  return lenisRef
}

export default function InkHeroDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props }
  const lenisRef = useSmoothScroll(s.smoothScroll, s.snapToStations)
  return (
    <div className="bg-background text-foreground">
      {/* the three rules lenis/dist/lenis.css would set; inlined so the demo stays one file */}
      <style>{`html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-stopped{overflow:clip}`}</style>
      <InkHero
        image={{ src: s.imageSrc, alt: 'Opash high-concurrency cloud architecture systems canvas' }}
        eyebrow={s.eyebrow}
        headline={s.headline}
        caption={s.caption}
        cta={{ label: s.ctaLabel, href: '#score' }}
        nav={{ brand: 'opash-kinetic', links: [{ label: 'Score', href: '#score' }] }}
        ease={s.ease}
        travel={s.travel}
        feather={s.feather}
        grain={s.grain}
        noiseScale={s.noiseScale}
        inkColor={s.inkColor}
        pointerDevelops={s.pointerDevelops}
        scrollTo={(y) => (lenisRef.current ? lenisRef.current.scrollTo(y, { duration: 1.1 }) : window.scrollTo({ top: y, behavior: 'smooth' }))}
      />
      <section id="score" data-scene="after" className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24 md:px-10">
        <h2 data-motion="after-heading" className="font-serif text-3xl leading-tight md:text-4xl">
          The score, in three stations.
        </h2>
        <dl className="mt-8 grid gap-6 text-sm text-muted-foreground md:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">Paper</dt>
            <dd className="mt-2">A small frame on bare paper. The headline bleeds in, line by line, on expo.out.</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">Wash</dt>
            <dd className="mt-2">The image develops to a faint wash and the frame grows, both on the ink curve, which dips below linear before a hard landing.</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">Print</dt>
            <dd className="mt-2">Full bleed, full contrast. The scrim and the nav settle; caption and call to action arrive last.</dd>
          </div>
        </dl>
        <p className="mt-10 text-xs text-muted-foreground">
          One ScrollTrigger publishes one progress value; every effect is a window of it. The dissolve is an authored WebGL shader rendered only when the
          scroll moves, and a fine pointer develops the print where it rests. Under prefers-reduced-motion this page is the finished print, static.
        </p>
      </section>
    </div>
  )
}
