import React from 'react'

const Login = () => {
  return (
    <div>
     <form action="">
      <label htmlFor="username">USERNAME</label>
      <br />
      <input type="text" name="username" id="username" />
      <br />
      <label htmlFor="PASS">PASSWORD</label>
      <br />
      <input type="password" name="PASS" id="PASS" />
      <br />
      <button type="submit">LOGIN</button>
      <br />
     </form>

    </div>
  )
}

export default Login