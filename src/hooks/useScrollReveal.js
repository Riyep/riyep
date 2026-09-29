import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already within viewport or close to it
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150 && rect.bottom > 0) {
        el.classList.add('visible');
        return true;
      }
      return false;
    };

    // If visible on initial mount, reveal immediately
    if (checkVisibility()) return;

    // Ultra-responsive threshold (0.01) with generous 150px pre-reveal rootMargin
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: options.threshold !== undefined ? options.threshold : 0.01,
        rootMargin: options.rootMargin || '150px 0px 50px 0px',
      }
    );

    observer.observe(el);

    // Fallback scroll listener for mobile browsers where IntersectionObserver might lag
    const onScroll = () => {
      if (checkVisibility()) {
        window.removeEventListener('scroll', onScroll);
        observer.disconnect();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return ref;
}
