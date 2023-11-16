"use client";

import faq from "@/data/faq";
import { TiArrowSortedDown } from "react-icons/ti";
import { merriweather } from "@/fonts/fonts";
import { useState } from "react";
import clsx from "clsx";

export default function Page() {
  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  const faqElements = faq.map((item) => {
    const isOpen = item.id === openedItemId;

    const toggleOpen = () => {
      setOpenedItemId(isOpen ? null : item.id);
    };

    return (
      <div
        key={item.id}
        className={`group bg-darkGrey py-2 px-4 rounded-sm cursor-pointer`}
        onClick={toggleOpen}
      >
        <div>
          <button
            className={clsx(
              "flex items-center justify-between w-full group-hover:text-gold",
              { "text-gold": item.id === openedItemId }
            )}
          >
            <p className="text-base font-bold">{item.question}</p>
            <TiArrowSortedDown
              className={clsx("transition-transform duration-300", {
                "rotate-180": item.id === openedItemId,
              })}
            />
          </button>
        </div>
        {isOpen && (
          <div>
            <p className="text-base pt-5">{item.answer}</p>
          </div>
        )}
      </div>
    );
  });

  return (
    <main className="flex min-h-screen flex-col p-24 text-white gap-10">
      <h1 className={merriweather.className}>FAQ</h1>
      <div className="flex flex-col gap-3">{faqElements}</div>
    </main>
  );
}
