import {Box} from "@mui/material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import {useRef} from "react";

export default function LetterKey({letter} : {letter: string}) {
  const rippleRef = useRef(null)
  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };

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
    }}
       onMouseDown={onRippleStart}
       onMouseUp={onRippleStop}
    >
      {letter}
      <TouchRipple ref={rippleRef}/>
    </Box>
  </>
}
