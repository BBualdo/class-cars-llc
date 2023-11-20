import {
  Raleway,
  Merriweather,
  Dancing_Script,
  Lobster_Two,
  Neuton,
  Ibarra_Real_Nova,
  Alfa_Slab_One,
  Black_Ops_One,
} from "next/font/google";

export const raleway = Raleway({ subsets: ["latin"] });
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const dancing = Dancing_Script({
  subsets: ["latin"],
});
export const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const neuton = Neuton({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const ibarra = Ibarra_Real_Nova({ subsets: ["latin"] });

export const alpha = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"] });

export const blackOps = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });
