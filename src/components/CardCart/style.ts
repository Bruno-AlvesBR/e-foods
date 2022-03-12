import { styled } from "@material-ui/core"

export const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}))

export const ContentCard = styled("span")(() => ({
  display: "flex",
  justifyContent: "space-between",
  maxHeight: 65,
  flex: 1,
  marginBottom: 5,
  position: "relative",
}))

export const Content = styled("span")(() => ({
  width: 300,
  height: 500,
  background: "#fff",
  boxShadow: "0 0 10px #00000025",
  margin: 10,
}))

export const ContentCardsGroup = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  background: "#fff",
  height: "auto",
}))
