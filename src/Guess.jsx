import { useEffect, useState } from "react";
import Letter from "./Letter";
import Monitor from "./Monitor";
import $ from 'jquery'

function Guess({ words }) {

    const [monitorWord, setMonitorWord] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [banner, setBanner] = useState()
    const [isWinner, setIsWinner] = useState(null)
    const [playCount, setPlayCount] = useState(0)
    const [word, setWord] = useState(words[wordIndex])
    const [letters, setLetters] = useState(word.split('').sort(() => .5 - Math.random()))

    console.log(letters)

    const onLetterChoose = function (letter) {
        setMonitorWord(t => t + letter)
        // debugger
        if (monitorWord.length + 1 >= word.length) {
            if (monitorWord + letter == word) {
                onWin()
            } else {
                onLose()
            }
        }
    }

    const onEnd = function () {
        alert('ended !')
    }

    const alrt = function (text) {
        setBanner(text)
        setTimeout(() => {
            setBanner(null)
        }, 4000)
    }
    const onWin = function () {
        alrt('Perfect ! 🎉🎊')
        setIsWinner(true)
        setPlayCount(c=>c+1)
        if (wordIndex >= words.length - 1) {
            onEnd()
        } else {
            setWordIndex(i => i + 1)
        }
    }

    const onLose = function () {
        // debugger
        setIsWinner(false)
        setPlayCount(c=>c+1)
        alrt('Try Again ! 😕')

    }

    const reset = function () {
        const word = words[wordIndex]
        console.log(isWinner, '|new word:', word)
        setMonitorWord('')
        setWord(()=>word)
        setLetters(()=>word.split('').sort(() => .5 - Math.random()))
    }

    useEffect(() => {
        reset()
    }, [playCount])

    return (
        <div className="container-sm w-72 max-w-72 flex flex-col gap-2 mt-10">
            {banner &&
                <h2 className={"text-2xl" + (isWinner ? " text-success " : " text-error ")}>{banner}</h2>
            }
            <Monitor text={monitorWord} />
            <div className="letters flex flex-wrap gap-2 justify-center">
                {letters.map((letter, i) =>
                    <Letter letter={letter} onChoose={onLetterChoose} key={''+playCount+i}/>
                )}
            </div>
        </div>
    )
}

export default Guess;