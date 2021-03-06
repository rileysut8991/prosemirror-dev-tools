import styled from "react-emotion";

const CSSReset = styled("div")({
  fontSize: "100%",
  lineHeight: 1,

  "& li + li": {
    margin: 0
  }
});
CSSReset.displayName = "CSSReset";

export default CSSReset;
