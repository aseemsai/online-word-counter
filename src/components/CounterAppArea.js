import React, { useState } from 'react'
import "../styles/CounterAppArea.css"
import Countable from 'countable';

const CounterAppArea = () => {

    const [inputText, setInputText] = useState({
        textValue: "",
        charCount: 0,
        wordCount: 0,
    });

    const handleChange = (e) => {

        const callback = counter => setInputText({
            ...inputText,
            textValue: e.target.value,
            charCount: counter.characters,
            wordCount: counter.words,
        })
        Countable.on(e.target, callback);
    }
    return (
        <div className="app-container">
            <div className="app-space">
                <label className="app-element">Enter your text here:</label>
                <textarea onChange={handleChange}
                    value={inputText.textValue}
                    name="text-box" id="text-box" cols="40" rows="10"></textarea>
                <p className="app-element">Character Count: {inputText.charCount}</p>
                <p className="app-element">Word Count: {inputText.wordCount}</p>
            </div>
        </div>
    )
}

export default CounterAppArea