import about from '../assets/image/about.png'
import aboutphone from '../assets/image/aboutphone.jpg'

//Top Icon
import VoiceIcon from '../assets/image/Icons/voice.png'
import WorkIcon from '../assets/image/Icons/work.png'
import ProjectIcon from '../assets/image/Icons/projects.png'
import ArtsIcon from '../assets/image/Icons/art.png'
import ContactIcon from '../assets/image/Icons/contact.png'


//skillsicon 
import htmlIcon from '../assets/image/skillicon/html.png';
import cssIcon from '../assets/image/skillicon/css.png';
import threeIcon from '../assets/image/skillicon/three.png';
import figmaIcon from '../assets/image/skillicon/figma.png';
import nodeIcon from '../assets/image/skillicon/node.png';
import reactIcon from '../assets/image/skillicon/react.png';
import socketIcon from '../assets/image/skillicon/socket.png';
import pythonIcon from '../assets/image/skillicon/python.png';
import jsIcon from '../assets/image/skillicon/js.png';

//company Logo
import kore from '../assets/image/Icons/koreAi.png'
import coence from '../assets/image/Icons/coence.png'
import cheminicon from '../assets/image/Icons/chemin.png'
import ccpc from '../assets/image/Icons/ccpc.png'

//SocialMedia
import linkdin from '../assets/image/Icons/linkdin.svg'
import insta from '../assets/image/Icons/insta.svg'
import github from '../assets/image/Icons/github.svg'



//projects
import drc from '../assets/image/Projects/drc.png'
import aids from '../assets/image/Projects/aids.png'
import ume from '../assets/image/Projects/ume.png'
import chemin from '../assets/image/Projects/chemin.png'
import deepui from '../assets/image/Projects/deepui.png'
import walmart from '../assets/image/Projects/walmart.png'
import threedmap from '../assets/image/Projects/3dmap.png'
import chatroom from '../assets/image/Projects/chatroom.png'
import drcml from '../assets/image/Projects/drcml.png'
import haunt from '../assets/image/Projects/haunt.png'
import form from '../assets/image/Projects/form.png'






//projects video
// import drcvideo from '../assets/image/Projects/video/drc.mp4'
// import aidsvideo from '../assets/image/Projects/video/aids.mp4'
// import umevideo from '../assets/image/Projects/video/ume.mp4'
// import cheminvideo from '../assets/image/Projects/video/chemin.mp4'
// import deepuivideo from '../assets/image/Projects/video/deepui.mp4'
// import walmartvideo from '../assets/image/Projects/video/walmart.mp4'
// import threedmapvideo from '../assets/image/Projects/video/3dmap.mp4'
// import chatroomvideo from '../assets/image/Projects/video/chatroom.mp4'
// import drcmlvideo from '../assets/image/Projects/video/drcml.mp4'
// import hauntvideo from '../assets/image/Projects/video/haunt.mp4'
// import formvideo from '../assets/image/Projects/video/form.mp4'











