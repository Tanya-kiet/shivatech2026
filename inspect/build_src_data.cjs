const fs = require('fs');
const path = require('path');

fs.mkdirSync('src/data', { recursive: true });

// 1. Events Data
const eventsData = [
  {
    id: "hackathon",
    title: "HACKNATION (HACKATHON)",
    category: "HACKATHON",
    date: "17 & 18 October 2026",
    venue: "C-Block Shivalik University",
    prize: "Up to ₹2,00,000",
    teamSize: "2 - 4 Members",
    registrationUrl: "https://forms.gle/8Mk7g54FsrNDSyAo9",
    description: "The flagship 24-hour hackathon of SHIVATECH 2026 where innovative minds solve real-world problems using cutting-edge technologies."
  },
  {
    id: "innovation",
    title: "SHIVA INNOVEX (STARTUP CONCLAVE)",
    category: "INNOVATION & ENTREPRENEURSHIP",
    date: "05–06 OCTOBER 2026",
    venue: "Conference Room CBII",
    prize: "Upto 10 Lakh",
    teamSize: "1 - 4 Members",
    registrationUrl: "https://forms.gle/5XrJJw1Rre9LpaC39",
    description: "A premier startup pitching and business plan presentation event for aspiring entrepreneurs to showcase startup ideas to investors and incubators."
  },
  {
    id: "departmental",
    title: "DEPARTMENTAL TECHNICAL EVENTS",
    category: "TECHNICAL COMPETITIONS",
    date: "09 OCTOBER 2026",
    venue: "Respective Departments, Shivalik University",
    prize: "₹50,000+",
    teamSize: "1 - 4 Members",
    registrationUrl: "https://forms.gle/KJXV1eGUcrtLhJy56",
    description: "Specialized engineering and technical challenges hosted by CSE, Civil, Mechanical, ECE, Management, and Applied Science departments."
  },
  {
    id: "robotics",
    title: "QUANTUM DRIFT (ROBOTICS)",
    category: "ROBOTICS",
    date: "09 OCTOBER 2026",
    venue: "Main Robotics Arena, Shivalik University",
    prize: "UPTO ₹35,000",
    teamSize: "2 - 4 Members",
    registrationUrl: "https://forms.gle/CvYpny3YC5dpdYby7",
    description: "Line-following bot challenge, Robo Race, and obstacle navigation showdown for robotics enthusiasts."
  },
  {
    id: "creative-esports",
    title: "CREATIVE & ESPORTS ZONE",
    category: "CREATIVE & ESPORTS",
    date: "SHIVATECH FESTIVAL 2026",
    venue: "Festival Activity Zone, Shivalik University",
    prize: "Exciting Goodies & Trophies",
    teamSize: "Solo / Team",
    registrationUrl: "https://forms.gle/8Mk7g54FsrNDSyAo9",
    description: "Esports tournaments, UI/UX design battles, digital poster making, and photography competitions."
  }
];

fs.writeFileSync('src/data/events.js', 'export const EVENTS_DATA = ' + JSON.stringify(eventsData, null, 2) + ';\n');

