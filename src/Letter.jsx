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
            className={"btn btn-square bordered border-2 rounded-lg text-xl flex items-center justify-center"+(visibility? "":" invisible ")}>
            <p>
                {letter}
            </p>
        </button>
    )
}

export default Letter