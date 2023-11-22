"use client";

import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import clsx from "clsx";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 300);
      }
    };

    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Link to="nav" smooth>
      <Fab
        disabled={!isVisible}
        size="medium"
        className={clsx(
          "gradient-gold hover:animate-nonexs:max-md:right-5 fixed bottom-10 right-10 animate-[bounce_2s_linear_infinite] border-black transition-all duration-200",
          {
            "opacity-50 hover:opacity-100": isVisible,
            "opacity-0": !isVisible,
          },
        )}
      >
        <KeyboardArrowUp className="text-3xl text-white" />
      </Fab>
    </Link>
  );
};

export default ScrollToTop;
