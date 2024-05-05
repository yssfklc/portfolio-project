import './App.css';
import './index.css';
import logo from './image/logo.png';
import ysf from './image/ysf.png';
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
import mongodb from './image/mongodb.svg';
import openai from './image/openai.svg';
import sendicon from './image/sendicon.svg';
import p1 from './image/p1.png';
import project1 from './image/project1.jpg';
import project2 from './image/project2.jpg';
import project3 from './image/project3.jpg';
import project4 from './image/dashboard.png';
import project5 from './image/documenthelper.png';
import project6 from './image/dogbreedclassification.png';
import project7 from './image/bulldozerproject.png';
import project8 from './image/heartdiseaseproject.png';
import project9 from './image/cv.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function App() {
  const allSkills = [css, html, js, nodejs, psql, react, tailwind];
  const firstProject = [css, html, js, nodejs, psql, react, tailwind];
  const secondProject = [css, html, js, react, tailwind];
  const dashboardProject = [css, html, js, react, mongodb];
  const thirdProject = [css, html, js];
  const [text]=useTypewriter({
    words:['Expertise in Data-Driven Software Product Development'],
    loop:1,
    typeSpeed:60
  })
  return (
    <div className="bg-gradient-to-r from-amber-100 to-cyan-100 px-10 scroll-smooth ">
      {/* Navbar Design */}
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
      {/* AI app redirect bar design */}
      <div className='bg-gradient-to-r from-red-500 to-purple-500 rounded-xl py-3 flex justify-center items-center max-lg:py-2 max-lg:px-4'>
        <a href='#chatbot' ><p className='flex text-neutral-700 underline text-center'><img src={openai} className='mr-2'></img> !!!! Ask Your Questions About me to Yusuf AI (Click Here)<img src={sendicon} className='ml-2'></img></p></a>
      </div>
      <div className='grid grid-cols-12 grid-rows-10 hover:scroll-auto max-lg:flex max-lg:flex-col max-lg:items-center'>
        {/* First Page Design */}
        <div className='col-start-2 col-span-4 row-start-1 row-span-1 h-screen flex justify-center items-center max-lg:py-10 max-lg:h-auto'>
          <img src={ysf} className='rounded-full h-96  max-lg:h-40'></img>
        </div>
        <div className='col-start-7 col-span-6 row-start-1 row-span-1 h-screen flex flex-col justify-center items-start max-lg:h-auto'>
          <div className='text-4xl mb-10 font-bold w-4/5 max-lg:w-full max-lg:h-1/4 max-lg:mb-16 '><h1>{text} <Cursor/><span></span> </h1></div>
          
          <div className='flex justify-center items-center mb-10 max-lg:mb-16'>
            {allSkills.map((allSkill)=>{
              return (<img src={allSkill} className='pr-5 max-lg:h-6 h-14'/>)
            })}
          </div>
          <div className='max-lg:mb-16'><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 transition-transform hover:-translate-y-1 '>Contact Me</a></div>
              
        </div>
        {/* Card Designs */}
        <div className='flex col-start-2 col-span-10 row-start-2 row-span-1 h-max justify-center items-center max-sm:flex-col mb-10'>
              <div class="bg-gray-300 w-3/12 h-9/12 rounded overflow-hidden shadow-lg mr-5 max-lg:w-4/12 max-sm:w-2/3 max-lg:mb-4">
                <div className='flex justify-center items-center'>
                  <img class="w-full h-64 object-cover" src={project1} alt="Picture representing software projects"/>
                </div>
                <div class="px-6 py-4 h-56">
                  <div class="font-bold text-xl mb-2">Software Projects</div>
                  <p class="text-gray-700 text-base">
                    Reach the details of software projects in details with their complete explanations.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 mb-2">
                <a href='#softwareprojects' className='bg-purple-600 hover:bg-purple-800 rounded-xl px-5 py-2'>View the Projects</a>
                </div>
              </div>
              <div class="bg-gray-300 w-3/12 h-9/12 rounded overflow-hidden shadow-lg mr-5 max-lg:w-4/12 max-sm:w-2/3 max-lg:mb-4">
                <div className='flex justify-center items-center'>
                  <img class="w-full h-64 object-cover" src={project8} alt="Picture representing ai projects"/>
                </div>
                <div class="px-6 py-4 h-56">
                  <div class="font-bold text-xl mb-2">AI Projects</div>
                  <p class="text-gray-700 text-base">
                    Reach the details of AI projects in details with their complete explanations.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 mb-2">
                <a href='#aiprojects' className='bg-purple-600 hover:bg-purple-800 rounded-xl px-5 py-2'>View The Projects</a>
                </div>
              </div>
              <div class="bg-gray-300 w-3/12 h-9/12 rounded overflow-hidden shadow-lg mr-5 max-lg:w-4/12 max-sm:w-2/3 max-lg:mb-4">
                <div className='flex justify-center items-center'>
                  <img class="w-full h-64 object-cover" src={project9} alt="Yusuf Kilic Professional experience"/>
                </div>
                <div class="px-6 py-4 h-56">
                  <div class="font-bold text-xl mb-2">Professional Experience</div>
                  <p class="text-gray-700 text-base">
                    Reach the details of professional experience in details with their complete explanations.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 mb-2">
                <a href='#contact' className='bg-purple-600 hover:bg-purple-800 rounded-xl px-5 py-2'>View Details</a>
                </div>
              </div>
              
            
        </div>
        {/* Software Projecs are listed */}
        <div className='col-start-1 col-span-12 row-start-3 row-span-7 mb-16'>
          <div className='grid grid-cols-12 grid-rows-12 hover:scroll-auto max-lg:flex max-lg:flex-col max-lg:items-center'>
            <h2 className='col-start-5 col-span-4 row-start-1 row-span-1 text-4xl text-center underline font-bold text-gray-600 mt-3' id='softwareprojects'>1. Software Projects</h2>
            <div id='projects' className='col-start-7 col-span-4 row-start-1 row-span-1 flex justify-end items-center h-screen max-lg:flex-col max-lg:h-auto max-lg:mt-10 max-lg:mb-5'>

            <p className=' lg:hidden text-lg text-red-600'>Click image to scroll!</p>
            <div className='screen rounded-sm scroll-auto'>
                <img src={project1} className='rounded-lg w-56 h-80 object-cover '/>
            </div>
            </div>
            <div className='col-start-3 col-span-6 row-start-1 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Full-Stack Responsive E-commerce App</h3></div>
              <p className='w-9/12 mb-5 max-lg:w-full'><ul className='list-disc leading-10'>
                  <li>Express.js is used to create api paths and requests.</li>
                  <li>Responsive design</li>
                  <li>For login passport.js and bcrypt library is used.</li>
                  <li>PostgreSQL(relational database) database is used to store data and sql is used to retrieve and write datas.</li>
                  <li>Frontend login-products-orders pages are developed</li>
                  <li>React-redux to provide global state management</li>
                </ul> <a href='https://e-commerce-app-r9ba.onrender.com/' className=' flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/> Visit Project</a></p>
              <div className='flex justify-center items-center mb-10'>
                {allSkills.map((allSkill)=>{
                  return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-6 h-14'/>)
                })}
              </div>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div>
            <div className='col-start-3 col-span-4 row-start-2 row-span-1 flex justify-start items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-5 '>
            <div className='screen3'>
                <img src={project4} className='rounded-lg w-56 h-80 object-cover '></img>
              </div>
            </div>
            <div className='col-start-7 col-span-6 row-start-2 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Full-Stack Dashboard</h3></div>
              <p className='w-9/12 mb-5 max-lg:w-full'>
              <ul className='list-disc leading-10'>
                  <li>This project is a Full-Stack project.</li>
                  <li>This project is developed to practice Material UI component library.</li>
                  <li>Statistics are represented on graph and table based on company</li>
                  <li>Powered by Mongo DB</li>
                  <li>Responsive Design</li>
                </ul>
                <a href='https://dashboard-app-vbav.onrender.com/' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
              <div className='flex justify-center items-center mb-10'>
                {dashboardProject.map((allSkill)=>{
                  return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-8 h-14'/>)
                })}
              </div>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div>
            <div className='col-start-3 col-span-4 row-start-4 row-span-1 flex justify-start items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-5 '>
            <div className='screen'>
                <img src={project2} className='rounded-lg w-56 h-80 object-cover '></img>
              </div>
            </div>
            <div className='col-start-7 col-span-6 row-start-4 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Frontend-React Game App</h3></div>
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
                  return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-8 h-14'/>)
                })}
              </div>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div>
            <div className='col-start-7 col-span-4 row-start-3 row-span-1 flex justify-end items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-10'>
            <div className='screen2 rounded-lg'>
                <img src={project3} className='rounded-lg w-56 h-80 object-cover '></img>
              </div>
            </div>
            <div className='col-start-3 col-span-6 row-start-3 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>A Responsive Freelance Website From The Scratch - 'architectural-website'</h3></div>
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
                  return (<img src={allSkill} className='pr-5 hover:h-16 max-lg:h-8 h-14'/>)
                })}
              </div>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div>   
            {/* AI Projecs are listed */}
            <h2 className='col-start-5 col-span-4 row-start-5 row-span-1 text-4xl text-center underline font-bold text-gray-600 mt-3' id='aiprojects'>2. AI Projects</h2>
            <div className='col-start-7 col-span-4 row-start-5 row-span-1 flex justify-end items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-10'>
            <div className=''>
                <img src={project5} className='rounded-lg w-80 object-fit '></img>
              </div>
            </div>
            <div className='col-start-3 col-span-6 row-start-5 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Yusuf AI(Document Embedding)</h3></div>
              <p className='w-9/12 mb-5 max-lg:w-full'>
                <ul className='list-disc leading-7'>
                    <li>Aims to provide a convenient solution for extracting relevant information from biographical documents through a user-friendly interface.</li>
                    <li>Streamlit: Used for building interactive web applications with Python.</li>
                    <li>Python: Programming language used for the backend logic and data processing.</li>
                    <li>Langchain: Utilized for natural language processing tasks, especially in understanding biographical text.</li>
                    <li>Pinecone: Employs vector similarity search for efficient document retrieval.</li>
                    <li>OpenAI: Provides advanced natural language processing capabilities for understanding and generating text.</li>
                  </ul>
                  

                <a href='https://yusufai.streamlit.app/' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div> 
            <div className='col-start-3 col-span-4 row-start-6 row-span-1 flex justify-start items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-5 '>
            <div className=''>
                <img src={project6} className='rounded-lg w-80 object-fit '></img>
            </div>
            </div>
            <div className='col-start-7 col-span-6 row-start-6 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Dog Breed Classification</h3></div>
              <p className='w-9/12 mb-5 max-lg:w-full'>
              <ul className='list-disc leading-7'>
                  <li>The goal is to develop a model that can automatically identify the breed of a dog given an image.</li>
                  <li>Imagine you're at a cafe and see a curious pup. By taking a picture and running it through this model, you could instantly identify the breed!</li>
                  <li>The model's performance will be evaluated based on its ability to predict breed probabilities for each image in a separate test set (also containing over 10,000 images). These test images lack labels, allowing us to assess the model's generalization capability.</li>
                  <li>Since we're dealing with unstructured image data, deep learning or transfer learning techniques are well-suited for this task. The training set provides a significant amount of data (around 10,000+ images), which can be leveraged effectively by deep learning models.</li>
                </ul>
                <a href='https://github.com/yssfklc/dog-breed-classification' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div>
            <div className='col-start-7 col-span-4 row-start-7 row-span-1 flex justify-end items-center h-screen max-lg:h-auto max-lg:mt-10 max-lg:mb-10'>
            <div className=''>
                <img src={project7} className='rounded-lg w-80 object-fit '></img>
              </div>
            </div>
            <div className='col-start-3 col-span-6 row-start-7 row-span-1 flex flex-col justify-center items-start h-screen max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Bulldozer Price Prediction</h3></div>
              <p className='w-9/12 mb-5 max-lg:w-full'>
                <ul className='list-disc leading-7'>
                    <li>How well can we predict the future sale price of a bulldozer, given its characteristics and previous examples of how much similar bulldozers have been sold for?</li>
                    <li>The evaluation metric for this competition is the RSMLE (root mean squared log error) between the actual and predicted auction prices.</li>
                    <li>The goal for most regression evaluation metrics is to minimize the error. For example, our goal for this project will be to build a machine learning model which minimises RMSLE.</li>
                  </ul>
                <a href='https://github.com/yssfklc/bulldozer-price-prediction/' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div> 
            <div className='col-start-3 col-span-4 row-start-8 row-span-1 flex justify-start items-center max-lg:h-auto max-lg:mt-10 max-lg:mb-5 '>
            <div className='screen2'>
                <img src={project8} className='rounded-lg w-80 object-fit '></img>
            </div>
            </div>
            <div className='col-start-7 col-span-6 row-start-8 row-span-1 flex flex-col justify-center items-start max-lg:h-auto'>
              <div className='text-4xl mb-10 font-bold '><h3 className='w-4/5 max-lg:w-full'>Heart Disease Risk Calculator</h3></div>
              <p className='w-9/12 mb-5 max-lg:w-full'>
              <ul className='list-disc leading-7'>
                  <li>Given clinical parameters about a patient, can we predict whether or not they have heart disease?</li>
                  <li>The original data come from the Cleaveland data from the UCI Machine Learning Repository.</li>
                  <li>Reach 95% accuracy at predicting whether or not a patient has heart disease during the proof of concept</li>
                  <li>Use pandas, Matplotlib, and NumPy for data analysis and manipulation.</li>
                </ul>
                <a href='https://github.com/yssfklc/heart-disease-calculator/' className='flex items-center justify-start font-bold text-red-800'><img src={arrow} className='inline mr-2'/>Visit Project</a></p>
              
              <div><a href='#contact' className='bg-emerald-600 hover:bg-emerald-800 rounded-xl px-5 py-2 '>Contact Me</a></div>
            </div>
          </div>
        </div>
        
        
        
        {/* Footer Design */}
        <div className='col-start-1 col-span-12 row-start-10 row-span-1 '>
          <div className='grid grid-cols-12 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:h-auto max-lg:mt-10 max-lg:mb-5 rounden-lg'>
            <iframe id='chatbot' className='col-start-3 col-span-8 row-start-1 max-lg:col-start-1 max-lg:row-start-1 row-span-1 w-full h-full rounden-lg' title='chatbot' src="https://yusufai.streamlit.app/?embedded=true"/>
            <div className='col-start-3 col-span-5 row-start-2 flex justify-start items-center h-screen max-lg:col-start-1 max-lg:row-start-2 max-lg:h-auto max-lg:mt-10 max-lg:mb-5'>
              <img src={p1} className='rounded-lg'></img>
            </div>
            <div id='contact' className='col-start-8 col-span-5 row-start-2 flex justify-center items-center h-screen max-lg:col-start-1 max-lg:row-start-3 max-lg:h-auto max-lg:mb-10'>
              <div>
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
              <div>
              <a href='mailto:yssfklc@gmail.com' className='flex flex-col justify-center items-center'>
                <img src={mail} className='rounded-lg mr-10 mb-5 max-lg:h-10'/>
                <img src={arrow2} className='animate-bounce rounded-lg mr-10 self-center'/>    
              </a>
              </div>
            </div> 

          </div>
        </div>
          
        </div>
        
    </div>
  );
}

export default App;
