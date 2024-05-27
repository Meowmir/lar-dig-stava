import {Box} from "@mui/material";

export default function LetterKey({letter} : {letter: string}) {
  return <>
    <Box sx={{
      padding: 2,
      border: '1px solid grey',
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
        {letter}
    </Box>
  </>
}
