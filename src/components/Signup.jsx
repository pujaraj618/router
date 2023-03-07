import React from 'react'

const Signup = () => {
  return (
    <div>
      <label htmlFor="username">USERNAME</label>
      <br />
      <input type="text" name="username" id="username" />
      <br />
      <label htmlFor="PASS">PASSWORD</label>
      <br />
      <input type="password" name="PASS" id="PASS" />
      <br />
      <button type="submit">SIGNUP</button>
      <br />
    </div>
  )
}

export default Signup