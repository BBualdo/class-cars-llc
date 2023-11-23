import {
  Raleway,
  Merriweather,
  Ibarra_Real_Nova,
  Alfa_Slab_One,
} from "next/font/google";

export const raleway = Raleway({ subsets: ["latin"] });
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const ibarra = Ibarra_Real_Nova({ subsets: ["latin"] });
export const alpha = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"] });
