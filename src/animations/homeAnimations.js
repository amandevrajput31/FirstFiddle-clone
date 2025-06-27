// animations/homeAnimations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const runHomeAnimations = ({
  imageRef,
  textRefDesktop,
  brandRefs,
  textRefSection2Desktop,
  textRefSection2Mobile,
  imgRefSection2Desktop,
  imgRefSection2Mobile,
}) => {
  // Image fade-right
  if (imageRef.current) {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }

  // Text zoom-in (desktop)
  if (textRefDesktop.current) {
    gsap.from(textRefDesktop.current, {
      scrollTrigger: {
        trigger: textRefDesktop.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }

  // Brand flip animation
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

  // Section 2 Text and Image (Desktop & Mobile)
  [textRefSection2Desktop, textRefSection2Mobile].forEach((ref) => {
    if (ref.current) {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  });

  [imgRefSection2Desktop, imgRefSection2Mobile].forEach((ref) => {
    if (ref.current) {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  });

  ScrollTrigger.refresh();
};
