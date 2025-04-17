import selecktedMain from "../../public/images/projects/seleckted/Thumbnail.png"  
import seleckted1 from "../../public/images/projects/seleckted/1.png"
import seleckted2 from "../../public/images/projects/seleckted/2.png"
import capstoneMain from "../../public/images/projects/capstone/React App · 5.43am · 04-02 (1).jpeg"
import capstone2 from "../../public/images/projects/capstone/Screenshot 2024-10-24 at 1.03.42 am.png"
import capstone3 from "../../public/images/projects/capstone/React App · 4.28pm · 04-08 (1).jpeg"
import NoteyMain from "../../public/images/projects/notey/Notey.jpeg"
import Notey2 from "../../public/images/projects/notey/Screenshot 2024-10-24 at 12.53.01 am.png"
import Notey3 from "../../public/images/projects/notey/Screenshot 2024-10-24 at 12.53.10 am.png"
import SlidoMain from "../../public/images/projects/slido/React App · 1.16am · 10-24.jpeg"
import Slido2 from "../../public/images/projects/slido/React App · 1.19am · 10-24.jpeg"
import dialogSumMain from "../../public/images/projects/dialogsumm/Screenshot 2024-10-24 at 1.23.21 am.png"
import dialogSum2 from "../../public/images/projects/dialogsumm/Screenshot 2024-10-24 at 1.23.33 am.png"
import dialogSum3 from "../../public/images/projects/dialogsumm/Screenshot 2024-10-24 at 1.23.48 am.png"
import dcssMain from "../../public/images/projects/dcss/Dashboard (1).png"
import dcss2 from "../../public/images/projects/dcss/Knife Detection.png"
import dcss3 from "../../public/images/projects/dcss/Distributed Surveillance System.png"
export const products = [
  {
    href: "https://www.seleckted.com/",
    title: "Seleckted - Smart Rejection & Resume Review Tool for Recruiters",
    description:
      "Seleckted (Stage 1 MVP) is a lightweight recruiter-facing AI platform built to automate resume screening and generate personalized rejection feedback using Agentic RAG workflows.",
    thumbnail: selecktedMain, // Replace with your main thumbnail image
    images: [seleckted1, selecktedMain, seleckted2], // Replace with your actual image imports
    stack: ["Next.js", "FastAPI", "Tailwind", "ShadCN", "LangChain", "OpenAI"],
    slug: "seleckted",
    content: (
      <div>
        <p>
          <strong>Seleckted (Stage 1 MVP)</strong> is a recruiter-facing platform built to streamline resume evaluation and improve applicant communication through AI-generated, personalized rejection feedback. It leverages LLM-powered RAG workflows to analyze resumes against job descriptions and selected candidates, helping recruiters save time while offering transparency to applicants.
        </p>
        <p>
          <strong>Core Features:</strong>
          <ul className="list-disc list-inside">
            <li>Create detailed job posts with roles, responsibilities, and key qualifications.</li>
            <li>Upload 10–15 resumes per job, with parsed highlights showing match insights per candidate.</li>
            <li>Shortlist candidates for next-stage consideration.</li>
            <li>Automatically generate rejection reasons based on RAG (job + selected candidate comparison).</li>
            <li>Select from pre-written rejection templates or write custom messages for AI to refine.</li>
          </ul>
        </p>
        <p>
          <strong>Why It Matters:</strong> Recruiters often lack the time to write meaningful rejections, leaving applicants in the dark. Seleckted bridges that gap by offering AI-powered, time-saving communication tools while improving candidate experience through clarity.
        </p>
        <p>
          <strong>Tech Highlights:</strong> Built using Next.js with Tailwind and ShadCN on the frontend, and FastAPI for the backend. Resume data is parsed and processed using LangChain with OpenAI integration. Authentication and file storage are currently local, with plans to scale to Firebase and AWS S3. Hosted on Vercel for rapid iteration and deployment.
        </p>
        <p>
          This Stage 1 MVP focuses on key recruiter tasks while showcasing the power of LLMs and RAG for workflow automation in hiring pipelines.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/pratyush-okay/Easy-Parking",
    title: "Easy Parking",
    description:
      "A car parking rental application for my Capstone project of Masters of Information and Technology @ UNSW",
    thumbnail: capstoneMain,
    images: [ capstone2, capstoneMain, capstone3],
    stack: ["ReactJS", "Django", "MaterialUI", "MYSQL", "Figma"],
    slug: "easyparking",
    content: (
      <div>
        <p>
        The AnySpace Car Space Renting Management System is a web-based platform developed to streamline the process of renting and managing parking spaces. Built using the Django framework for the backend and React for the frontend, the system supports a robust architecture that integrates user roles such as administrators, providers, and consumers, each with specific functionalities. Providers can create parking listings, set pricing models (hourly, daily, monthly), and manage bookings, while consumers can search for, book, and pay for parking spots using real-time availability features.{" "}
        </p>
        <p>
        Key components include a MySQL-backed database that stores user profiles, car details, parking listings, transactions, and reviews. The system integrates external APIs such as LocationIQ for geolocation services and MaplibreJS for map rendering, enabling precise location selection and visualization. For enhanced performance and interactivity, real-time booking updates are managed via RESTful APIs. Payments are securely processed through integrated payment gateways, ensuring safe financial transactions between consumers and providers.
        </p>{" "}
        <p>
        The platform leverages Agile development methodologies and Jira for task tracking, sprints, and team collaboration. The system also incorporates modular development techniques, with reusable API call functions (ApiCallGet, ApiCallPost, etc.) to streamline communication between the backend and frontend. Docker is used for containerized deployments, ensuring consistency across development environments. The platform’s design is optimized for scalability, enabling seamless integration of additional features such as advanced analytics, third-party integrations, and extended user role management.</p>{" "}
        <p>
        Through the combination of technologies like Django, React, Docker, MySQL, and various third-party services, AnySpace aims to improve parking availability and efficiency, enhancing urban mobility while providing a user-friendly interface and secure platform for managing parking space rentals.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/coookie89/Notey",
    title: "Notey",
    description:
      "A simplication tool for your slides / notes to help you learn better",
    thumbnail: NoteyMain,
    images: [NoteyMain, Notey2, Notey3],
    stack: ["ReactJS", "BuilShip", "Groq"],
    slug: "notey",
    content: (
      <div>
        <p>
        Notey is a React.js-based system designed to help users learn unorganized notes more efficiently by generating mind maps that facilitate better understanding and retention. Utilizing the no-code backend system Buildship, Notey enables users to seamlessly transform disorganized content into a structured and visually intuitive format. The system leverages mind maps to break down complex information, offering an enhanced learning experience that promotes clarity and focus, making it easier for users to study and absorb material effectively.
</p>
      </div>
    ),
  },
  {
    href: "https://github.com/pratyush-okay/PPT-Designer",
    title: "Slido",
    description:
      "Developed the frontend for a PPT designer like Canva using React.",
    thumbnail: SlidoMain,
    images: [SlidoMain, Slido2],
    stack: ["ReactJS", "NodeJS", "Enzyme"],
    slug: "slido",
    content: (
      <div>
        <p>
        Designed and implemented a scalable frontend architecture using React, converting over 10 key requirements from Swagger and GitLab documentation into functional, user-centric components. This effort enhanced user accessibility to local resources. Additionally, developed and executed over two UI tests using Enzyme, ensuring the reliability and performance of the Minimum Viable Product (MVP) for presentation. Comprehensive documentation accompanied the process to optimize future development and testing workflows, facilitating smoother project collaboration and maintenance.{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/dipankarsrirag/Dialogue-Summarisation",
    title: "Abstractive Dialogue and Text Summarisation",
    description:
      "A comprehensive study comparing effectiveness of static versus dynamic, context-aware embeddings in dialogue summarization.",
    thumbnail: dialogSumMain,
    images: [dialogSumMain, dialogSum2, dialogSum3],
    stack: ["Python","NLP"],
    slug: "dialoguesummarisation",
    content: (
      <div>
        <p>
        This research conducted a comparative analysis of abstractive dialogue summarization techniques in Natural Language Processing (NLP). It contrasted the performance of a custom Seq2Seq Encoder-Decoder model, which employed static embeddings, against advanced transformer-based architectures like BART (Bidirectional Auto-Regressive Transformers) and T5 (Text-to-Text Transfer Transformer), both of which utilized dynamic, context-aware embeddings. The primary objective was to explore how different embedding technologies influenced the accuracy and quality of generated dialogue summaries. The results revealed that the custom Seq2Seq model was limited in its ability to capture dialogue subtleties due to the static nature of its embeddings. In contrast, BART and T5 demonstrated superior contextual comprehension and coherence in summarizing dialogue, largely owing to their use of dynamic embeddings.{" "}
        </p>
        <p>
        BART, in particular, stood out for its effectiveness in dialogue summarization, benefiting from its pre-training and fine-tuning capabilities. Its bidirectional context learning and autoregressive generation enabled it to produce more coherent and contextually rich summaries compared to the other models. The study concluded that models with dynamic embeddings, such as BART and T5, offered significant advantages for abstractive summarization tasks, particularly in dialogue processing. These findings provided valuable insights into the role of embedding technologies in NLP and offered practical guidance for model selection in dialogue-based summarization tasks.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/pratyush-okay/DSCWOW-DistributedSureveillanceSystem",
    title: "Distributed City Surveillance System ",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: dcssMain,
    images: [dcssMain, dcss2, dcss3],
    stack: ["ReactJS", "Python"],
    slug: "dcss",
    content: (
      <div>
        <p>
        It is very difficult to utilize all the public surveillance capabilities of a big city and often time pre symptoms of crime or very big give away factors are missed due to the fact that not everyone can man public cameras or keep an eye on everyone physically. This leads to blind spots for the security bodies to functions and in turn, these blind spots are exploited by anti-social elements of the society. These blind spots can be avoided and there can be warnings given ahead of time of a crime by looking at pre symptoms of a crime (or situations that lead to crime) or there can also be sure sign warnings that prompt for quick action from the Police or any security body.{" "}
        </p>
        <p>
        All this can be done by developing a distributed surveillance system that takes signals from two of the smartest beings on earth that are capable of detecting pre symptoms as well as sure sign signals of crime. Humans AI We have tried to do just this by combining user warnings and feedbacks with our trained AI. The whole system if we let it scale can make neighbourhoods super safe and can also lead to a reduction in action to emergency time as this can prompt actions to be taken before an event occurs.
        </p>{" "}
      </div>
    ),
  },
];
