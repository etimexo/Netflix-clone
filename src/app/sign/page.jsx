"use client";
import React from "react";
import Logo from "../../logo.png";
import "../Page.css";
import Image from "next/image";
import Input from "../../components/Input";

export default function Page() {
  function clicked() {
    alert("NB: This is just a clone of Netlfix's site. If you really wanna experience Netflix, go to their real site.")
  }
  return (
    <div className="mained">
      <div className="signed">
        <div className="form">
          <h1 className="logos">NETLIX</h1>
          <h2>Sign in</h2>
          <form method="GET">
            <label className="email" htmlFor="email">
              <Input type={"email"} placeholder={"Email or phone number"} />
            </label>
            <label className="password" htmlFor="password">
              <Input type={"password"} placeholder={"Password"} />
            </label>
            <button onClick={clicked} type="submit">Sign in</button>
            <div className="rem">
              <label htmlFor="checkbox">
                <Input className={"checkbox"} type={"checkbox"} />
              </label>
              Remember me
              <p className="body">Need help?</p>
            </div>
            <p className="light">
              New to Netflix? <b>Sign up now.</b>
            </p>
            <p className="light lighter">
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <span className="learn">Lean more.</span>{" "}
            </p>
          </form>
        </div>
        <hr className="hrs" />
        <p className="light">Questions? Contact us.</p>
        <ul className="faq2 grid2-container">
          <li className="light item">FAQ</li>
          <li className="light item">Terms of Use</li>
          <li className="light item">Cookie Preferences</li>
          <li className="light item">Help Center</li>
          <li className="light item">Privacy</li>
          <li className="light item">Corporate Informatioin</li>
        </ul>
      </div>
    </div>
  );
}
