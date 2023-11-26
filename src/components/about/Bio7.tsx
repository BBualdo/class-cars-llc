"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Bio7 = () => {
  return (
    <section className="gradient-black_white flex w-full justify-center xs:max-md:pb-20 md:py-20">
      <motion.div
        variants={fadeIn("right", 0.7, 1, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-10 border-4 border-gold bg-black p-4 text-center text-white shadow-[0_10px_50px] shadow-gold md:w-3/4"
      >
        <p className="font-bold md:text-[18px] lg:text-[24px]">
          Oprócz handlu samochodami, zajmuję się ich renowacją. Mam kilka
          projektów, gdzie odrestaurowuję klasyczne modele do ich oryginalnego
          stanu, co jest nie tylko wyzwaniem, ale i spełnieniem moich marzeń
          jako kolekcjonera. Uważam, że każdy samochód ma swoją duszę i
          historię, którą warto odkrywać i zachowywać dla przyszłych pokoleń.
        </p>
        <p className="font-bold md:text-[20px] lg:text-[26px]">
          Mimo sukcesów i rozwoju biznesu, moje podejście pozostaje takie samo –
          kieruję się pasją i intuicją, a satysfakcja moich klientów jest dla
          mnie najważniejsza. W przyszłości planuję rozszerzyć moją działalność
          o bardziej zróżnicowane modele i marki, eksplorując nowe rynki i
          możliwości. Moim celem jest stać się uznawany nie tylko jako handlarz,
          ale jako ekspert i ambasador kultury motoryzacyjnej.
        </p>
      </motion.div>
    </section>
  );
};

export default Bio7;
