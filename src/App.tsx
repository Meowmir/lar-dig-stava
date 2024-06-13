import './App.css'
import Keyboard from "./components/keyboard.tsx";
import WordInput from "./components/wordInput.tsx";
import {useCallback, useState} from "react";

export default function App() {
  const [word, setWord] = useState<string[]>([])
  const onAdd = useCallback((letter: string) => {
    setWord([...word, letter])
  }, [word, setWord])

  return (
    <>
      <WordInput word={word}/>
      <Keyboard onAdd={onAdd}/>
    </>
  )
}
