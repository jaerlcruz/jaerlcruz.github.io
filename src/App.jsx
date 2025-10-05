import { useState, useEffect } from 'react';
import profile from '/colory.png';
import './App.css';
import EntreeCard from './components/entreeCard';
import Starter from './components/starter';
import halftone from '/hty.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaSpotify, FaMoon } from "react-icons/fa";
import { FiArrowUpRight, FiSun } from "react-icons/fi";

const appetizers = [
  {title: 'linkedin', 
    price: '3.43', 
    icon: <FaLinkedin/>,//'linkedin.svg', 
    link: 'https://www.linkedin.com/in/justineraecruz/'},
  {title: 'github', 
    price: '10', 
    icon: <FaGithub/>,// 'github.svg', 
    link: 'https://github.com/jaerlcruz'},
  {title: 'email', 
    price: '2.26', 
    icon: <FaEnvelope/>,//'envelope.svg', 
    link: 'mailto:jaeraelcruz@gmail.com'},
  {title: 'spotify', 
    price: '18', 
    icon: <FaSpotify/>,//'spotify.svg', 
    link: 'https://open.spotify.com/user/strawbunnii?si=45df33774efa4a45'}
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
        gitlink: "https://github.com/angietea101/khrave-1.0",
        previewImg: "/previews/khrave.png"
      },
    {
        title: "cafinity",
        price: "20.25",
        imgSrc: "coffeejelly.png",
        desc: "a web application for cafe enjoyers to find new spots and share reviews.",
        ingredients: "react.js, firebase, tailwind css",
        gitlink: "https://github.com/mel418/Cafinity",
        previewImg: "/previews/cafinity.png"
      },
    {
        title: "safetyshark",
        price: "20.24",
        imgSrc: "tartine.png",
        desc: "a map app for students to report suspicious activity on campus.",
        ingredients: "react.js, google maps api",
        gitlink: "https://github.com/jaerlcruz/SafetyReportMap",
        previewImg: ""
      },
    {
        title: "marinamuse",
        price: "20.24",
        imgSrc: "marbledanish.png",
        desc: "a collaborative music application for marinahacks, csulb wic's 24-hour hackathon.",
        ingredients: "react.js",
        gitlink: "https://github.com/MekhiHart/MarinaMuse-2024",
        previewImg: "/previews/marinamuse.png"
      },
    {
        title: "let's go fishing",  
        price: "20.25",
        imgSrc: "melonsoda.png",
        desc: "final project for a computer graphics course, comprised of 3d models & physics elements.",
        ingredients: "c++, opengl, oop, sfml, glsl",
        gitlink: "",
        previewImg: "/previews/fishing.png"
      },
    {
        title: "etch-a-sketch",
        price: "20.23",
        imgSrc: "croissant.png",
        desc: "my customized pixel art editor.",  
        ingredients: "javascript, html, css",
        gitlink: "https://github.com/jaerlcruz/etch-a-sketch",
        previewImg: ""
      },
    {
        title: "the little gardener",
        price: "20.25",
        imgSrc: "matchaswirl.png",
        desc: "an ai-powered tracker for plant parents to keep their garden in their pocket. for lahacks 2025.",
        ingredients: "react native, mongodb, google gemini api, expo",
        gitlink: "https://github.com/aiden-perkins/thelittlegardener",
        previewImg: "/previews/gardener.png"
      }
]

function App() {

  const [focus, setFocus] = useState(null);
  const [hoverProfile, setHoverProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="pb-16 dark:bg-[#413D3B] dark:text-[#E0DAD2] transition-all ease-in-out">
      {/* overlays */}
      {focus && 
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-70 bg-[rgba(47,47,47,0.7)]" onClick={() => setFocus(null)}>
          <div className="flex flex-col fixed max-w-4/5 lg:w-1/2 h-3/5 lg:h-2/3 border bg-[#E0DAD2] dark:bg-[#413D3B] p-2 lg:p-4" onClick={(e) => e.stopPropagation()}>
              <p className="text-right cursor-pointer mb-2" onClick={() => setFocus(null)}>X</p>
              <div className="flex flex-col items-center w-full h-full x-8">
                {focus.previewImg !== "" ? 
                  <img src={focus.previewImg} className="mb-2 border max-h-3/5"/>
                :<></>}
                <h2 className="text-2xl font-semibold my-1">{focus.title}</h2>
                <p className="w-full lg:text-base text-sm">{focus.desc}</p>
                <p className="italic mt-2 w-full lg:text-base text-sm">
                  contains: {focus.ingredients}  
                </p>         
                {focus.gitlink === "" ?
                <></>:
                (<button className="border px-4 py-1 mt-4 hover:font-extrabold transition-all ease-in-out hover:cursor-pointer flex items-center gap-2" onClick={() => window.open(focus.gitlink, '_blank')}>
                  <FaGithub />
                add to order
                </button>)}
              </div>
          </div>
        </div>
      }

      {/* navbar */}
      <div className="sticky top-0 z-60 bg-[#E0DAD2] left-0 w-full pb-6 pt-8 text-center dark:bg-[#413D3B] dark:text-[#E0DAD2] transition-all ease-in-out">
        <h2 className="text-3xl md:text-4xl font-bold italic dark:text-[#BF963C]">
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

        <button className="mt-2 m-auto flex gap-2 items-center"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode?
            <>
            dinner menu
            <FaMoon/>
            </>
            :<>
            lunch menu
            <FiSun/>
            </>
          }
        </button>
      </div>

    <div className="mx-8 md:mx-24 lg:mx-64">

      <div className="flex flex-col md:flex-row md:gap-12 gap-8">
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
                Icon={() => app.icon}
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
        <ul className="list-none flex gap-2 py-2 overflow-x-scroll scrollbar" onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY;
        }}>
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
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-8">
            <img className="bg-[#E2D591] w-4/5 sm:max-w-[30%] rounded-full mb-2 border transition-all ease-in-out -rotate-12 hover:rotate-6" src={hoverProfile?profile:halftone}
            onMouseEnter={() => setHoverProfile(true)}
            onMouseLeave={() => setHoverProfile(false)}/>
            <div className="">
              <h2 className="text-3xl font-bold mb-2">Justine Cruz</h2>
              <p>
                Computer Science graduate from California State University, Long Beach. Passionate about combining computers and creativity. Aspiring full-stack developer.
              </p>
              <button className="border px-4 py-2 mt-4 focus:font-bold hover:bg-[#474747] hover:text-[#E2D591] flex gap-2 items-center justify-center cursor-pointer"
                onClick={() => window.open("/Justine_Cruz_Resume.pdf", '_blank')}>
                Resume
                <FiArrowUpRight />
              </button>
            </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default App
