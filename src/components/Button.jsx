import React, { useState } from 'react';
import '../styles/css/button.css'

const Button = () => {

    const [buttonColor, setButtonColor] = useState("red")
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [cheating, setCheating] = useState(null)
    const [timeChanged, setTimeChanged] = useState(null);
    const [timeClicked, setTimeClicked] = useState(null);
    const randomSeconds = Math.floor(Math.random() * 4 + 1) * 1000;
    const [timerID, setTimerID] = useState(null);

    function getTimeDifference() {
        if (timeChanged && timeClicked) {
          if (timeClicked > timeChanged) {
            const bestScore = JSON.parse(localStorage.getItem('record'))
            const newScore = timeClicked - timeChanged;
            if (bestScore) {
              if (newScore < bestScore) {
                localStorage.setItem('record', JSON.stringify(newScore))
              }
            } else {
              localStorage.setItem('record', JSON.stringify(newScore))
            }
            return `Reaction time: ${newScore} ms`;
          } else {
            return 'Error: Please wait for the button to turn green before clicking';
          }
        } else {
          return '';
        }
      }

    function handleChange() {
        setTimeChanged(Date.now());
    }



    let handleStart = () => {
        setButtonDisabled(!buttonDisabled);
        setTimerID(setTimeout(() => {
            setButtonColor("green");
            handleChange();
        }, randomSeconds));
    };

    const handleClick = () => {
        if (buttonColor === "red") {
            clearTimeout(timerID); // stop the timeout set by handleStart
            setButtonDisabled(true)
            setCheating(true)
        } else {
            setTimeClicked(Date.now());
            setButtonColor("red");
            setButtonDisabled(true);
            setCheating(false)
        }
    };



    return (
        <div className='game--container'>
            <div className='game--instructions__container'>
                <h1 style={{textAlign: 'center'}}>REFLEXES TEST</h1>
                <h3>INSTRUCTIONS:</h3>
                <br />
                <p>#1. Click the start button.</p>
                <p>#2. Wait between 1 and 5 seconds for the button to become green.</p>
                <p>#3. Click it as fast as you can right after it becomes green.</p>
                <p>#4. Improve your reflexes, beat your own best time and enjoy the game!</p>
            </div>
            <div className='game--score__container'>
                <h1>
                    Best time: { JSON.parse(localStorage.getItem('record')) ?
                        JSON.parse(localStorage.getItem('record')) + 'ms'
                        :
                        "You'll have to play first!"
                    }
                </h1>
                <p>
                    {cheating ?
                        'calm down bro! wait till it becomes green. 😂'
                        :
                        `${getTimeDifference()}`
                    }
                </p>
            </div>
            <div className='game--buttons__container'>
                <button
                    className='game--button__start'
                    onClick={() => handleStart()}
                    disabled={buttonDisabled === false ? true : false}
                >
                    START
                </button>
                <button
                    className='game--button__timer'
                    onClick={() => handleClick()}
                    style={{ backgroundColor: buttonColor }}
                    disabled={buttonDisabled}
                />
            </div>
        </div>
    )
}

export default Button;