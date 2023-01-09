import { globalCss } from "@whatanime/design-system";
import { roboto } from "./fonts";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: "$gray900",
    color: "$gray50",
    fontFamily: roboto.style.fontFamily,
    "-webkit-font-smoothing": "antialiased",
    overflowX: "hidden",
  },
  button: {
    transition: "all 0.2s ease-in",
  },
});
