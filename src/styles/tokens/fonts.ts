import { Roboto, Nova_Mono } from "@next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const novaMono = Nova_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export const fonts = {
  default: roboto.style.fontFamily,
  code: novaMono.style.fontFamily,
};
