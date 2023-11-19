import {
  Raleway,
  Merriweather,
  Dancing_Script,
  Lobster_Two,
  Neuton,
  Ibarra_Real_Nova,
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
