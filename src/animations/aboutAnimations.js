// animations/aboutAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runAboutAnimations = ({
  textRef,
  textRef2,
  textRef3,
  imgRefs,
  zoomRefs,
  fadeleftRef,
  faderightRef,
}) => {
  const ctx = gsap.context(() => {
    const fadeInFrom = (el, options) => {
      if (el?.current) {
        gsap.from(el.current, {
          scrollTrigger: {
            trigger: el.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...options,
        });
      }
    };

    // Animations
    fadeInFrom(textRef, { rotateY: 90, opacity: 0, duration: 1.5, ease: "power2.out" });
    fadeInFrom(textRef2, { rotateY: 90, opacity: 0, duration: 1.5, ease: "power2.out" });
    fadeInFrom(textRef3, { rotateY: 90, opacity: 0, duration: 1.5, ease: "power2.out" });
    fadeInFrom(fadeleftRef, { x: -100, opacity: 0, duration: 1.5, ease: "power3.out" });
    fadeInFrom(faderightRef, { x: 100, opacity: 0, duration: 1.5, ease: "power3.out" });

    imgRefs.current?.forEach((img) =>
      fadeInFrom({ current: img }, { rotateY: 90, opacity: 0, duration: 1.5, ease: "power2.out" })
    );

    zoomRefs.current?.forEach((zoom) =>
      fadeInFrom({ current: zoom }, { scale: 0.8, opacity: 0, duration: 0.9, ease: "power3.out" })
    );

    ScrollTrigger.refresh();
  });

  return ctx;
};
