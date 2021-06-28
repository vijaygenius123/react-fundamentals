// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from "react";

function UsernameForm({onSubmitUsername}) {

  const usernameRef = useRef()
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(event){
    event.preventDefault();
    //onSubmitUsername(event.target.elements[0].value)
    //onSubmitUsername(event.target.elements.usernameInput.value)
    //console.log(usernameRef.current.value);
    onSubmitUsername(usernameRef.current.value)
  }

  function handleInput(event){
    const {value} = event.target
    const lowerCaseValue = value.toLowerCase()
    setInputValue(lowerCaseValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' name="username" type="text" ref={usernameRef} onChange={handleInput} value={inputValue}/>

      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
