import React from "react";
import Logo from "../../logo.png";
import "../Page.css";
import Image from "next/image";
import Input from "../../components/Input"

export default function Page() {
  return (
    <>
      <div className="signin">
        <div className="form">
          {/* <Image className="logos" src={Logo} /> */}
          <h1 className="logos">NETLIX</h1>
          <h2>Sign in</h2>
          <form method="GET">
            <label className="email" htmlFor="email">
              {/* <input type="email" placeholder="Email or phone number" /> */}
              <Input type={"email"} placeholder={"Email or phone number"} />
            </label>
            <label className="password" htmlFor="password">
              {/* <input type="password" placeholder="Password" /> */}
              <Input type={"password"} placeholder={"Password"} />
            </label>
            <button type="submit">Sign in</button>
            <div className="rem">
              <label htmlFor="checkbox">
                {/* <input className="checkbox" type="checkbox" /> */}
                <Input className={"checkbox"} type={"checkbox"} />
                </label>Remember me
              <p className="body">Need help?</p>
            </div>
            <p>New to Netflix?  <b>Sign up now.</b></p>
          </form>
        </div>
      </div>
    </>
  );
}
