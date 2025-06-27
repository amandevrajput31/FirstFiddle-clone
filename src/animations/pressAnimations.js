// animations/pressAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runPressAnimations = ({
  fadedownRef1,
  fadeupRef1,
  zoomRefs = []
}) => {
  const ctx = gsap.context(() => {
    // Fade-down
    if (fadedownRef1.current) {
      gsap.from(fadedownRef1.current, {
        scrollTrigger: {
          trigger: fadedownRef1.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    // Fade-up
    if (fadeupRef1.current) {
      gsap.from(fadeupRef1.current, {
        scrollTrigger: {
          trigger: fadeupRef1.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    // Zoom-in for each image
   zoomRefs.forEach((ref) => {
  if (ref && ref.current) {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }
});

    ScrollTrigger.refresh();
  });

  return ctx;
};
