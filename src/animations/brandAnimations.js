// animations/brandAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runBrandAnimations = ({ brandRefs, fadeleftRef, zoomRef1 }) => {
  const ctx = gsap.context(() => {
    // Flip-right animation for each brand card
    brandRefs.current.forEach((el) => {
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          rotateY: 90,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    });

    // Fade-left effect
    if (fadeleftRef.current) {
      gsap.from(fadeleftRef.current, {
        scrollTrigger: {
          trigger: fadeleftRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    // Zoom-in effect
    if (zoomRef1.current) {
      gsap.from(zoomRef1.current, {
        scrollTrigger: {
          trigger: zoomRef1.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }

    ScrollTrigger.refresh();
  });

  return ctx;
};
