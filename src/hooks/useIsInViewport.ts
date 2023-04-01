import { RefObject, useEffect, useRef, useState } from "react";

export const useIsInViewport = (
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      options
    );
  }, []);

  useEffect(() => {
    if (!ref.current || !observerRef.current) return;
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current && observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};
