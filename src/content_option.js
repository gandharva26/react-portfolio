import Proj2 from "././assets/products/GitHub-Mark.png";
import arlekar from '././assets/products/Screen Shot 2023-01-31 at 12.40.00 AM.png'
import amaz from '././assets/products/Screen Shot 2023-01-31 at 12.51.36 AM.png'
import drows from '././assets/products/Screen Shot 2023-01-31 at 12.58.09 AM.png'
import jski from '././assets/products/jski.png'
import nyc from '././assets/products/nyc.jpeg'
import port from '././assets/products/port.png'
const logotext = "GD";
const meta = {
    title: "Gandharva Deshpande",
    description: "I’m Gandharva, a Full stack devloper passionate about building web applications",
};

const introdata = {
    title: "I’m Gandharva",
    animated: {
        first: "I love building web applications",
        second: "I develop websites for clients",
        third: "I research on JSON Data and high performance analytics",
    },
    description: "I am a Full stack devloper passionate about building web based applications and helping clients empower the tech side of their bussiness",
    your_img_url: "../assets/images/WhatsApp Image 2022-12-30 at 7.38.04 PM.jpeg",
};

const dataabout = {
    title: "About my self",
    aboutme: "A Software Engineer with 4+ years of experience building scalable software. I received my Master's degree in Computer Science from the University of California, Riverside under the supervision of Dr. Zhijia Zhao. The main focus of my Master's research was the parallelization of semi-structured data querying (eg: JSON). As a part of my Master's thesis, I developed optimized Javascript solutions (npm library and VSCode Extension) for JSONSki which is a streaming parser originally written in C++ used for querying JSON data.",
};
const worktimeline = [{
        jobtitle: "Masters of Science, Computer Science",
        where: "University of California",
        date: "2023",
    },
    {
        jobtitle: "Bachelors of Engineering, Computer Engineering",
        where: "University of Mumbai",
        date: "2020",
    },
   
  
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Node.js",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I help you choose the right theme for your website and customize it end-to-end.",
    },
    {
        title: "Web Application Development",
        description: "I can build the website that YOU want.",
    },
    {
        title: "Build Social Media Presence",
        description: "I help you bolster your social media game with my strategies and expertise.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];


export const ProjectList = [
    {
        name:"Health-Care Website",
        image:arlekar,
        skills:"Developed a health care website for a Client to help patients book appointments faster.",
        link:'https://www.drarlekarswellnessclinic.com'
    },

    {
      name: "JsonSki",
      image: jski,
      link:'https://www.npmjs.com/package/jsonski',
      skills: "JsonSki is a fast JSON parsing library built using C++ and Javascript",
   
    },
  
 
    {
      name: "Drowsiness Detection",
      image: drows,
      skills: "A drowsy driver is detected in real-time based on Eye distance and Yawning over a period of time",
      link:'https://github.com/gandharva26/Driver-Drowsiness-Detection'
    },
  
  
  
];  

const contactConfig = {
    YOUR_EMAIL: "gandharva.deshpande@gmail.com",
    YOUR_FONE: "(805)703-8272",
    YOUR_SERVICE_ID: "service_o2itzkj",
    YOUR_TEMPLATE_ID: "template_32rp0uw",
    YOUR_USER_ID: "IUIqoXF0H3GfuRuhP",
};

const socialprofils = {
    github: "https://github.com/gandharva26",
    linkedin: "https://linkedin.com/in/gandharva-deshpande",
 
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};