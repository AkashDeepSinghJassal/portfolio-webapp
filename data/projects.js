const projects = [
  {
    name: "AI Challan Backend",
    description:
      "Restful services including APIs and websockets of Challan AI for generating violations, monitoring junction activities, managing signal controls, and providing real-time notifications on violation detections",
    pic: "/AI_Challan.png",
    tech: ["Springboot", "MySQL", "Elastic Search"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://www.beltech.ai/#/product",
      },
    ],
  },
  {
    name: "Traffic Management Master Dashboard",
    description:
      `Control traffic signals remotely.
      View of all traffic violations.
      Traffic and violation analytics.
      Customisable user authentication.`,
    pic: "/AIDashboard.png",
    tech: ["Node.js", "PostgreSQL", "Kafka", "ETL"],
    links: [

    ],
  },
  {
    name: "Tourism AI",
    description:
      "Suite of restful APIs including QR permit issuance, ticket purchasing for individual and group sightseeing, and integrated identity card OCR and face recognition models for quick check-in at destinations.",
    pic: "/Tourism_ai_img.png",
    tech: ["Java", "Springboot", "MySQL", "Mongo DB"],
    links: [
      {
        label: "Website",
        icon: "link",
        url: "https://www.beltech.ai/#/product#tourismplatform",
      }
    ],
  },
];

export const extraProjects = [
  {
    name: "Quikr Jobs",
    type: "Work",
    description:
      "Deployed app on the Play Store, overseeing app signing keys setup, backend codec app signature registration, and analyt- ics integration, resulting in enhanced app authentication and improved user experience.",
    tech: ["Android Studio", "Java"],
    links: [
      {
        label: "Play store",
        icon: "link",
        url: "https://play.google.com/store/apps/details?id=com.quikr.job&hl=en_IN",
      },
    ],
  },
  {
    name: "Commonfloor",
    type: "Work",
    description:
      "Implemented and integrated search V2 API for faster property records search. Resovlved bugs and maintained android SDK and libraries version.",
    tech: ["Java", "Play framework", "Android Studio"],
    links: [
      {
        label: "Play store",
        icon: "link",
        url: "https://play.google.com/store/apps/details?id=com.commonfloor&hl=en_IN",
      },
    ],
  },
  {
    name: "Hospital Management System",
    type: "University",
    description: "Streamlining the data management and workflow of hospitals.",
    tech: ["Java", "MySQL", "FXML"],
    links: [
      {
        label: "Github",
        icon: "github",
        url: "https://github.com/AkashDeepSinghJassal/HospitalMS",
      },
    ],
  },
  {
    name: "Online Test App",
    type: "Work",
    description:
      "Online examination platform,leveraging Role-Based Access Control with system security and and surveillance mechanisms build using TensorFlow",
    tech: ["Django", "MySQL", "Python"],
    links: [
      
    ],
  }
];

export default projects;
