// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from "react";

function UsernameForm({onSubmitUsername}) {

  const usernameRef = useRef()
  const [error, setError] = useState(null)

  function handleSubmit(event){
    event.preventDefault();
    //onSubmitUsername(event.target.elements[0].value)
    //onSubmitUsername(event.target.elements.usernameInput.value)
    //console.log(usernameRef.current.value);
    onSubmitUsername(usernameRef.current.value)
  }

  function handleChange(event){
      const {value}  = event.target;
      const isLowerCase = value === value.toLowerCase()
      setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' name="username" type="text" ref={usernameRef} onChange={handleChange}/>
        {error ? <p>{error}</p> : null }
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
