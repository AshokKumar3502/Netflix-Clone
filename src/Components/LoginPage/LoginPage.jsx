import React from 'react'
import "./SignStyle.scss"



const LoginPage = () => {
 
  return <>

<div className='mainbody'>
{/* <a className="logo" href="https://www.netflix.com/" target="_blank" rel="noreferrer"><img src="https://bit.ly/2VdIFUK" alt="logo"/></a> */}
<div className="login">
<h1 className="login__title"  >
  Sign In
</h1>
<div className="login__group">
  <input className="login__group__input" type="text" required="true"/>
  <label className="login__group__label">Email or phone number</label>
</div>
<div className="login__group">
  <input className="login__group__input" type="password" required="true"/>
  <label className="login__group__label">Password</label>
</div>
<button className="login__sign-in" type="button"  >Sign In</button>
<div className="login__secondary-cta">
  <a className="login__secondary-cta__text" href='a' target="_blank" rel="noreferrer">Remember me</a>
<a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="a">Need help?</a></div>
</div>
</div>
  </>;
}

export default LoginPage