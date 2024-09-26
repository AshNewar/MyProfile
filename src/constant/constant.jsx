import { block, design, development, pro1, pro2, pro3 } from "../assets";

const link = "https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/components/Works.jsx";


//Project Descriptions

const wrk = "Built a scalable application deployment pipeline using Kubernetes and Docker, improving deployment speed by 35%. Automated CI/CD pipelines with Jenkins and Slack webhooks. Used Microservices Architecture with MongoDB, PostgreSQL, and MySQL. Integrated ElasticSearch for log management and APM for performance monitoring.";
  
const scalableChatService = "Developed a real-time chat service handling over 5,000+ interactions daily using Redis PUB/SUB and Kafka. Reduced latency by 60% and enhanced throughput by 45%, with Prisma for database management.";
  
const justPostIt = "Created a Social Media App with real-time chat, push notifications using Socket.IO, and asynchronous communication with RabbitMQ. Leveraged Redux Toolkit for state management, increasing session duration by 30%.";
  
const websiteDeployer = "Designed an AWS-powered tool that deploys websites using Docker on ECS, with S3 for file storage and Redis PUB-SUB for real-time log access, improving log monitoring efficiency by 50%.";
  
const interIITTechMeet = "Developed a decentralized futures trading app using Aptos Blockchain, reducing transaction fees by 45% through parallel execution mechanisms. Integrated Kafka for data visualization and FastAPI for backend operations.";

const description = "NFT stands for Non-Fungible Token.It's a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. NFTs have gained significant attention and popularity in various creative industries, such as art, music, gaming, and collectibles. Here are some key points to understand about NFTs";

const NavItems = ["Home", "About", "Skills", "Services", "Projects", "Contact"];
const Data = [{ title: "Experience", details: ["Web Executive , Student Placement Office IIT Kanpur"] },
{ title: "Work", details: ["20+ Projects","Intern At Hophmove Private Limited"] },
{ title: "Education", details: ["BS Economics-IIT Kanpur", "Schooling-JNV Sonitpur"] }]

const Services = [{ title: "Web Development", icon: development }, { title: "Ui Design", icon: design }, { title: "BlockChain Development", icon: block }];

const Frontend = ["ReactJS", "NextJS", "JavaScript", "ReduxToolKit", "MaterialUI", "BootStrap", "FramerMotion", "TailwindCSS"];
const Backend = ["NodeJS", "Java", "Databases", "AWS", "GIT","GraphQL" ,"GO" ,"FastAPI"];
const Other = ["Blockchain", "Solidity","Aptos" ,"Figma", "C Prog.","Docker", "Kubernetes", "Jenkins"];

const Projects = [{ title: "JustPostIt", description: justPostIt, link: link, src: pro1 },
{ title: "E-Commerce Shop", description: description, link: link, src: pro2 },
{ title: "BlockChain Voting System", description: description, link: link, src: "./vote.png" },{
title: "Wrk - A Freelancing Platform", description: wrk, link: link, src: "./Wrk.webp" },
{ title: "Scalable Chat Service", description: scalableChatService, link: link, src: "./chat.png" },
{ title: "Cloud Code Editor", description: description, link: link, src: "./code-editor.png" },
{ title: "Own Website Deployer", description: websiteDeployer, link: link, src: pro3 },
{ title: "Chat With Pdf AI", description: description, link: link, src: "./ai.webp" },
{ title: "OnChain Futures Trading", description: interIITTechMeet, link: link, src: pro2 },

]



export {  Data, Frontend, Backend, Other, Services, Projects, NavItems };