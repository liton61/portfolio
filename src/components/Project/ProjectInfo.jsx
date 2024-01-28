/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import '../Project/ProjectInfo.css'
import gym from '../../assets/gym.png';
import restaurant from '../../assets/restaurant.png';
import jobs from '../../assets/jobs.png';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ProjectInfo = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);




  return (
    <div className='bg-gray-900 text-white lg:px-0 px-5 pb-10'>
      <h2 className='text-4xl font-bold text-center border-b-4 w-60 mx-auto border-green-400 pt-10 pb-2'>
        Projects
      </h2>
      <div className='lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-14'>
        <div className='image-wrap shadow-lg shadow-[#040c16]' data-aos="fade-up" data-aos-duration="3000">
          <p className='py-2 text-xl text-center'>Vector Gym</p>
          <a href="">
            <img src={gym} alt="" />

          </a>
        </div>
        <div data-aos="zoom-in-up" className="shadow-lg shadow-[#040c16] p-5 h-[400px] overflow-y-auto">
          <h3 className="text-2xl font-semibold">Features & Technologies</h3>
          <p className='text-justify pt-2'>This single-page application (SPA) is built using the MERN stack, comprising MongoDB, Express.js, React Js, and Node.js. Designed specifically for managing gym admissions online, this application provides a seamless user experience for individuals seeking gym memberships and administrators, trainers, and members to manage their respective dashboards efficiently.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>User Authentication : </span> Users can register and log in securely to access their personalized dashboards. Authentication is implemented using JWT (JSON Web Tokens) for enhanced security.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>Admin Dashboard : </span> Administrators have access to a comprehensive dashboard where they can manage various aspects of the gym admission system. Admins can add, edit, or remove gym services.They can view and manage user accounts, including approving or rejecting membership requests and updating member statuses.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>Trainer Dashboard : </span> Trainers have their dedicated dashboard to manage gym activities and schedules.They can view assigned members, their training programs, and progress.Trainers can schedule sessions, update member workouts.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>Member Dashboard : </span> Members can explore available gym services and choose their desired membership plans.Members can book sessions with trainers, view their personalized workout plans.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>Responsive Design: </span> The application is designed to be responsive, ensuring optimal user experience across various devices, including desktops, tablets, and smartphones.Tailwind CSS is utilized to create a visually appealing and intuitive interface that adapts seamlessly to different screen sizes.</p>
        </div>
      </div>
      <div className="lg:w-3/4 mx-auto grid grid-cols-3 py-5 text-center items-center text-pink-500 shadow-lg shadow-[#040c16]">
        <a href="https://vector-gym.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/liton61/vector-gym-client-side" target="_blank" rel="noopener noreferrer">Client Side</a>
        <a href="https://github.com/liton61/vector-gym-server-side" target="_blank" rel="noopener noreferrer">Server Side</a>
      </div>
      <div className='lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-14'>
        <div className='image-wrap shadow-lg shadow-[#040c16]' data-aos="fade-up" data-aos-duration="3000">
          <p className='py-2 text-xl text-center'>Bistro Boss</p>
          <a href="">
            <img src={restaurant} alt="" />

          </a>
        </div>
        <div data-aos="zoom-in-up" className="shadow-lg shadow-[#040c16] p-5 h-[400px] overflow-y-auto">
          <p className="text-2xl font-semibold">Features & Technology</p>
          <p className='text-justify pt-2'>This single-page application (SPA) is built using the MERN stack, which comprises MongoDB, Express.js, React.js, and Node.js. Tailored specifically for online food ordering, this application provides a seamless user experience for individuals to explore various food options, place orders, and manage their orders efficiently. With distinct dashboards for administrators and users, the application offers tailored functionalities to cater to the needs of both parties.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>User Authentication : </span> Users are required to register and log in to access the platform securely.Authentication mechanisms ensure data privacy and secure access to user accounts.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>Admin Dashboard : </span> Administrators have access to an intuitive dashboard where they can manage various aspects of the food ordering platform. Admins can add new food items to the menu, update existing items.They can view and manage user orders.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>User Dashboard : </span> The user dashboard provides a personalized interface for users to browse through available food items, place orders, and manage their order.Users can view their order history.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-medium'>Responsive Design: </span> The application is designed to be responsive, ensuring optimal user experience across various devices, including desktops, tablets, and smartphones.Tailwind CSS is utilized to create a visually appealing and intuitive interface that adapts seamlessly to different screen sizes.</p>
        </div>
      </div>
      <div className="lg:w-3/4 mx-auto grid grid-cols-3 py-5 text-center items-center text-pink-500 shadow-lg shadow-[#040c16]">
        <a href="https://restaurant-b565b.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/liton61/restaurant-client-side" target="_blank" rel="noopener noreferrer">Client Side</a>
        <a href="https://github.com/liton61/restaurant-server-side" target="_blank" rel="noopener noreferrer">Server Side</a>
      </div>
      <div className='lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-14'>
        <div className='image-wrap shadow-lg shadow-[#040c16]' data-aos="fade-up" data-aos-duration="3000">
          <p className='py-2 text-xl text-center'>Flex Jobs</p>
          <a href="">
            <img src={jobs} alt="" />

          </a>
        </div>
        <div data-aos="zoom-in-up" className="shadow-lg shadow-[#040c16] p-5 h-[400px] overflow-y-auto">
          <p className="text-2xl font-semibold">Features & Technologies</p>
          <p className='text-justify pt-2'>This online job marketplace web application serves as a platform connecting job seekers with employers, facilitating the process of job application and management of job listings. Built with a focus on user-centric design and efficient management, the application offers a seamless experience for both job seekers and employers.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-semibold'>Job Listings : </span> Employers can create, manage, and update job listings, specifying details such as job title, description, requirements, and application deadlines.
            Job listings are categorized based on industry, location, and job type for easy navigation by job seekers.</p>
          <p className='text-justify pt-2'><span className='text-green-400 font-semibold'>Bid Requests : </span> Job seekers can submit bid requests for specific job listings, expressing their interest in the position and outlining their qualifications.
            Employers have visibility into all bid requests and can review each request to evaluate candidate suitability.</p>
        </div>
      </div>
      <div className="lg:w-3/4 mx-auto grid grid-cols-3 py-5 text-center items-center text-pink-500 shadow-lg shadow-[#040c16]">
        <a href="https://flexjobs-964fa.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href="https://github.com/liton61/flexJobs-client-side" target="_blank" rel="noopener noreferrer">Client Side</a>
        <a href="https://github.com/liton61/flexJobs-server-side" target="_blank" rel="noopener noreferrer">Server Side</a>
      </div>
    </div>
  );
};

export default ProjectInfo;