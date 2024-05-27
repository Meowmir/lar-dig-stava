import LetterKey from "./letterKey.tsx";
import {Box} from "@mui/material";

export default function Keyboard(){
  const sweAlfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Å", "Ä", "Ö"]

  return <>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      width: "100%",
      flexWrap: "wrap",
      left: 0,
      bottom: 0,
      position: "absolute"
    }}>
        {sweAlfa.map((letter) =>
          <LetterKey letter={letter} key={letter}/>
        )}
    </Box>
  </>
}
