import { Project } from '../types';
import JourneyGeniusImg from '../assets/JourneyGenius.png';
import NomadPadsImg from '../assets/NomadPads.png';
import RainyCityImg from '../assets/RainyCity.png';
import GptImg from '../assets/gpt2.png';
import PreanaImg from '../assets/Preana.png';
export const projects: Project[] = [
  {
    title: 'Journey Genius',
    description:
      'Fully responsive web application utilizing React for the front end and Node.js with Express for the back end. Integrated the Priceline API to enable users to search for flights effortlessly. Additionally, incorporated an AI chatbot powered by OpenAI to assist users in vacation planning. The application seamlessly links to Google Flights for booking. ',
    link: 'https://journey-genius.vercel.app/',
    githubLink: 'https://github.com/jmacd87/JourneyGenius',
    image: JourneyGeniusImg,
  },
  {
    title: 'Nomad Pads',
    description:
      'Full stack property rental app that uses Next.js and React for a fast, SEO-friendly UI, Next-Auth for secure user management, and Mongoose with MongoDB for robust data storage. It features interactive maps with Mapbox GL and image optimization via Cloudinary, all styled with Tailwind CSS for a modern, responsive design.',
    link: 'https://nomad-pads.vercel.app/',
    githubLink: 'https://github.com/jmacd87/NomadPads',
    image: NomadPadsImg,
  },
  {
    title: 'Rainy City Blog',
    description:
      'Web blog that features an Express/Mongoose backend that connects to a MongoDB database to efficiently fetch and display blog posts. The dynamic frontend, built with React and TypeScript, delivers a modern, responsive user experience, creating a powerful full stack solution for seamless content management and browsing.',
    link: 'https://rainycityblog.vercel.app/',
    githubLink: 'https://github.com/jmacd87/RainyCityBlog',
    image: RainyCityImg,
  },
  {
    title: 'Chat GPT Website',
    description:
      'Built with Vanilla Javascript and css from a figma file and populated with content from Chat GPT.',
    link: 'https://mygpt3.netlify.app',
    image: GptImg,
  },
  {
    title: 'Healthcare Dashboard',
    description:
      'Front end of a customer dashboard where users can manage user information, coverage, and members. Built with React, Material UI, ContextAPI',
    link: 'https://nomad-pads.vercel.app/',
    image: PreanaImg,
  },
  // {
  //   title: 'React Carousel',
  //   description:
  //     '3d Carousel built for React that allows users to dynamically place cards in a modern carousel.',
  //   link: '#',
  //   image: RainyCityImg,
  // },
];
