import { styled } from "@material-ui/core"

export const ContentCard = styled("span")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: 250,
  height: 320,
  borderRadius: 10,
  position: "relative",
  background: "#fff",
  margin: 10,
  boxShadow: "0 0 10px #00000020",
  padding: 10,
}))
