import React from "react";
import Greeting from "./components/Greeting";
import SocialLinks from "./components/SocialLinks";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return ( 
    <div className="app">
     <Header />
     <Section title="What is React?">
      <p>
        React is a Javascript libary for building user interfaces, built and maintained by Facebook.
        It allows Developers to create reusable UI components and manage the state of applications.
        It also allows you to cut your devlopement time by a substancial amount!
      </p>
     </Section>

     <Section title="Benefits of React">
      <ul>
        <li>Reusable Cooponents helps cut Developement time</li>
        <li>Has a large and active comunity for support</li>
        <li>Seemless integration with other libraries or framworks</li>
        <li>Very useful for building dynamic and interactive UI</li>
        <li>Scalability for Complex applications</li>
      </ul>
     </Section>
    </div>
  );
}

export default App;
