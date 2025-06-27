import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runFranchiseAnimations = ({
  fadedownRefs,
  fadeupRefs,
  fadeleftRefs,
  faderightRefs,
  imgRefs,
  zoomRef1,
}) => {
  const ctx = gsap.context(() => {
    const animateFrom = (ref, options) => {
      if (ref?.current) {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...options,
        });
      }
    };

    // Batch animations
    faderightRefs.forEach((ref) =>
      animateFrom(ref, { x: 100, opacity: 0, duration: 1.5, ease: "power3.out" })
    );

    fadeleftRefs.forEach((ref) =>
      animateFrom(ref, { x: -100, opacity: 0, duration: 1.5, ease: "power3.out" })
    );

    fadedownRefs.forEach((ref) =>
      animateFrom(ref, { y: -100, opacity: 0, duration: 1.5, ease: "power3.out" })
    );

    fadeupRefs.forEach((ref) =>
      animateFrom(ref, { y: 100, opacity: 0, duration: 1.5, ease: "power3.out" })
    );

    imgRefs.forEach((ref) =>
      animateFrom(ref, { rotateY: 90, opacity: 0, duration: 1.2, ease: "power2.out" })
    );

    // Zoom
    animateFrom(zoomRef1, { scale: 0.8, opacity: 0, duration: 0.9, ease: "power3.out" });

    ScrollTrigger.refresh();
  });

  return ctx;
};
