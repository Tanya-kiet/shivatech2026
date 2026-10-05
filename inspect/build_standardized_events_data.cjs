const fs = require('fs');

const eventsData = [
  {
    id: "hacknation-2-0",
    number: "01",
    name: "HACKNATION 2.0",
    title: "HACKNATION 2.0",
    badge: "FLAGSHIP HACKATHON",
    category: "HACKATHON",
    tagline: "INTENSIVE DEVELOPMENT & PROTOTYPING SPRINT",
    description: "HACKNATION 2.0 is SHIVA INNOVEX's flagship continuous software and hardware hackathon. Interdisciplinary student teams collaborate to transform problem statements into functioning code, hardware integrations, and deployed technological prototypes.",
    date: "17 & 18 October 2026",
    venue: "C-Block Shivalik University",
    location: "C-Block Shivalik University",
    prize: "Up to ₹2,00,000",
    teamSize: "4–6 Members",
    registrationUrl: "https://forms.gle/8Mk7g54FsrNDSyAo9",
    timeline: [
      {
        date: "17 OCTOBER 2026",
        time: "09:00 AM",
        title: "HACKATHON BEGINS",
        description: "Official problem statement release, team check-in, and kickoff."
      },
      {
        date: "17 OCTOBER 2026",
        time: "DAY 1",
        title: "DEVELOPMENT • MENTORING • BUILDING",
        description: "Intense coding, architecture design, and first-round mentor reviews."
      },
      {
        date: "18 OCTOBER 2026",
        time: "DAY 2",
        title: "FINAL DEVELOPMENT • SUBMISSION • EVALUATION",
        description: "Repository freeze, project submission, and live jury demos."
      },
      {
        date: "18 OCTOBER 2026",
        time: "06:00 PM",
        title: "RESULT DECLARATION",
        description: "Winners announcement and trophy presentation at the Valedictory ceremony."
      }
    ],
    faqs: [
      {
        id: "hn-1",
        question: "What is HACKNATION 2.0?",
        answer: "HACKNATION 2.0 is SHIVA INNOVEX's flagship software and hardware hackathon (17 & 18 October 2026). Interdisciplinary student teams collaborate overnight to transform problem statements into functioning code, hardware integrations, and deployed technological prototypes."
      },
      {
        id: "hn-2",
        question: "Who can participate in HACKNATION 2.0?",
        answer: "Open to enrolled undergraduate, postgraduate, and diploma students nationwide. Cross-departmental team formations are encouraged."
      },
      {
        id: "hn-3",
        question: "What are the prizes and rewards for HACKNATION 2.0?",
        answer: "HACKNATION 2.0 features an attractive total prize pool of Up to ₹2,00,000 across multiple technology tracks, along with trophies and incubation support."
      },
      {
        id: "hn-4",
        question: "What are the important dates and venue for HACKNATION 2.0?",
        answer: "HACKNATION 2.0 takes place on 17 & 18 October 2026 at C-Block, Shivalik University. HACKATHON BEGINS on 17 Oct at 09:00 AM and RESULT DECLARATION takes place on 18 Oct at 06:00 PM."
      }
    ]
  },
  {
    id: "ideathon",
    number: "02",
    name: "IDEATHON (SHIVA INNOVEX)",
    title: "IDEATHON (SHIVA INNOVEX)",
    badge: "INCUBATION & PITCH SPRINT",
    category: "INNOVATION & ENTREPRENEURSHIP",
    tagline: "IDENTIFY REAL-WORLD PROBLEMS & DEVELOP INNOVATIVE SOLUTIONS",
    description: "A premier startup pitching and business plan presentation event for aspiring entrepreneurs to showcase groundbreaking startup ideas to investors and incubators.",
    date: "05–06 OCTOBER 2026",
    venue: "Conference Room CBII",
    location: "Conference Room CBII",
    prize: "Upto 10 Lakh Incubation Support",
    teamSize: "1–4 Members",
    registrationUrl: "https://forms.gle/5XrJJw1Rre9LpaC39",
    faqs: [
      {
        question: "What is IDEATHON?",
        answer: "IDEATHON is the innovation and entrepreneurship track where student teams pitch business models and technology solutions to startup mentors and CBII incubators."
      }
    ]
  },
  {
    id: "departmental-technical-events",
    number: "03",
    name: "DEPARTMENTAL TECHNICAL EVENTS",
    title: "DEPARTMENTAL TECHNICAL EVENTS",
    badge: "MULTI-DEPARTMENT EXPO",
    category: "TECHNICAL COMPETITIONS",
    tagline: "DEPARTMENT-WISE DEDICATED TECHNICAL COMPETITIONS",
    description: "Specialized engineering and technical challenges hosted by Mechanical, Civil, CSE, ECE, Management, and Applied Science departments at Shivalik University.",
    date: "09 OCTOBER 2026",
    venue: "Respective Departments, Shivalik University",
    location: "Respective Departments, Shivalik University",
    prize: "₹50,000+ Total Cash Pool",
    teamSize: "Individual & Team",
    registrationUrl: "https://forms.gle/KJXV1eGUcrtLhJy56",
    faqs: [
      {
        question: "What competitions are included in Departmental Events?",
        answer: "Includes CAD 3D Modelling, Circuit Designing, Debugging, Web & Cybersecurity Challenges, Structural Bridge Design, and Tech Quizzes."
      }
    ]
  },
  {
    id: "quantum-drift",
    number: "04",
    name: "QUANTUM DRIFT (ROBOTICS)",
    title: "QUANTUM DRIFT (ROBOTICS)",
    badge: "SPECIALIZED ROBOTICS ARENA",
    category: "ROBOTICS",
    tagline: "THREE PROGRESSIVE KNOCKOUT PHASES • ONE FINAL ROBOTIC CHAMPION",
    description: "High-voltage robotics competition featuring line-following bots, obstacle navigation, and Robo Race showdowns across progressive knockout phases.",
    date: "09 OCTOBER 2026",
    venue: "Main Robotics Arena, Shivalik University",
    location: "Main Robotics Arena, Shivalik University",
    prize: "UPTO ₹35,000",
    teamSize: "2–4 Members",
    registrationUrl: "https://forms.gle/CvYpny3YC5dpdYby7",
    faqs: [
      {
        question: "What robot specifications are allowed in Quantum Drift?",
        answer: "Robots must satisfy dimensional constraints and power limits defined in the official robotics rulebook."
      }
    ]
  },
  {
    id: "fun-activities-and-games",
    number: "05",
    name: "FUN ACTIVITIES & GAMES",
    title: "FUN ACTIVITIES & GAMES",
    badge: "FESTIVAL SPECIAL ARENA",
    category: "CREATIVE & ESPORTS",
    tagline: "CREATIVE WEB OF COLOUR & HIGH-OCTANE BEYBLADE TOURNAMENT",
    description: "Esports tournaments, Web of Colour art displays, Beyblade battles, UI/UX design challenges, and digital photography competitions.",
    date: "SHIVATECH FESTIVAL 2026",
    venue: "Festival Activity Zone, Shivalik University",
    location: "Festival Activity Zone, Shivalik University",
    prize: "Trophies & Goodies",
    teamSize: "Solo / Team",
    registrationUrl: "https://forms.gle/8Mk7g54FsrNDSyAo9",
    faqs: [
      {
        question: "Who can participate in Fun Activities & Games?",
        answer: "Open to all festival attendees and registered college students."
      }
    ]
  }
];

fs.writeFileSync('src/data/events.js', `export const EVENTS_DATA = ${JSON.stringify(eventsData, null, 2)};\n`);
console.log('src/data/events.js built with complete unified property schema!');
