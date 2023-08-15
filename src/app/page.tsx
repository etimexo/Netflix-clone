import Image from "next/image";
import Logo from "../logo.png";
import TV from "../tv.png";
import Strange1 from "../strange1.jpg";
import Strange2 from "../strange2.png";
import Kids from "../kids.png"
export default function Home() {
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
        <h1>
          Download your shows to watch offline
        </h1>
        <p className="body">
          Save your favorites easily and always have something to watch.
        </p>
          <Image src={Strange1} alt="All movies/TV shows are downloadable" />
          <Image className="strange2" src={Strange2} alt="All movies/TV shows are downloadable" />
      </section>
      <hr className="line line3" />
      <section className="sec3">
        <h1>
          Watch everywhere
        </h1>
        <p className="body">
          Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
        </p>
      </section>
      <hr className="line line4"/>
      <section className="sec4">
        <h1>
          Create profiles for kids
        </h1>
        <p className="body">
          Send kids on adventures with their favorite characters in a space made just for them--free from your membership.
        </p>
        <Image src={Kids} alt="Kids" />
      </section>
      <hr className="line line5" />
      <section className="sec5">
        <h1>Frequently asked questions</h1>
        <div className="faq">

        </div>
      </section>
    </main>
  );
}
