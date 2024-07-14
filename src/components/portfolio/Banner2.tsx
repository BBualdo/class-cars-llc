"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Banner2 = () => {
  return (
    <motion.section
      variants={fadeIn("", 1, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex items-center justify-center p-4 md:py-10"
    >
      <h2 className="text-center text-base text-white md:text-xl lg:max-w-[1200px] lg:text-2xl">
        Witamy w naszym portfolio! Jesteśmy specjalistami w imporcie samochodów
        z Dubaju, USA oraz Szwecji. Nasza firma oferuje import aut klasycznych,
        terenowych oraz nowoczesnych pojazdów, które sprowadzamy bezpośrednio z
        Dubaju, USA i Szwecji do Europy. Dzięki wieloletniemu doświadczeniu i
        pasji do motoryzacji, zapewniamy naszym klientom tylko najwyższej
        jakości auta, które spełniają najwyższe standardy. W naszym portfolio
        znajdziesz ikoniczne modele, takie jak Volkswagen Garbus OVAL, Buick
        Riviera, Toyota Land Cruiser, Hummer H1, oraz wiele innych. Każdy z tych
        samochodów przeszedł dokładną kontrolę techniczną, aby zapewnić
        niezawodność i komfort użytkowania. Zapraszamy do zapoznania się z naszą
        ofertą i do kontaktu, aby dowiedzieć się więcej o możliwościach importu
        samochodów z Dubaju.
      </h2>
    </motion.section>
  );
};

export default Banner2;
