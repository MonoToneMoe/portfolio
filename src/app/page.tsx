"use client"

import Link from 'next/link'
import { Navbar } from "flowbite-react";
import Image from 'next/image'
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoAngular } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { SiMapbox } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { LuMailOpen } from "react-icons/lu";
import { SiDotnet } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SiMicrosoftazure } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiNotion } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { SiDiagramsdotnet } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import CardComponent from '@/Components/CardComponent';


export default function Home() {

  const cardOneData = [
    {
      icon: <SiNextdotjs />,
      iconName: 'Next.JS'
    },
    {
      icon: <BiLogoTypescript />,
      iconName: 'TS'
    },
    {
      icon: <RiTailwindCssFill />,
      iconName: 'Tailwind'
    },
    {
      icon: <TbBrandCSharp />,
      iconName: 'C#'
    },
    {
      icon: <SiMapbox />,
      iconName: 'Mapbox'
    }
  ]
  const cardTwoData = [
    {
      icon: <DiHtml5 />,
      iconName: 'HTML'
    },
    {
      icon: <DiCss3 />,
      iconName: 'CSS'
    },
    {
      icon: <IoLogoJavascript />,
      iconName: 'JS'
    },
    {
      icon: <RiTailwindCssFill />,
      iconName: 'Tailwind'
    }
  ]
  const cardThreeData = [
    {
      icon: <SiNextdotjs />,
      iconName: 'Next.JS',
    },
    {
      icon: <BiLogoTypescript />,
      iconName: 'TS'
    },
    {
      icon: <RiTailwindCssFill />,
      iconName: 'Tailwind'
    }
  ];

  return (
    <div>
      <title>My Portoflio</title>
      <link rel="icon" href="/favicon.png" sizes='any' />
      <Navbar fluid className='fixed top-0 z-50 w-full slideDown'>
        <Navbar.Brand as={Link} href="#home" to="#home">
          <img src="/logoNoBg.png" className="mr-3 h-9 w-9 sm:w-14 sm:h-14" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl sm:text-3xl font-semibold dark:text-white">George Haddad</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className='text-xl' href="#home">
            Home
          </Navbar.Link>
          <Navbar.Link className='text-xl' as={Link} href="#skills">Skills</Navbar.Link>
          <Navbar.Link className='text-xl' href="#projects">Projects</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <main className='overflow-x-hidden'>

        <section className='md:h-fit gap-4 md:px-4 xl:px-0 xl:h-screen pt-20 md:pt-28 flex columns-2 flex-col md:flex-row' id='home'>
          <div className='md:h-full px-8 sm:px-0 md:w-5/12 w-full flex justify-center xl:items-start items-center md:items-start'>
            <Image className='xl:h-[80%] md:h-[50%] lg:h-[60] md:w-auto object-cover slideRight rounded-3xl border-solid border-gray-400 border-2' width={1080} height={1920} src={"/me.jpg"} alt='' />
          </div>
          <div className='flex flex-col items-center justify-start md:items-start w-full mt-6 md:mt-0 md:w-7/12 md:h-[80%]'>
            <div className=''>
              <h1 className='slideLeft text-center md:text-left text-xl xl:text-6xl md:text-4xl text-white'>George Haddad • Developer</h1>
              <p className='slideLeft2 text-center md:text-left text-lg xl:text-5xl md:text-3xl text-gray-400 xl:mt-4'>Code Crafted with Passion</p>
            </div>
            <div className='flex flex-col items-center justify-center xl:pr-32 w-72 md:w-auto xl:mt-8 mt-4 opacity-0 fadeIn'>
              <p className='text-white xl:text-2xl md:text-lg'>As a recent high school graduate, I discovered my passion for coding at CodeStack Academy.  Fueled by curiosity, I'm driven to explore the ever-evolving tech landscape, pushing boundaries and transforming ideas into realities.</p>
            </div>
            <div className='w-full mt-4 flex flex-col items-center md:items-start'>
              <header className='text-white text-center md:text-left text-xl lg:text-2xl 2xl:text-4xl mb-2 lg:mb-8'>My Contacts</header>
              <div className='hidden 2xl:grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-8 w-96 md:w-auto px-8 md:px-0'>
                <IconContext.Provider value={{ size: '40', color: '#9CA3AF' }}>
                  <Link className='flex items-center gap-4 justify-between md:justify-start' target='_blank' href={"https://github.com/MonoToneMoe"}>
                    <FaGithub />
                    <h1 className='text-gray-400 hover:text-blue-600 hover:underline text-3xl'>Github</h1>
                    <div></div>
                  </Link>
                  <Link className='flex items-center gap-4 justify-between md:justify-start' target='_blank' href={"https://github.com/MonoToneMoe"}>
                    <FaLinkedin />
                    <h1 className='text-gray-400 hover:text-blue-600 hover:underline text-3xl'>LinkedIn</h1>
                    <div></div>
                  </Link>
                  <Link className='flex items-center gap-4 justify-between md:justify-start' href={"tel:+12095026283"}>
                    <FaPhone />
                    <h1 className='text-gray-400 hover:text-blue-600 hover:underline text-3xl'>(209) 502-6283</h1>
                    <div></div>
                  </Link>
                </IconContext.Provider>
              </div>
              <div className='grid 2xl:hidden grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-8 w-72 sm:w-auto'>
                <IconContext.Provider value={{ size: '25', color: '#9CA3AF' }}>
                  <Link className='flex items-center gap-4 justify-between md:justify-start' target='_blank' href={"https://github.com/MonoToneMoe"}>
                    <FaGithub />
                    <h1 className='text-gray-400 hover:text-blue-600 hover:underline text-xl'>Github</h1>
                    <div></div>
                  </Link>
                  <Link className='flex items-center gap-4 justify-between md:justify-start' target='_blank' href={"https://github.com/MonoToneMoe"}>
                    <FaLinkedin />
                    <h1 className='text-gray-400 hover:text-blue-600 hover:underline text-xl'>LinkedIn</h1>
                    <div></div>
                  </Link>
                  <Link className='flex items-center gap-4 justify-between md:justify-start' href={"tel:+12095026283"}>
                    <FaPhone />
                    <h1 className='text-gray-400 hover:text-blue-600 hover:underline text-xl'>(208) 502-6283</h1>
                    <div></div>
                  </Link>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full flex justify-center items-center flex-col pt-28' id='skills'>
          <header>
            <h2 className='text-4xl text-white text-center mb-12'>Skills</h2>
          </header>
          <div className='justify-center grid grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-x-12 md:w-fit gap-y-4 md:gap-y-0 mt-4 small-gap items-start'>
            <div className='flex flex-col justify-center items-center md:w-auto'>
              <div className='text-center text-lg md:text-xl text-white h-14 flex items-center justify-center'>
                Languages
              </div>
              <div className='md:justify-around grid grid-cols-2 small-gap mx-auto md:grid-cols-4 w-40 md:w-96 gap-x-2 gap-y-2 auto-cols-fr auto-rows-fr'>
                <IconContext.Provider value={{ size: '45', color: '#9CA3AF' }}>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Hypertext Markup Language'>
                    <DiHtml5 />
                    <p>HTML</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Cascading Style Sheets'>
                    <DiCss3 />
                    <p>CSS</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='JavaScript'>
                    <IoLogoJavascript />
                    <p>JS</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='TypeScript'>
                    <BiLogoTypescript />
                    <p>TS</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='C#'>
                    <TbBrandCSharp />
                    <p>C#</p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center md:w-auto'>
              <div className='flex text-center text-lg md:text-xl text-white h-14 items-center justify-center'>
                Frameworks
              </div>
              <div className='md:justify-around grid grid-cols-2 small-gap mx-auto md:grid-cols-4 w-40 md:w-96 gap-x-2 gap-y-2 auto-cols-fr auto-rows-fr'>
                <IconContext.Provider value={{ size: '45', color: '#9CA3AF' }}>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Next.JS'>
                    <SiNextdotjs />
                    <p>Next.JS</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='React Native'>
                    <TbBrandReactNative />
                    <p>RN</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Angular'>
                    <IoLogoAngular />
                    <p>Angular</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='.Net 7'>
                    <SiDotnet />
                    <p>.Net 7</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Structured Query Language'>
                    <TbSql />
                    <p>SQL</p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center md:w-auto'>
              <div className='flex text-center text-lg md:text-xl text-white h-14 items-center justify-center'>
                Libraries
              </div>
              <div className='md:justify-around grid grid-cols-2 small-gap mx-auto md:grid-cols-4 w-40 md:w-96 gap-x-2 gap-y-2 auto-cols-fr auto-rows-fr'>
                <IconContext.Provider value={{ size: '45', color: '#9CA3AF' }}>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center ' title='React'>
                    <FaReact />
                    <p>React</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Tailwind'>
                    <RiTailwindCssFill />
                    <p>TW</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Bootstrap'>
                    <FaBootstrap />
                    <p>Bootstrap</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Material UI'>
                    <SiMui />
                    <p>MUI</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Mapbox'>
                    <SiMapbox />
                    <p>Mapbox</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='EmailJS'>
                    <LuMailOpen className='rotate-45' />
                    <p>EmailJS</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Cloudinary'>
                    <SiCloudinary />
                    <p>Cld</p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center md:w-auto'>
              <div className='flex text-center text-lg md:text-xl text-white h-14 items-center justify-center'>
                Tools
              </div>
              <div className='md:justify-around grid grid-cols-2 small-gap mx-auto md:grid-cols-4 w-40 md:w-96 gap-x-2 gap-y-2 auto-cols-fr auto-rows-fr'>
                <IconContext.Provider value={{ size: '45', color: '#9CA3AF' }}>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Visual Studio Code'>
                    <VscVscode />
                    <p>VSCode</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Github'>
                    <FaGithub />
                    <p>Github</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Figma'>
                    <IoLogoFigma />
                    <p>Figma</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Microsoft Azure: Cloud Computing Services'>
                    <SiMicrosoftazure />
                    <p>Azure</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Notion'>
                    <SiNotion />
                    <p>Notion</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Slack'>
                    <FaSlack />
                    <p>Slack</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center rounded-xl border-gray-400 border-2' title='Postman'>
                    <SiPostman />
                    <p>Postman</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Draw.io'>
                    <SiDiagramsdotnet />
                    <p>Draw.io</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Android Studio'>
                    <SiAndroidstudio />
                    <p>AS</p>
                  </div>
                  <div className='text-center text-gray-400 flex items-center flex-col justify-center' title='Expo Go'>
                    <SiExpo />
                    <p>ExpoGo</p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </section>

        <section className='md:h-screen pt-28' id='projects'>
          <div>
            <header>
              <h2 className='text-4xl text-white text-center mb-12'>Projects</h2>
            </header>
            <article className='flex justify-center items-center'>
              <div id="cards">
                <link rel="stylesheet" href="" />
                <CardComponent src='/foodtrucks.png' title='Prometo Food Trucks' icon={cardOneData} github='https://github.com/fernandog301/prometofoodtrucks' vercel='https://prometofoodtrucks.vercel.app/' />
                <CardComponent src='/PokeDex.png' title='Pokemon Api Challenge' icon={cardTwoData} github='https://github.com/MonoToneMoe/Pokemon-API-Challenge' vercel='https://pokemon-api-challenge-sigma.vercel.app/' />
                <CardComponent src='/tipCalculator.png' title='Tip Calculator' icon={cardThreeData} github='https://github.com/MonoToneMoe/tip-calculator' vercel='https://tip-calculator-pot7hqglp-george-haddads-projects.vercel.app/' />
              </div>
            </article>
          </div>
        </section>

      </main>
    </div>
  );
}
