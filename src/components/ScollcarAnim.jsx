import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carImg from "../assets/McLaren 720S 2022 top view.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const revealRef = useRef(null);
  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textWidth = titleRef.current.offsetWidth;

      const startX = -textWidth / 2 + 200;
      const endX = textWidth / 2 + 150;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        carRef.current,
        { x: startX },
        { x: endX, ease: "none" },
        0,
      ).fromTo(
        revealRef.current,
        { clipPath: "inset(0 100% 0 0%)" },
        { clipPath: "inset(0 0% 0 0%)", ease: "none" },
        0,
      );

      tl.to(box1.current, { opacity: 1, duration: 0.1 }, 0.1)
        .to(box3.current, { opacity: 1, duration: 0.1 }, 0.16)
        .to(box2.current, { opacity: 1, duration: 0.1 }, 0.22)
        .to(box4.current, { opacity: 1, duration: 0.1 }, 0.35);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#eeeeeefc] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute w-full h-[258px] bg-black  z-0" />

      <div
        ref={revealRef}
        className="absolute w-full h-[260px] bg-[#4ade80] flex items-center justify-center z-10"
        style={{ clipPath: "inset(0 100% 0 0%)" }}
      >
        <h1
          ref={titleRef}
          className="text-[160px] tracking-[2px] font-bold text-black whitespace-nowrap"
        >
          WELCOME ITZFIZZ
        </h1>
      </div>

      <img
        ref={carRef}
        src={carImg}
        alt="car"
        className="absolute top-1/2 -translate-y-1/2 w-[480px] z-30 pointer-events-none"
        style={{ left: "50%", marginLeft: "-240px" }}
      />
      
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-[8%] left-[70%] -translate-x-1/2 flex items-center  w-max">
          <div
            ref={box1}
            className="opacity-0 bg-[#def54f] w-[360px] h-[185px] p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-6xl font-bold">58%</h2>
            <p className="text-lg">Increase in pick up point use</p>
          </div>
          <div
            ref={box2}
            className="opacity-0 bg-[#232c39] text-white w-[360px] h-[185px] p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-6xl font-bold">27%</h2>
            <p className="text-lg">Increase in pick up point use</p>
          </div>
        </div>

        <div className="absolute bottom-[8%] left-[65%] -translate-x-1/2 flex justify-center items-start  w-max">
          <div
            ref={box3}
            className=" opacity-0 bg-[#7dd3fc] w-[360px] h-[185px] p-6 rounded-2xl shadow-xl flex flex-col gap-4  justify-center items-start"
          >
            <h2 className="text-7xl font-bold">23%</h2>
            <p className="text-lg">Decreased in customer phone calls</p>
          </div>
          <div
            ref={box4}
            className="opacity-0 bg-[#ec7c21] h-[185px] w-[360px] p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-6xl font-bold">40%</h2>
            <p className="text-lg">Decreased in customer phone calls</p>
          </div>
        </div>
      </div>
    </section>
  );
}
