import { useEffect, useState } from "react";
import Letter from "./Letter";
import Monitor from "./Monitor";


function Guess({ words }) {

    const [monitorWord, setMonitorWord] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [banner, setBanner] = useState()
    const [isWinner, setIsWinner] = useState(null)
    const [word, setWord] = useState(words[wordIndex])
    const [letters, setLetters] = useState(word.split('').sort(() => .5 - Math.random()))

    console.log(letters)

    const onLetterChoose = function (letter) {
        setMonitorWord(t => t + letter)
        // debugger
        if(monitorWord.length+1 >= word.length){
            if(monitorWord+letter == word){
                onWin()
            }else{
                onLose()
            }
        }
    }

    const onEnd = function () {
        alert('ended !')
    }

    const alrt = function(text){
        setBanner(text)
        setTimeout(()=>setBanner(null),4000)
    }

    const onWin = function () {
        alrt('Perfect ! 🎉🎊')
        setIsWinner(true)

        debugger
        if(wordIndex >= words.length-1){
            onEnd()
        }else{
            setWordIndex(i=>i+1)
        }
    }

    const onLose = function () {
        setIsWinner(false)
        alrt('Try Again ! 😕')

    }

    return (
        <div className="flex flex-col gap-2 mt-10">
            {banner &&
                <h2 className={"text-2xl" + (isWinner ? " text-success " : " text-error ")}>{banner}</h2>
            }
            <Monitor text={monitorWord} />
            <div className="letters flex flex-wrap gap-2 justify-between">
                {letters.map((letter, i) =>
                    <Letter letter={letter} onChoose={onLetterChoose} key={i} />
                )}
            </div>
        </div>
    )
}

export default Guess;