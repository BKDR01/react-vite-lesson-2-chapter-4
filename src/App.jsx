import { useState } from "react";
import "./App.css";
import Clients from './assets/img/Clients Logos.png';
import end from './assets/img/Frame.png';
import Logo from './assets/img/Icon.png';
import icon1 from './assets/img/Icon1.png';
import icon2 from './assets/img/Icon2.png';
import icon3 from './assets/img/Icon3.png';
import Illustration from './assets/img/Illustration.png';

function App() {
  return (
    <>

<div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex justify-between items-center px-8 py-6 shadow">
        <div className="text-2xl font-bold text-green-600 flex items-center gap-[3px]"><img src={Logo} className="w-[34px] h-[24px]" alt="" /> Nexcent</div>
        <nav className="flex space-x-6 text-sm items-center">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Features</a>
          <a href="#" className="hover:text-green-600">Community</a>
          <a href="#" className="hover:text-green-600">Blog</a>
          <a href="#" className="hover:text-green-600">Pricing</a>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
          Register Now
        </button>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 items-center px-8 py-16 gap-8">
        <div>
          <h1 className="text-4xl font-bold leading-snug">
            Lessons and insights <br />
            <span className="text-green-600">from 8 years</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
            Register
          </button>
        </div>
        <div>
          <img src={Illustration} alt="Illustration" className="w-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="text-center px-8 py-12 bg-gray-50">
        <h2 className="text-xl font-semibold">Our Clients</h2>
        <p className="text-gray-600 mt-2">We have been working with some Fortune 500+ clients</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <img src={Clients} alt="Client 1" className="h-[70px] w-[800px]" />
        </div>
      </section>

      <section className="px-8 py-16 text-center">
        <h2 className="text-2xl font-bold">Manage your entire community in a single system</h2>
        <p className="mt-2 text-gray-600">Who is Nextcent suitable for?</p>
        <div className="mt-12 gap-[42px] flex justify-center">
          {[
            {
              icon: icon1,
              title: "Membership Organisations",
              text: "Our membership management software provides full automation of membership renewals and payments"
            },
            {
              icon: icon2,
              title: "National Associations",
              text: "Our membership management software provides full automation of membership renewals and payments"
            },
            {
              icon: icon3,
              title: "Clubs And Groups",
              text: "Our membership management software provides full automation of membership renewals and payments"
            }
          ].map(({ icon, title, text }, i) => (
            <div key={i} className="bg-white shadow-md w-[300px] h-[300px] px-[10px] py-[10px] rounded-lg">
              <img src={icon} className="mx-auto mb-4 h-[40px]" />
              <h3 className="font-bold text-[28px]">{title}</h3>
              <p className="text-[18px] text-gray-600 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 items-center px-8 py-16 bg-gray-50 gap-8">
        <div>
          <img src={end} alt="Spending Years" className="w-full max-w-md mx-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">The unseen of spending three years at Pixelgrade</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent facilisis justo at purus aliquam, a dignissim libero luctus.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
            Learn More
          </button>
        </div>
      </section>
    </div>

    </>
  );
}

export default App;
