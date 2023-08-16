"use client";
import Image from "next/image";
import Logo from "../logo.png";
import TV from "../tv.png";
import Strange1 from "../strange1.jpg";
import Strange2 from "../strange2.png";
import Kids from "../kids.png";
import Plus from "../../public/plus.svg";
import Cancel from "../../public/cancel.svg";
import { useState } from "react";
import "../components/accordion.css";
import Accordion from "@/components/Accordion";
export default function Home() {
  const [faq1Clicked, setFaq1Clicked] = useState(false);
  function handleClick() {}
  return (
    <main>
      <section className="header">
        <nav className="navbar flex justify-between">
          <div className="logo">
            <Image src={Logo} alt="Netflix logo" className="logo" />
          </div>
          <button className="signin">Sign in</button>
        </nav>
        <h1 className="h1">Unlimited movies, TV shows and more</h1>
        <h1 className="body">Watch anywhere. Cancel anytime.</h1>
        <br />
        <h1 className="body">
          Ready to watch? Enter your email <br className="temp" /> to create or
          restart your <br /> membership
        </h1>
        <form action="">
          <label htmlFor="email">
            <input type="email" placeholder="Email address" />
          </label>
          <button type="submit" className="signin get-started">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </form>
      </section>
      <hr className="line" />
      <section className="sec1">
        <h1 className="">Enjoy your TV</h1>
        <p className="body">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <Image src={TV} alt="A TV" />
      </section>
      <hr className="line line2" />
      <section className="sec2">
        <h1>Download your shows to watch offline</h1>
        <p className="body">
          Save your favorites easily and always have something to watch.
        </p>
        <Image src={Strange1} alt="All movies/TV shows are downloadable" />
        <Image
          className="strange2"
          src={Strange2}
          alt="All movies/TV shows are downloadable"
        />
      </section>
      <hr className="line line3" />
      <section className="sec3">
        <h1>Watch everywhere</h1>
        <p className="body">
          Stream unlimited movies and TV shows on your phone, tablet, laptop and
          TV.
        </p>
      </section>
      <hr className="line line4" />
      <section className="sec4">
        <h1>Create profiles for kids</h1>
        <p className="body">
          Send kids on adventures with their favorite characters in a space made
          just for them--free from your membership.
        </p>
        <Image src={Kids} alt="Kids" />
      </section>
      <hr className="line line5" />
      <section className="sec5">
        <h1>Frequently asked questions</h1>
        <div className="accordions">
          <Accordion
            title="What is Netflix?"
            content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br />
        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
          <Accordion
            title="How much does Netflix cost?"
            content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts."
          />
          <Accordion
            title="Where can I watch?"
            content="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
          <Accordion
            title="How do I cancel?"
            content="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."
          />
          <Accordion
            title="What can I watch on Netflix?"
            content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          />
          <Accordion className="accordlast"
            title="Is Netflix good for kids?"
            content="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br /> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          />
        </div>
        <p className="body">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form action="">
          <label htmlFor="email">
            <input type="email" placeholder="Email address" />
          </label>
          <button type="submit" className="signin get-started">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </form>
      </section>
      <hr className="line line6" />
      <section className="sec6">
        <p className="link">Questions? Contact us.</p>
        <ul className="grid-container">
          <li className="item item1"><u>FAQ</u></li>
          <li className="item item"><u>Account</u></li>
          <li className="item item3"><u>Investor Relations</u></li>
          <li className="item item4"><u>Ways to Watch</u></li>
          <li className="item item5"><u>Privacy</u></li>
          <li className="item item6"><u>Corporate Information</u></li>
          <li className="item item7"><u>Speed Test</u></li>
          <li className="item item8"><u>Only on Netflix</u></li>
          <li className="item item9"><u>Help Center</u></li>
          <li className="item item10"><u>Media Center</u></li>
          <li className="item item11"><u>Jobs</u></li>
          <li className="item item12"><u>Terms of Use</u></li>
          <li className="item item13"><u>Cookie Preferences</u></li>
          <li className="item item14"><u>Contact Us</u></li>
          <li className="item item15"><u>Legal Notices</u></li>
        </ul>
      </section>
    </main>
  );
}
