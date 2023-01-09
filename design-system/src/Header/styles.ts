import { styled } from "../stitches";

export const Container = styled("header", {
  padding: "$4",
  maxWidth: "100vw",

  backgroundColor: "$gray600",
});

export const Content = styled("div", {
  maxWidth: 1320,
  mx: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
