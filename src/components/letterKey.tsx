import {Box} from "@mui/material";

export default function LetterKey({letter} : {letter: string}) {
  return <>
    <Box sx={{
      padding: 2,
      border: '1px solid grey',
      width: 90,
      height: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30
    }}>
        {letter}
    </Box>
  </>
}
