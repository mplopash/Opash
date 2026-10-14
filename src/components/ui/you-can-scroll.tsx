"use client";
import { useEffect, useRef } from "react";
import "@/index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Pane } from "tweakpane";

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const config = {
      theme: "dark",
      animate: true,
      snap: true,
      start: gsap.utils.random(0, 100, 1),
      end: gsap.utils.random(900, 1000, 1),
      scroll: true,
      debug: false,
    };

    let ctrl: any = null;
    try {
      ctrl = new Pane({ title: "Config", expanded: false }) as any;
    } catch {
      /* fallback if Pane fails in headless/SSR */
    }

    let items: Element[] = [];
    let scrollerScrub: ScrollTrigger | undefined;
    let dimmerScrub: ScrollTrigger | undefined;
    let chromaEntry: gsap.core.Tween | undefined;
    let chromaExit: gsap.core.Tween | undefined;

    const update = () => {
      document.documentElement.dataset.theme = config.theme;
      document.documentElement.dataset.syncScrollbar = String(config.scroll);
      document.documentElement.dataset.animate = String(config.animate);
      document.documentElement.dataset.snap = String(config.snap);
      document.documentElement.dataset.debug = String(config.debug);
      document.documentElement.style.setProperty("--start", String(config.start));
      document.documentElement.style.setProperty("--hue", String(config.start));
      document.documentElement.style.setProperty("--end", String(config.end));

      if (!config.animate) {
        chromaEntry?.scrollTrigger?.disable(true, false);
        chromaExit?.scrollTrigger?.disable(true, false);
        dimmerScrub?.disable(true, false);
        scrollerScrub?.disable(true, false);
        gsap.set(items, { opacity: 1 });
        gsap.set(document.documentElement, { "--chroma": 0 });
      } else {
        gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });
        dimmerScrub?.enable(true, true);
        scrollerScrub?.enable(true, true);
        chromaEntry?.scrollTrigger?.enable(true, true);
        chromaExit?.scrollTrigger?.enable(true, true);
      }
    };

    if (ctrl) {
      ctrl.addBinding(config, "animate", { label: "Animate" });
      ctrl.addBinding(config, "snap", { label: "Snap" });
      ctrl.addBinding(config, "start", { label: "Hue Start", min: 0, max: 1000, step: 1 });
      ctrl.addBinding(config, "end", { label: "Hue End", min: 0, max: 1000, step: 1 });
      ctrl.addBinding(config, "scroll", { label: "Scrollbar" });
      ctrl.addBinding(config, "debug", { label: "Debug" });
      ctrl.addBinding(config, "theme", {
        label: "Theme",
        options: { System: "system", Light: "light", Dark: "dark" },
      });

      ctrl.on("change", update);
    }

    // Fallback without CSS scroll-timeline
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");

    if (!supportsScrollTimeline && containerRef.current) {
      items = gsap.utils.toArray(containerRef.current.querySelectorAll("ul li"));
      if (items.length > 0) {
        gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

        const dimmer = gsap.timeline()
          .to(items.slice(1), { opacity: 1, stagger: 0.5 })
          .to(items.slice(0, items.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

        dimmerScrub = ScrollTrigger.create({
          trigger: items[0],
          endTrigger: items[items.length - 1],
          start: "center center",
          end: "center center",
          animation: dimmer,
          scrub: 0.2,
        });

        const scroller = gsap.timeline().fromTo(
          document.documentElement,
          { "--hue": config.start },
          { "--hue": config.end, ease: "none" }
        );

        scrollerScrub = ScrollTrigger.create({
          trigger: items[0],
          endTrigger: items[items.length - 1],
          start: "center center",
          end: "center center",
          animation: scroller,
          scrub: 0.2,
        });

        chromaEntry = gsap.fromTo(
          document.documentElement,
          { "--chroma": 0 },
          {
            "--chroma": 0.3,
            ease: "none",
            scrollTrigger: {
              scrub: 0.2,
              trigger: items[0],
              start: "center center+=40",
              end: "center center",
            },
          }
        );

        chromaExit = gsap.fromTo(
          document.documentElement,
          { "--chroma": 0.3 },
          {
            "--chroma": 0,
            ease: "none",
            scrollTrigger: {
              scrub: 0.2,
              trigger: items[items.length - 2],
              start: "center center",
              end: "center center-=40",
            },
          }
        );
      }
    }

    update();

    return () => {
      ctrl?.dispose();
      dimmerScrub?.kill();
      scrollerScrub?.kill();
      chromaEntry?.kill();
      chromaExit?.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[250vh] px-6 py-24 flex flex-col items-center justify-between">
      <header className="text-center py-20">
        <h1
          className="fluid font-black tracking-tight text-[var(--text-main)]"
          style={{ fontSize: "calc(var(--fluid-type, 2rem) * 2)" }}
        >
          you can<br />scroll.
        </h1>
      </header>
      <main className="w-full max-w-4xl mx-auto my-20">
        <section className="content fluid text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)]">
            <span aria-hidden="true">you can&nbsp;</span>
            <span className="sr-only">you can ship things.</span>
          </h2>
          <ul aria-hidden="true" style={{ "--count": 22 } as React.CSSProperties} className="space-y-6 text-2xl sm:text-4xl font-mono font-bold tracking-tight">
            {[
              "design.","prototype.","solve.","build.","develop.","debug.","learn.","cook.","ship.","prompt.",
              "collaborate.","create.","inspire.","follow.","innovate.","test.","optimize.","teach.","visualize.",
              "transform.","scale.","do it."
            ].map((text, i) => (
              <li key={i} style={{ "--i": i } as React.CSSProperties} className="transition-opacity duration-300">
                {text}
              </li>
            ))}
          </ul>
        </section>
        <section className="text-center py-32">
          <h2 className="fluid text-4xl sm:text-6xl font-black text-[var(--accent)]">fin.</h2>
        </section>
      </main>
      <footer className="font-mono text-xs text-[var(--text-dim)] pb-12">ʕ⊙ᴥ⊙ʔ jh3yy &copy; 2024</footer>
    </div>
  );
}
