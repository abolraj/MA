import $ from 'jquery'
import { useState } from 'react'

function Letter({ letter = 'a', onChoose }) {
    const [visibility, setVisibility] = useState(true)
    return (
        <button
            hidden = {visibility}
            onClick={(e)=>{
                onChoose(letter)
                setVisibility(false)
            }}
            className={"letter btn btn-square bordered border-2 border-info rounded-lg text-xl font-black text-pink-400 flex items-center justify-center"+(visibility? "":" invisible ")}>
            <p>
                {letter}
            </p>
        </button>
    )
}

export default Letter