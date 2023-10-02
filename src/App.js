import './App.css';
import './index.css';
import logo from './image/logo.png';
import ysf from './image/ysf.jpg';
import css from './image/css.svg';
import html from './image/html.svg';
import js from './image/js.svg';
import nodejs from './image/nodejs.svg';
import psql from './image/psql.svg';
import react from './image/react.svg';
import tailwind from './image/tailwind.svg';
import arrow from './image/arrow.svg';
import arrow2 from './image/arrow2.svg';
import linkedin from './image/linkedin.svg';
import github from './image/github.svg';
import mail from './image/mail.svg';
import p1 from './image/p1.png';
import project1 from './image/project1.jpg';
import project2 from './image/project2.jpg';
import project3 from './image/project3.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function App() {
  const allSkills = [css, html, js, nodejs, psql, react, tailwind];
  const firstProject = [css, html, js, nodejs, psql, react, tailwind];
  const secondProject = [css, html, js, react, tailwind];
  const thirdProject = [css, html, js];
  const [text]=useTypewriter({
    words:['Web Developer and Business Analyst with a Passion for Creating Beautiful Websites'],
    loop:1,
    typeSpeed:60
  })
  return (
    <div className="bg-gradient-to-r from-amber-100 to-cyan-100 px-10 scroll-smooth ">
      
      <navbar className='py-5 flex justify-between max-lg:flex max-lg:flex-col max-lg:items-center'>
        <div className='max-lg:mb-5'>
          <a href='#'><img src={logo} className='h-10 rounded-xl'/></a>
        </div>
        <div className='max-lg:justify-between'>
          <a href='#' className='px-5 py-2 max-lg:hidden'>Home</a>
          <a href='#' className='px-5 py-2 max-lg:mr-2'>About Me</a>
          <a href='#projects' className='px-5 py-2 max-lg:mr-2'>Projects</a>
          <a href='#contact' className='bg-red-600 hover:bg-red-800 rounded-xl px-5 py-2 max-lg:bg-transparent max-lg:p-0'>Contact Me</a>
        </div>
      </navbar>
      <div className='grid grid-cols-12 grid-rows-5 hover:scroll-auto max-lg:flex max-lg:flex-col max-lg:items-center'>
        <div className='col-start-2 col-span-4 row-start-1 row-span-1 flex justify-center items-center max-lg:py-10'>
          <img src={ysf} className=' rounded-full h-80  max-lg:h-40'></img>
        </div>
        <div className='col-start-7 col-span-6 row-start-1 row-span-1 flex flex-col justify-center items-start '>
          <div className='text-4xl mb-10 font-bold w-4/5 max-lg:w-full max-lg:h-1/4 max-lg:mb-16 '><h1>{text} <Cursor/><span></span> </h1></div>
          <div className='flex justify-center items-center mb-10 max-lg:mb-16'>
            {allSkills.map((allSkill)=>{
              return (<img src={allSkill} className='pr-5 max-lg:h-6'/>)
            })}
          </div>
          <div className='max-lg:mb-16'><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 transition-transform hover:-translate-y-1 '>Contact Me</a></div>
        </div>
        
        <div id='projects' className='col-start-7 col-span-4 row-start-2 row-span-1 flex justify-end items-center h-screen max-lg:flex-col max-lg:h-auto max-lg:mt-10 max-lg:mb-5'>
            <p className=' lg:hidden text-lg text-red-600'>Click image to scroll!</p>
          <div className='screen rounded-sm scroll-auto'>
            <img src={project1} className='rounded-lg w-56 h-80 object-cover '/>
          </div>
        </div>
        <div className='col-start-3 col-span-6 row-start-2 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
          <div className='text-4xl mb-10 font-bold '><h1 className='w-4/5 max-lg:w-full'>Full-Stack Responsive E-commerce App</h1></div>
          <p className='w-9/12 mb-5 max-lg:w-full'><ul className='list-disc leading-10'>
              <li>Express.js is used to create api paths and requests.</li>
              <li>Responsive design</li>
              <li>For login passport.js and bcrypt library is used.</li>
              <li>PostgreSQL(relational database) database is used to store data and sql is used to retrieve and write datas.</li>
              <li>Frontend login-products-orders pages are developed</li>
              <li>React-redux to provide global state management</li>
            </ul> <a href='https://e-commerce-application-c201bc9d6502.herokuapp.com/' className=' flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/> Visit Project</a></p>
          <div className='flex justify-center items-center mb-10'>
            {allSkills.map((allSkill)=>{
              return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-6'/>)
            })}
          </div>
          <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
        </div>
        <div className='col-start-3 col-span-4 row-start-3 row-span-1 flex justify-start items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-5 '>
        <div className='screen'>
            <img src={project2} className='rounded-lg w-56 h-80 object-cover '></img>
          </div>
        </div>
        <div className='col-start-7 col-span-6 row-start-3 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
          <div className='text-4xl mb-10 font-bold '><h1 className='w-4/5 max-lg:w-full'>Frontend-React Game App</h1></div>
          <p className='w-9/12 mb-5 max-lg:w-full'>
          <ul className='list-disc leading-10'>
              <li>This project is frontend project.</li>
              <li>This project is developed to practice tailwind css library and Material UI component library.</li>
              <li>Home Page- About Us- Products pages are developed</li>
              <li>Backlog: Responsive Design</li>
            </ul>
             <a href='https://gameapp-yssfklc.netlify.app/' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
          <div className='flex justify-center items-center mb-10'>
            {secondProject.map((allSkill)=>{
              return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-8'/>)
            })}
          </div>
          <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
        </div>
        <div className='col-start-7 col-span-4 row-start-4 row-span-1 flex justify-end items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-10'>
        <div className='screen2 rounded-lg'>
            <img src={project3} className='rounded-lg w-56 h-80 object-cover '></img>
          </div>
        </div>
        <div className='col-start-3 col-span-6 row-start-4 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
          <div className='text-4xl mb-10 font-bold '><h1 className='w-4/5 max-lg:w-full'>A Responsive Freelance Website From The Scratch - 'architectural-website'</h1></div>
          <p className='w-9/12 mb-5 max-lg:w-full'>
            <ul className='list-disc leading-10'>
                <li>A Freelance project is designed, developed and deployed.</li>
                <li>In this project, a website is developed only using plain <strong>HTML and CSS</strong>.</li>
                <li>No css library has been used and no javascript code has been used (only for contact form) since this project is to develop <strong>raw HTML and CSS</strong> skills.</li>
                <li>Project is designed in Figma</li>
                <li>It includes 4 main pages(Home Page-Projects-About Us- Contact Us)</li>
                <li>Every single page includes its own html and css file.</li>
              </ul>
              

             <a href='https://zykmimarlik.com/' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
          <div className='flex justify-center items-center mb-10'>
            {thirdProject.map((allSkill)=>{
              return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-8'/>)
            })}
          </div>
          <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
        </div>   
        <div className='col-start-3 col-span-5 row-start-5 row-span-1 flex justify-start items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-5'>
          <img src={p1} className='rounded-lg'></img>
        </div>
        <div id='contact' className='col-start-7 col-span-6 row-start-5 row-span-1 flex justify-center items-center h-screen max-lg:h-auto max-lg:mb-10'>
          <div >
            <a href='https://tr.linkedin.com/in/yssfklc' className='flex flex-col justify-center items-center'>
              <img src={linkedin} className='rounded-lg mr-10 mb-5 max-lg:h-10'/>
              <img src={arrow2} className='animate-bounce rounded-lg mr-10 self-center'/>
            </a>
          </div>
          <div >
            <a href='https://github.com/yssfklc' className='flex flex-col justify-center items-center'>
              <img src={github} className='rounded-lg mr-10 mb-5 max-lg:h-10'/>
              <img src={arrow2} className='animate-bounce rounded-lg mr-10 self-center'/>
            </a>
          </div>
          <div >
          <a href='mailto:yssfklc@gmail.com' className='flex flex-col justify-center items-center'>
            <img src={mail} className='rounded-lg mr-10 mb-5 max-lg:h-10'/>
            <img src={arrow2} className='animate-bounce rounded-lg mr-10 self-center'/>    
          </a>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
