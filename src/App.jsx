import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import profile from './assets/circle.png';
import './App.css';
import EntreeCard from './components/entreeCard';
import Starter from './components/starter';
import githubIcon from '/github.svg'

const appetizers = [
  {title: 'linkedin', price: '3.43', icon: 'linkedin.svg', link: 'https://www.linkedin.com/in/justineraecruz/'},
  {title: 'github', price: '10', icon: 'github.svg', link: 'https://github.com/jaerlcruz'},
  {title: 'email', price: '2.26', icon: 'envelope.svg', link: 'mailto:jaeraelcruz@gmail.com'},
  {title: 'spotify', price: '18', icon: 'spotify.svg', link: 'https://open.spotify.com/user/strawbunnii?si=45df33774efa4a45'}
]

const drinks = [
  {title: 'developer, nicolette', price: '6.25'},
  {title: 'coding instructor, codeninjas', price: '12.24'},
  {title: 'president, acm @ csulb', price: '12.24'},
  {title: 'web developer & designer, marinahacks committee', price: '10.24'}
]

const entrees = [
    {
        title: "khrave",
        price: "20.25",
        imgSrc: "cookiebread.png",
        desc: "a social web application for foodies to share orders and recipes.",
        ingredients: "react.js, prisma, supabase",
        gitlink: "https://github.com/angietea101/khrave-1.0" 
      },
    {
        title: "cafinity",
        price: "20.25",
        imgSrc: "coffeejelly.png",
        desc: "a web application for cafe enjoyers to find new spots and share reviews.",
        ingredients: "react.js, firebase, tailwind css",
        gitlink: "https://github.com/mel418/Cafinity" 
      },
    {
        title: "safetyshark",
        price: "20.24",
        imgSrc: "tartine.png",
        desc: "a map app for students to report suspicious activity on campus.",
        ingredients: "react.js, google maps api",
        gitlink: "https://github.com/jaerlcruz/SafetyReportMap" 
      },
    {
        title: "marinamuse",
        price: "20.24",
        imgSrc: "marbledanish.png",
        desc: "a collaborative music application for marinahacks, csulb wic's 24-hour hackathon.",
        ingredients: "react.js",
        gitlink: "https://github.com/MekhiHart/MarinaMuse-2024" 
      },
    {
        title: "let's go fishing",  
        price: "20.25",
        imgSrc: "melonsoda.png",
        desc: "final project for a computer graphics course, comprised of sketchfab models.",
        ingredients: "c++, opengl, oop, sfml, glsl",
        gitlink: "" 
      },
    {
        title: "etch-a-sketch",
        price: "20.23",
        imgSrc: "croissant.png",
        desc: "my customized pixel art editor.",  
        ingredients: "javascript, html, css",
        gitlink: "" 
      },
    {
        title: "the little gardener",
        price: "20.25",
        imgSrc: "matchaswirl.png",
        desc: "an ai-powered tracker for plant parents to keep their garden in their pocket. for lahacks 2025.",
        ingredients: "react native, mongodb, google gemini api, expo",
        gitlink: "" 
      }
]

function App() {

  const [focus, setFocus] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  return (
    <div>
      {/* overlays */}
      {focus && 
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-[rgba(47,47,47,0.3)]" onClick={() => setFocus(null)}>
          <div className="fixed w-1/2 h-3/5 border bg-[#E0DAD2] flex flex-col justify-center items-center p-4">
              <h2 className="text-2xl font-semibold mb-4">{focus.title}</h2>
              <p>{focus.desc}</p>
              <button className="border px-4 py-1 mt-4 hover:font-extrabold transition-all ease-in-out hover:cursor-pointer flex items-center gap-2">
                <img src={githubIcon} className="w-4 h-4"/>
                add to order
                </button>
          </div>
        </div>
      }
    <div className="px-8 md:px-24 lg:px-64">
      
      {/* navbar */}
      <div className="sticky top-0 z-40 bg-[#E0DAD2] left-0 w-full pb-8 pt-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold italic">
          justine's little cafe
        </h2>
        
        <div className="flex justify-center mt-4">
          <button className="m-0 border px-2"
            onClick={() => scrollToSection('appetizers')}>appetizers</button>
          <button className="m-0 border px-2"
            onClick={() => scrollToSection('entrees')}>entrees</button>
          <button className="m-0 border px-2"
            onClick={() => scrollToSection('desserts')}>desserts</button>
        </div>
      </div>

      <div className="md:flex gap-12">
        {/* socials container */}
        <div className="md:w-1/2">
          <h2 id="appetizers" className="text-xl">
            appetizers / <em>socials</em>
          </h2>
          <hr className="pb-2"/>
          <ul className="list-none">
            {appetizers.map((app, index) => (
                <Starter key={index}
                title={app.title}
                price={app.price}
                icon={app.icon}
                link={app.link}
                />
            ))}
          </ul>
        </div>
        {/* experience container */}
        <div className="md:w-1/2">
          <h2 className="text-xl">
            drinks / <em>experience</em>
          </h2>
          <hr className="pb-2"/>
          <ul className="list-none">
            {drinks.map((drink, index) => (
                <Starter key={index}
                title={drink.title}
                price={drink.price}
                />
            )
            )}
          </ul>
        </div>
      </div>

      {/* projects!! */}
      <div id="entrees" className="mt-8">
        <h2 className="text-xl">
          entrees / <em>projects</em>
        </h2>
        <hr className="pb-2"/>
        <ul className="list-none flex gap-2 py-2
        overflow-x-scroll scrollbar">
            {entrees.map((entree, index) => (
              <div key={index}
              onClick={() => setFocus(entree)}>
                <EntreeCard
                title={entree.title}
                price={entree.price}
                imgSrc={entree.imgSrc}
                desc={entree.desc}
                ingredients={entree.ingredients}
                />
              </div>
            ))}
        </ul>
      </div>

      {/* about me :D  */}
      <div id="desserts" className="mt-8">
        <h2 className="text-xl">
          desserts / <em>about me</em>
        </h2>
        <hr className="pb-2"/>
        <div className="py-4 flex items-center justify-between">
            <img className="bg-[#E2D591] max-w-[30%] rounded-full mb-2 border" src={profile}/>
            <div className="ml-8">
              <h2 className="text-3xl font-bold mb-2">Justine Cruz</h2>
              <p>
                Computer Science graduate from California State University, Long Beach. Passionate about combining computers and creativity. Aspiring full-stack developer.
              </p>
            </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default App
