import React, { useState, useEffect } from 'react'
import { identifier, englishToJapanese, japaneseToEnglish } from 'Util/map'
import './Game.css'

function Game(props) {
  let [charSet, setChars] = useState([])
  let [char, setChar] = useState([])
  let [correct, setCorrect] = useState(0)
  let [wrong, setWrong] = useState(0)
  let [shake, setShake] = useState(0)
  let [mnenomic, setMnenomic] = useState("")

  let genRan = () => {
    let num = Math.floor(Math.random() * charSet.length)
    return (charSet[num] === char) ? genRan() : num;
  }

  useEffect(() => {
    let data = props.location.data
    if(!data) {
      return props.history.push({pathname: '/'})
    }

    let characters = data.map(char => identifier[char])
    let newArr = [].concat(...characters)
    let charSet = newArr.map(char => englishToJapanese[char])
    setChars(charSet)
    setChar(charSet[0])
  }, [props.location.data, props.history])

  let handleSubmit = async (e) => {
    e.preventDefault()
    let val = e.target[0].value
    e.target[0].value = ""
    if(japaneseToEnglish[char].toLowerCase() !== val) {
      setShake(1)
      if(wrong === 2) {
        setMnenomic(`../../Mnenomic/${japaneseToEnglish[char]}.png`)
      }
      
      return setWrong(wrong + 1);
    }

    setCorrect(correct + 1)
    setChar(charSet[genRan()])
    setWrong(0)
    setMnenomic("")
  }
  
  return (
    <div className="gamePage">
      <div className="gameMenu">
        <p id="correct">{correct}</p>
        <p id="gameChar">{char}</p>
        <img id="gameMnenomic" alt="" src={mnenomic}></img>
        <form className="gameForm" data-shake={shake} onAnimationEnd={() => setShake(0)} onSubmit={handleSubmit}>
          <input type="text"/>
        </form>
      </div>
    </div>
  )
}

export default Game;