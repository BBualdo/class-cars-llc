"use client";

import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
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
    <Link href="#nav" to="nav" smooth>
      <Tooltip title="Przejdź na górę">
        <Fab
          aria-label="Scroll to top"
          disabled={!isVisible}
          sx={{ border: 1, borderColor: "gold" }}
          size="medium"
          className={clsx(
            "gradient-gotham fixed bottom-10 right-10 animate-[bounce_2s_linear_infinite] transition-all duration-200 hover:animate-[bounce_4s_linear_infinite] xs:max-md:right-5",
            {
              "opacity-50 hover:opacity-100": isVisible,
              "opacity-0": !isVisible,
            },
          )}
        >
          <KeyboardArrowUp className="text-3xl text-white" />
        </Fab>
      </Tooltip>
    </Link>
  );
};

export default ScrollToTop;
