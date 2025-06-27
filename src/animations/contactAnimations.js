// animations/contactAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runContactAnimations = ({
  zoomRef1,
  zoomRef2,
  fadeleftRefs,
  faderightRefs,
  imgRef1
}) => {
  const ctx = gsap.context(() => {
    // Fade-left animations
    fadeleftRefs.forEach(ref => {
      if (ref.current) {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        });
      }
    });

    // Fade-right animations
    faderightRefs.forEach(ref => {
      if (ref.current) {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        });
      }
    });

    // Flip-right animation
    if (imgRef1.current) {
      gsap.from(imgRef1.current, {
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        rotateY: 90,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }

    // Zoom-in animations
    [zoomRef1, zoomRef2].forEach(ref => {
      if (ref.current) {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      }
    });

    ScrollTrigger.refresh();
  });

  return ctx;
};