// 2. Schedule Data
const scheduleData = [
  {
    day: "Day 1",
    pillLabel: "DAY 01 (05–06 OCT)",
    shortPillLabel: "D1 · 05–06 OCT",
    dateStr: "05–06 OCTOBER 2026",
    title: "PRE-FEST & STARTUP CONCLAVE",
    events: [
      { time: "09:30 AM - 11:00 AM", title: "Registration & Welcome Desk Setup", venue: "Main Entrance Lobby", date: "05–06 OCTOBER 2026" },
      { time: "11:00 AM - 01:30 PM", title: "STARTUP CONCLAVE 2026 - PITCHING ROUND 1", venue: "Conference Room CBII", date: "05–06 OCTOBER 2026" },
      { time: "02:30 PM - 05:00 PM", title: "Mentorship & Investor Interaction Session", venue: "CBII Seminar Hall", date: "05–06 OCTOBER 2026" }
    ]
  },
  {
    day: "Day 2 & 3",
    pillLabel: "DAY 02 & 03 (17 & 18 OCT)",
    shortPillLabel: "D2 & D3 · 17–18 OCT",
    dateStr: "17 & 18 October 2026",
    title: "HACKNATION 24-HOUR HACKATHON",
    events: [
      { time: "09:00 AM - 10:30 AM", title: "SHIVATECH 2026 GRAND INAUGURATION", venue: "Main Auditorium", date: "17 & 18 October 2026", description: "Grand opening keynotes, dignitary speeches, light ceremony, and reveal of the SHIVATECH 2026 flagship trophy." },
      { time: "10:30 AM - 11:30 AM", title: "HACKNATION PROBLEM STATEMENTS REVEAL", venue: "Main Auditorium", date: "17 & 18 October 2026" },
      { time: "12:00 PM", title: "HACKATHON CODING COMMENCES (24 HOURS)", venue: "C-Block Labs", date: "17 & 18 October 2026" },
      { time: "04:00 PM - 06:00 PM", title: "MENTOR EVALUATION ROUND 1", venue: "Hackathon Arena", date: "17 & 18 October 2026" },
      { time: "11:00 PM", title: "MIDNIGHT SNACK & MINI TECH GAMES", venue: "C-Block Central Hall", date: "17 & 18 October 2026" },
      { time: "07:00 AM - 09:00 AM", title: "FINAL PROJECT SUBMISSION & CODE CHECK", venue: "Hackathon Portal", date: "18 OCTOBER 2026" },
      { time: "10:00 AM - 01:00 PM", title: "FINAL JURY EVALUATION & DEMOS", venue: "Judges Panel Room", date: "18 OCTOBER 2026" }
    ]
  },
  {
    day: "Day 4",
    pillLabel: "DAY 04 (09 OCT)",
    shortPillLabel: "D4 · 09 OCT",
    dateStr: "09 OCTOBER 2026",
    title: "DEPARTMENTAL TECHNICAL EVENTS & ROBOTICS",
    events: [
      { time: "09:30 AM - 01:00 PM", title: "DEPARTMENTAL TECH COMPETITIONS", venue: "Respective Departmental Labs", date: "09 OCTOBER 2026" },
      { time: "01:30 PM - 05:00 PM", title: "QUANTUM DRIFT (ROBO RACE & LINE FOLLOWER)", venue: "Robotics Ground Arena", date: "09 OCTOBER 2026" },
      { time: "02:00 PM - 04:30 PM", title: "CYBERSECURITY & DEBUGGING BATTLES", venue: "CSE Computer Center", date: "09 OCTOBER 2026" }
    ]
  },
  {
    day: "Day 5",
    pillLabel: "DAY 05 (10 OCT)",
    shortPillLabel: "D5 · 10 OCT",
    dateStr: "10 OCTOBER 2026",
    title: "VALEDICTORY, PRIZE DISTRIBUTION & CELEBRATION",
    events: [
      { time: "11:00 AM - 01:30 PM", title: "CREATIVE & DESIGN EXHIBITION DISPLAY", venue: "Central Plaza", date: "10 OCTOBER 2026" },
      { time: "03:00 PM - 06:00 PM", title: "GRAND VALEDICTORY & PRIZE DISTRIBUTION CEREMONY", venue: "Main Auditorium", date: "10 OCTOBER 2026" },
      { time: "06:30 PM ONWARDS", title: "SHIVATECH CULTURAL NIGHT & CELEBRATIONS", venue: "University Open Air Theatre", date: "10 OCTOBER 2026" }
    ]
  }
];

fs.writeFileSync('src/data/schedule.js', 'export const SCHEDULE_DATA = ' + JSON.stringify(scheduleData, null, 2) + ';\n');

