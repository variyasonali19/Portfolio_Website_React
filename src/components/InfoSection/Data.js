export const projectInformation = {
  id: "projects",
  btnDarkText: true,
  lightBg: false,
  lightText: true,
  onClickBtn: true,
  lightTextDesc: true,
  topLine: "some of my personal",
  routeForbtn: "projects",
  headline: "Projects",
  description:
    "Explore my personal projects that I have accomplished under minimal observations and full dedication that has helped me sharpen my programming skills.",
  buttonLabel: "Explore",
  imgStart: false,
  img: require("../../Images/svg-1.svg"), //get image from undrawn.co
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};
export const educationInformation = {
  id: "education",
  routeForbtn: "education",
  btnDarkText: false,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "about",
  headline: "Education & Certifications ",
  description:
    "I have a bachelor degree in Electronics and Communication Engineering. Also have a diploma in Software Testing.",
  buttonLabel: "Know More",
  imgStart: true, //to align left or right
  img: require("../../Images/svg-1.svg"), //get image from undrawn.co
  //undraw.co
  alt: "Car",
  dark: true,
  primary: false,
  darkText: true,
};
// contact me section
export const contactMeInformation = {
  id: "contact",
  btnDarkText: true,

  // onClickBtn: true,
  routeForbtn: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Contact Information",
  headline: "Contact Me",
  description:
    "You may contact me anytime  - as long as you don't interfere with your work.",
  buttonLabel: "Click to reveal",
  imgStart: false,
  img: require("../../Images/svg-1.svg"), //get image from undrawn.co
  //undraw.co
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};
export const aboutMeInformation = {
  id: "about",
  routeForbtn: "about",
  btnDarkText: false,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: "Want to know more about me?",
  description:
    "I am a highly motivated, result-oriented  Front-end developer looking for an opportunity that can help me grow professionally in my career.",
  buttonLabel: "Know more",
  imgStart: true,
  img: require("../../Images/svg-5.svg"), //get image from undrawn.co
  //undraw.co
  alt: "aboutMe",
  dark: true,
  primary: true,
  darkText: false,
};

export const professionalExperience = {
  id: "professionalexperience",
  routeForbtn: "professionalexperience",
  btnDarkText: false,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: "professional Experience",
  headline: "Professional Experience",
  description:
    "I am a React Front-end developer at Optimatics since December, 2020. I am looking for an opportunity that can help me grow professionally in my career.",
  buttonLabel: "Know more",
  imgStart: true,
  img: require("../../Images/experience.svg"), //get image from undrawn.co
  //undraw.co
  alt: "experience",
  dark: true,
  primary: false,
  darkText: true,
}
export const SidebarLinks = ["about", "professionalexperience", "education", "projects", "contact"]
export const AboutMeDetailInfo = {
  title: "About Me",
  detailInfo: [
    {
      firstPara: `Hi, I am Sonali Variya. I'm a React Front End Developer at Optimatics since December, 2020. I describe myself as a passionate developer who loves coding and have hands-on experience in ReactJS, React Native, AngularJS and .NET. I have understanding of modern UI and UX trends, and ability to build maintainable, scalable, and clean web solutions.`
    },
    {
      secondPara: "About my education, I have a bachelor degree in Electronics and Communication Engineering and have a diploma in Software Testing. I have worked as a manual tester for more than a year before I started programming."
    },
    {
      thirdPara: " I love creative work. I also make youtube videos in my free time. Learning new things never exhausts my mind. I believe that one should never be afraid of trying something new because life gets boring when you stay within the limits of what you already know. I always learn from my mistakes and believe in hard work because there really is no substitute for working hard. I possess a combination of skills and experiences that make me stand out from the crowd."
    },
    ]
}
