import { heading, description, whyChooseUs, summary } from "@/data/contact";
import { crimson } from "@/fonts/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-16 p-24 text-white">
      <h1 className={`${crimson.className} text-[64px] font-bold`}>
        {heading}
      </h1>
      <p>{description}</p>
      <h2>Why choose us?</h2>
      <ul className="flex flex-col">
        {whyChooseUs.map((reason) => (
          <li key={reason.key}>
            <span className="font-bold">{reason.title}: </span>{" "}
            {reason.description}
          </li>
        ))}
      </ul>
      <p>{summary}</p>
    </main>
  );
}