// 3. Team Data
const teamData = [
  {
    category: "faculty",
    categoryLabel: "FACULTY COORDINATORS",
    members: [
      {
        name: "Dr. Kuldeep Kumar",
        role: "Associate Dean at the Center of Business Incubation and Innovations (CBII)",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", email: "kuldeep@shivalikcollege.edu.in" }
      },
      {
        name: "Mr. Kshitij Jain",
        role: "ACM Faculty Head & Incubation Manager",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "https://www.linkedin.com/in/kshitij-jain-5678a1130/", email: "kshitij.jain@shivalikcollege.edu.in" }
      },
      {
        name: "Dr. Ajay Verma",
        role: "Faculty Coordinator",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", email: "ajay@shivalikcollege.edu.in" }
      },
      {
        name: "Ms. Neha Sharma",
        role: "Faculty Coordinator",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", email: "neha@shivalikcollege.edu.in" }
      }
    ]
  },
  {
    category: "student_leads",
    categoryLabel: "STUDENT EXECUTIVE LEADS",
    members: [
      {
        name: "Rifat Parvez",
        role: "Chairperson ACM Student Chapter",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", instagram: "https://www.instagram.com/thediamondr_/", email: "rifatparvez04@gmail.com" }
      },
      {
        name: "Shivam Kumar",
        role: "Vice Chairperson ACM Student Chapter",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", instagram: "#", email: "shivamm9693kr@gmail.com" }
      },
      {
        name: "Kumar Satyam",
        role: "Graphic Head ACM",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", instagram: "https://www.instagram.com/official_satya_3843/", email: "satyamkruk07@gmail.com" }
      },
      {
        name: "Aman Singh",
        role: "Treasurer ACM",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", email: "aman@gmail.com" }
      },
      {
        name: "Priyanshu Kumar",
        role: "Secretary ACM",
        image: "/images/shivalik_campus.webp",
        socials: { linkedin: "#", email: "priyanshu@gmail.com" }
      }
    ]
  },
  {
    category: "student_coordinators",
    categoryLabel: "STUDENT COORDINATORS",
    members: [
      { name: "Saurabh Kumar", role: "Media Head ACM", image: "/images/shivalik_campus.webp" },
      { name: "Ankit Raj", role: "Vice Media Head ACM", image: "/images/shivalik_campus.webp" },
      { name: "Rahul Verma", role: "ACM Technical Core Member", image: "/images/shivalik_campus.webp" },
      { name: "Muskan Kumari", role: "ACM Event Coordinator", image: "/images/shivalik_campus.webp" },
      { name: "Abhishek Sharma", role: "ACM Logistics Lead", image: "/images/shivalik_campus.webp" }
    ]
  }
];

fs.writeFileSync('src/data/team.js', 'export const TEAM_DATA = ' + JSON.stringify(teamData, null, 2) + ';\n');

// 4. Contact Data
const contactData = [
  {
    name: "Mr. Kshitij Jain",
    role: "ACM Faculty Head & Incubation Manager",
    email: "kshitij.jain@shivalikcollege.edu.in",
    phone: "+91 83750 52135",
    category: "faculty"
  },
  {
    name: "Rifat Parvez",
    role: "Chairperson",
    email: "rifatparvez04@gmail.com",
    phone: "+91 91051 33069",
    category: "student"
  },
  {
    name: "Shivam Kumar",
    role: "Vice Chairperson",
    email: "shivamm9693kr@gmail.com",
    phone: "+91 96935 61946",
    category: "student"
  },
  {
    name: "Kumar Satyam",
    role: "Graphic Head ACM",
    email: "satyamkruk07@gmail.com",
    phone: "+91 70605 50243",
    category: "student"
  }
];

fs.writeFileSync('src/data/contact.js', 'export const CONTACT_DATA = ' + JSON.stringify(contactData, null, 2) + ';\n');

