import { useState } from "react";
import Letter from "./Letter";
import Monitor from "./Monitor";


function Guess({ words }) {

    let [monitorWord, setMonitorWord] = useState('k')

    const onLetterChoose = function(letter){
        setMonitorWord(t => t + letter)
    }

    return (
        <div class="flex flex-col gap-2 mt-10">
            <Monitor text={monitorWord}/>
            <div className="letters ">

                <Letter letter="b" onChoose={onLetterChoose}/>
            </div>
        </div>
    )
}

export default Guess;