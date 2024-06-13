import {Button} from "@mui/material";

export default function LetterKey({letter, onClick: handleClick} : {letter: string,onClick: (letter: string) => void}) {
  //const [newLetter, setNewLetter] = useState<string>("")

  return <>
    <Button sx={{
      padding: 2,
      border: '1px solid grey',
      width: 90,
      height: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30
    }}
       onClick={() => handleClick(letter)}
    >
      {letter}
    </Button>
  </>
}
