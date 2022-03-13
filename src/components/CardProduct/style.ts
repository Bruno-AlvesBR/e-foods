import { styled } from "@material-ui/core"

export const ContentCard = styled("span")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: "space-between",
  width: 250,
  height: 320,
  borderRadius: 10,
  position: "relative",
  background: "#fff",
  margin: '0 0 10px 10px',
  boxShadow: "0 0 10px #00000020",
  padding: 10,

  '& h1': {
    fontSize: '1rem'
  },

  '@media (max-width: 650px)': {
    margin: 2
  },
}))
