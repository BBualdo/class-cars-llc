import { heading, description, whyChooseUs, summary } from "@/data/contact";

import { merriweather } from "@/fonts/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen p-24 text-white">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className={`${merriweather.className} text-[64px] leading-[72px]`}>
          {heading}
        </h1>
        <p className="text-[24px] leading-[40px] mt-4 text-white/50">
          {description}
        </p>
        <h2 className="text-[24px] font-bold">Why choose us?</h2>
        <ul className="flex flex-col gap-3 text-[20px]">
          {whyChooseUs.map((reason) => (
            <li key={reason.key}>
              <span className="font-bold">{reason.title}: </span>{" "}
              {reason.description}
            </li>
          ))}
        </ul>
        <p className="text-[20px] text-white/50">{summary}</p>
      </div>
      <div className="flex-1"></div>
    </main>
  );
}
