import { block, design, development, pro1, pro2, pro3 } from "../assets";
const link = "https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/components/Works.jsx";
const description = "NFT stands for Non-Fungible Token.It's a type of digital asset that represents ownership or proof of authenticity of a unique item or piece of content using blockchain technology. NFTs have gained significant attention and popularity in various creative industries, such as art, music, gaming, and collectibles. Here are some key points to understand about NFTs";
const HomeComment = "I’m a web developer Always in serch of woekbheevvvvvvvcs bdhbv bhdvcgdvc ccccvcbc bchbhcw chbchcc cbbchbc chcbecb ecbe.";
const NavItems = ["Home", "About", "Skills", "Services", "Projects", "Contact"];
const Data = [{ title: "Experience", details: ["Web Executive , Student Placement Office IIT Kanpur"] },
{ title: "Work", details: ["20+ Projects","Intern At Hophmove Private Limited"] },
{ title: "Education", details: ["BS Economics-IIT Kanpur", "Schooling-JNV Sonitpur"] }]

const Services = [{ title: "Web Development", icon: development }, { title: "Ui Design", icon: design }, { title: "BlockChain Development", icon: block }];

const Frontend = ["ReactJS", "NextJS", "JavaScript", "Redux", "MaterialUI", "BootStrap", "HTML", "CSS"];
const Backend = ["NodeJS", "ExpressJS", "Java", "API", "AWS", "MongoDB", "GIT", "GO"];
const Other = ["Blockchain", "Solidity", "Figma", "C Prog."];
const Projects = [{ title: "Social Media", description: description, link: link, src: pro1 },
{ title: "E-Commerce Shop", description: description, link: link, src: pro2 },
{ title: "Nft-Market", description: description, link: link, src: pro3 },{
title: "Social Media", description: description, link: link, src: pro1 },
{ title: "E-Commerce Shop", description: description, link: link, src: pro2 },
{ title: "Nft-Market", description: description, link: link, src: pro3 }]



export { HomeComment, Data, Frontend, Backend, Other, Services, Projects, NavItems };