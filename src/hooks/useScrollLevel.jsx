import { useState, useEffect } from "react";

function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollHeight(height);
      setScrollProgress(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollProgress, scrollHeight };
}

export default useScrollProgress;
