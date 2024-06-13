import {Box} from "@mui/material";

export default function WordInput({word} : {word: string[]}) {
  return <>
  <Box sx={{
    position: "absolute",
    backgroundColor: "white",
    color: "black",
    fontSize: 30,
    top: 0,
    left: 0,
    padding: 2,
    width: "100%",
    height: 100
  }}>
    {word}
  </Box>
  </>
}
