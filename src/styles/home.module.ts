import { styled, Badge } from "@material-ui/core"

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  padding: 20,
}))

export const LinkCart = styled(Badge)(() => ({
  width: 25,
}))

export const ContentCards = styled("span")(() => ({
  display: "flex",
  flexWrap: "wrap",
}))

export const ContentFilters = styled("div")(() => ({}))