// 5. FAQ Data
const faqData = [
  {
    question: "What is SHIVATECH 2026?",
    answer: "SHIVATECH 2026 is the 5-day annual technical festival organized by Shivalik University, Dehradun. It features a flagship 24-hour hackathon, startup conclave, robotics competitions, departmental technical events, and creative workshops."
  },
  {
    question: "When and where is SHIVATECH 2026 taking place?",
    answer: "SHIVATECH 2026 is hosted at Shivalik University campus in Dehradun, Uttarakhand. The 24-hour Hackathon (HACKNATION) takes place on 17 & 18 October 2026."
  },
  {
    question: "Who can participate in SHIVATECH 2026 events?",
    answer: "Students from all recognized schools, colleges, and universities across India (diploma, UG, PG) are eligible to register and participate."
  },
  {
    question: "Is there any registration fee?",
    answer: "Registration details and team fees vary per competition track. Check individual event cards on the Events page for specific registration links."
  },
  {
    question: "What are the hackathon dates for HACKNATION?",
    answer: "The hackathon takes place on 17 & 18 October 2026."
  },
  {
    question: "What are the prize categories for HACKNATION?",
    answer: "HACKNATION offers cash prizes up to ₹2,00,000 along with goodies, mentorship, incubation support from CBII, and certificates for all finalists."
  },
  {
    question: "What hardware or software should participants bring?",
    answer: "Participants in HACKNATION and technical challenges should bring their own laptops, chargers, extension cords, and any specific hardware components required for their projects."
  },
  {
    question: "Will accommodation and food be provided for hackathon participants?",
    answer: "Yes, meals, snacks, WiFi, designated hacking space, and rest zones will be provided for all registered participants during the 24-hour hackathon."
  }
];

fs.writeFileSync('src/data/faq.js', 'export const FAQ_DATA = ' + JSON.stringify(faqData, null, 2) + ';\n');

// 6. Gallery Data
const galleryData = [
  { id: 1, title: "HACKNATION INNOVATION SPRINT", category: "EVENTS", date: "17 & 18 October 2026", image: "/images/shivalik_campus.webp" },
  { id: 2, title: "RAPID PROTOTYPING LABS", category: "EVENTS", date: "17 & 18 October 2026", image: "/images/hero/buildings-back.png" },
  { id: 3, title: "COLLABORATIVE CODING SESSIONS", category: "SHIVATECH", date: "17 & 18 October 2026", image: "/images/shivalik_campus.webp" },
  { id: 4, title: "TEAM WORKFLOW & ARCHITECTURE", category: "TEAM", date: "17 & 18 October 2026", image: "/images/hero/buildings-front.png" },
  { id: 5, title: "AI & DEEP TECH EXPLORATION", category: "EVENTS", date: "08 OCTOBER 2026", image: "/images/shivalik_campus.webp" },
  { id: 6, title: "MENTORSHIP & CODE REVIEWS", category: "BEHIND THE SCENES", date: "08 OCTOBER 2026", image: "/images/shivalik_campus.webp" },
  { id: 7, title: "PROJECT EVALUATION ARENA", category: "MOMENTS", date: "09 OCTOBER 2026", image: "/images/shivalik_campus.webp" },
  { id: 8, title: "PITCH STAGE PRESENTATIONS", category: "SHIVATECH", date: "08 OCTOBER 2026", image: "/images/shivalik_campus.webp" },
  { id: 9, title: "KEYNOTE & GUEST SESSIONS", category: "BEHIND THE SCENES", date: "07 OCTOBER 2026", image: "/images/shivalik_campus.webp" },
  { id: 10, title: "AWARDS & CHAMPIONS CELEBRATION", category: "MOMENTS", date: "10 OCTOBER 2026", image: "/images/shivalik_campus.webp" }
];

fs.writeFileSync('src/data/gallery.js', 'export const GALLERY_DATA = ' + JSON.stringify(galleryData, null, 2) + ';\n');

console.log('All src/data files built successfully!');
