import Head from "next/head";
import { icons } from "react-icons";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
//import deved from "public/dev-ed-wave.png";
import { useState } from "react";
import { motion as m } from "framer-motion";


import Navbar from "../components/Navbar";




export default function Home() {
  const [darkMode, setDarkMode]= useState(false);
  return (
    <>
     <m.div
     initial={{ y: "100%" }}
     animate={{ y: "0%" }}
     transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      
      

      
      initialclassName={darkMode ? "dark" : ""}
      >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-center lg:text-right lg:text-2xl "
          
        initialclassName="font-burtons text-3xl">Developed by Isuru </m.h1>
        <ul className="flex items-center">
        <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              
                
              </li>
            </ul>
          </nav>
<div className="text-center p-10">
  <h2  className="text-5xl md:leading-[70px] py-2 text-teal-600 font-medium md:text-6xl">Isuru Hewa</h2>
  <h3 className="text-2xl py-2 md:text-3xl" >Developer and car enthusiast</h3>
  <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">A dedicated, highly analytical, innovative, and performance-driven professional Front/Back 
    End Web Developer with 3 years of experience</p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
<AiFillTwitterCircle/>
<AiFillLinkedin/>
<AiFillYoutube/>
</div>
<div className="relative mx-auto bg-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
<img src="dev-ed-wave.png" layout="fill" objectFit="cover"></img>
    
 

</div>

       
       <div>
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Since the beginning of my software developement journey, I have done remote work 
          
          for Freelancing
          <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
        </p>
       </div>
       <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <img src="design.png" width={100} height={100}></img>
        <h3>Beautiful Designs</h3>
        <p>
          Creating elegant designs suited for your design theories
        </p>
        
       
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <img src="consulting.png" width={100} height={100}></img>
        <h3>Code</h3>
        <p>
          Creating elegant designs suited for your design theories
        </p>
        
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
        <img src="code.png" width={100} height={100}></img>
        <h3>Beautiful Designs</h3>
        <p>
          Creating elegant designs suited for your design theories
        </p>
     
        </div>
       </div>
       <h3 className="text-3xl py-1 dark:text-white ">Languages and Tools I use</h3>
       <img src="languages.png" ></img>
       </section>
       <section>
        <div>
        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div classname="basis-1/3 flex-1">
          <img src="abp.png" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" ></img>
          </div>
          <div classname="basis-1/2 flex-1">
          <img src="next.png" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" ></img>
          </div>
          <div classname="flex-1" style={{width: '100%'}}>
          <img src="mobile-app.gif" className="rounded-lg object-cover" style={{width: '100%'}} layout="responsive"></img>
          </div>
          <div classname="basis-1/2 flex-1">
          <img src="web2.png" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></img>
          </div>
          <div classname="basis-1/2 flex-1">
          <img src="infotech.png" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></img>
          </div>
          
        </div>
       </section>
      </main>
      </m.div>
    </>
    
  )
}
