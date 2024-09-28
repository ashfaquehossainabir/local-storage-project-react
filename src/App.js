import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState(() => {
    // Get the initial value from the local storage or default to an empty string
    return localStorage.getItem('user-name') || ''
  })

  useEffect(() => {
    // Update the localStorage whenever 'name' changes
    localStorage.setItem('user-name', name)
  }, [name])

  const handleChangeName = (e) => {
    setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
  }

  const clearName = () => {
    localStorage.clear()
    setName('')
  }

  return (
    <>
      <div className='items-center'>
        <h1>Save Name to local storage</h1>
        <div>
          <input type='text' onChange={ handleChangeName }/>
        </div>

        <div>
          <p>User Name: { name }</p>
        </div>

        <div className='clear-btn'>
          <button onClick={ clearName }>Clear Name</button>
        </div>
      </div>
    </>
  )
}

export default App