export const Constants = {
    "Navbar": [
        {
            "Name": "Home",
            "offset": 30
        },
        {
            "Name": "About",
            "offset": 110
        },
        {
            "Name": "Experience",
            "offset": 110
        },
        {
            "Name": "Projects",
            "offset": 150
        },
        {
            "Name": "Digital art",
            "offset": 110
        },
        {
            "Name": "Contact",
            "offset": 110
        }
    ],
    "LineOfWork": [
        {
            "width": "150px",
            "height": "40px",
            "Phonewidth": "100px",
            "Phoneheight": "20px",
            "CompanyIcon": kore,
            "Date": "2023 - current",
            "Position": "Associate Engineer",
            "Info": "From generative AI applications to RAG/LLM-based search to optimizing experiences, Kore.ai gives you the platform, no-code tools, and solutions to do AI right."
        },
        {
            "width": "70px",
            "height": "70px",
            "Phonewidth": "40px",
            "Phoneheight": "40px",
            "CompanyIcon": coence,
            "Date": "2023",
            "Position": "Design Lead",
            "Info": "Coence isn't merely a platform it's the blueprint for a skill-centric future, reshaping professional growth for a New India."
        },
        {
            "width": "120px",
            "height": "70px",
            "Phonewidth": "80px",
            "Phoneheight": "40px",
            "CompanyIcon": cheminicon,
            "Date": "2023",
            "Position": "UI/UX Designer and Backend Developer Intern",
            "Info": "Chemin is an electronics-based company that builds electronic components."
        },
        {
            "width": "120px",
            "height": "70px",
            "Phonewidth": "80px",
            "Phoneheight": "40px",
            "CompanyIcon": ccpc,
            "Date": "2023",
            "Position": "AI&ML Intern",
            "Info": "CloudCounselage is a startup that supports students in growing their careers through our excellent mentorship."
        }
    ],
    "Projets": [
        {
            "Thumbnail": drc,
            "Tech": [htmlIcon, cssIcon, jsIcon],
            "Live": "https://hari-guptha.github.io/DRCSTUDIO/",
            // "video": drcvideo,
            "content": "DRC is an innovative platform for frontend developers, offering a vast library of modern tech stacks and free, high-quality website templates. With DRC, developers can instantly download web components such as navbars, buttons, and sliders, speeding up the development process. The platform is built using HTML, CSS, and JavaScript."
        },
        {
            "Thumbnail": ume,
            "Live": "https://umesoftwaresolutions.com/",
            "Tech": [reactIcon],
            // "video": umevideo,
            "content": "UME is a dynamic software solutions company specializing in bespoke applications for businesses across industries. I created this landing page to highlight UME’s technological innovation and expertise. Built with React.js, the design showcases the company’s forward-thinking approach."
        },
        {
            "Thumbnail": chemin,
            // "Live":"",
            "Tech": [figmaIcon],
            // "video": cheminvideo,
            "content": "Chemin, a leader in electrical innovation, is developing a state-of-the-art home automation app. I had the privilege of designing the UI/UX for this groundbreaking app, focusing on user experience and aesthetic appeal. This project was designed using Figma and Adobe Illustrator."
        },
        {
            "Thumbnail": deepui,
            "Tech": [reactIcon, nodeIcon, pythonIcon, socketIcon],
            // "video": deepuivideo,
            "content": "DeepUI is an experimental project that merges AI and user interaction. The interface adjusts dynamically to users’ facial expressions, offering a truly personalized experience. I developed the system using React.js, Socket.io, Node.js, Flask, and Machine Learning technologies."
        },
        {
            "Thumbnail": chatroom,
            "Tech": [htmlIcon, cssIcon, jsIcon, nodeIcon, socketIcon],
            // "video": chatroomvideo,
            "content": "DRC Chatroom is a live, real-time communication platform where users can connect with friends or meet new people. Built using HTML, CSS, JavaScript, Node.js, Socket.io, and Passport.js, it provides a seamless and engaging chat experience."
        },
        {
            "Thumbnail": drcml,
            "Tech": [htmlIcon, cssIcon, jsIcon, pythonIcon],
            // "video": drcmlvideo,
            "content": "DRCML is a sophisticated platform that integrates multiple machine learning models, enabling users to select models and make accurate predictions. This project combines HTML, CSS, JavaScript, Flask, and advanced machine learning techniques to offer an intuitive and powerful experience."
        },
        {
            "Thumbnail": walmart,
            "Tech": [reactIcon, threeIcon, nodeIcon, socketIcon],
            // "video": walmartvideo,
            "content": "Walmart is an interactive, gamified shopping experience, allowing users to explore a 3D mall environment and shop in real-time. This multiplayer experience was built using Three.js, React Three Fiber, Socket.io, React, and Node.js, pushing the boundaries of immersive e-commerce."
        },
        {
            "Thumbnail": threedmap,
            "Live": "https://3-d-port-folio-theta.vercel.app/",
            "Tech": [threeIcon, htmlIcon, cssIcon, jsIcon],
            // "video": threedmapvideo,
            "content": "3D Map showcases my ability to create custom 3D models and integrate them into a highly immersive environment. This project, built using Three.js, demonstrates my proficiency in crafting interactive, realistic virtual spaces."
        },
        {
            "Thumbnail": haunt,
            "Live": "https://grave-xi.vercel.app/",
            "Tech": [threeIcon, htmlIcon, cssIcon, jsIcon],
            // "video": hauntvideo,
            "content": "Haunted House is one of the key projects in my learning journey with Three.js and React Three Fiber. It was a fascinating exercise where all the models were crafted entirely through pure Three.js code, showcasing my skills in 3D development."
        },
        {
            "Thumbnail": form,
            "Tech": [htmlIcon, cssIcon, jsIcon, pythonIcon],
            //  "video": formvideo,
            "content": "Form Scrutinize is one of my earlier, yet significant projects, focused on automating the process of form filtering. Users can upload form images into the system, which then filters and processes the forms based on predefined conditions, streamlining data extraction and analysis."
        },
        {
            "Thumbnail": aids,
            "Tech": [htmlIcon, cssIcon, jsIcon, nodeIcon],
            // "video": aidsvideo,
            "content": "AIDS is our department's comprehensive online platform, designed to support students by offering downloadable study materials, lesson videos, and access to clubs and competitions. This project was developed using HTML, CSS, JavaScript, and Node.js."
        }
    ],
    "SocialMedias": [
        {
            "Name": "GitHub",
            "Icon": github,
            "Link": "https://github.com/Hari-guptha"
        },
        {
            "Name": "LinkedIn",
            "Icon": linkdin,
            "Link": "https://www.linkedin.com/in/hari-guptha-bb6a29208/"
        },
        {
            "Name": "Instagram",
            "Icon": insta,
            "Link": "https://www.instagram.com/half_blood_titan/"
        }
    ]
}



export const ImageImports = {
    "aboutImg": about,
    "aboutphoneImg": aboutphone,
    "voiceIcon": VoiceIcon,
    "workIcon": WorkIcon,
    "ProjectIcon": ProjectIcon,
    "ArtsIcon": ArtsIcon,
    "ContactIcon": ContactIcon
}