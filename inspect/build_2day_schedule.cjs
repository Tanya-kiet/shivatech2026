const fs = require('fs');

const schedule2Day = [
  {
    day: "Day 1",
    pillLabel: "DAY 01 (17 OCT)",
    shortPillLabel: "D1 · 17 OCT",
    dateStr: "17 OCTOBER 2026",
    title: "SHIVATECH OPENING, STARTUP CONCLAVE & HACKATHON KICKOFF",
    events: [
      {
        time: "09:00 AM - 10:30 AM",
        title: "SHIVATECH 2026 GRAND INAUGURATION",
        venue: "Main Auditorium",
        date: "17 OCTOBER 2026",
        description: "Grand opening keynotes, dignitary speeches, light ceremony, and reveal of the SHIVATECH 2026 flagship trophy."
      },
      {
        time: "10:30 AM - 01:30 PM",
        title: "STARTUP CONCLAVE 2026 - PITCHING ROUND",
        venue: "Conference Room CBII",
        date: "17 OCTOBER 2026",
        description: "Premier startup pitching and business plan presentations for aspiring entrepreneurs."
      },
      {
        time: "11:00 AM - 12:00 PM",
        title: "HACKNATION 2.0 PROBLEM STATEMENTS REVEAL",
        venue: "Main Auditorium",
        date: "17 OCTOBER 2026",
        description: "Release of official problem statements and technical guidelines for hackathon teams."
      },
      {
        time: "12:00 PM ONWARDS",
        title: "HACKNATION 2.0 CODING COMMENCES",
        venue: "C-Block Labs",
        date: "17 OCTOBER 2026",
        description: "Teams begin continuous 24-hour software and hardware development."
      },
      {
        time: "04:00 PM - 06:00 PM",
        title: "MENTOR EVALUATION ROUND 1",
        venue: "Hackathon Arena",
        date: "17 OCTOBER 2026",
        description: "Industry mentors inspect initial architecture, code structure, and tech stack choices."
      },
      {
        time: "11:00 PM",
        title: "MIDNIGHT SNACK & MINI TECH GAMES",
        venue: "C-Block Central Hall",
        date: "17 OCTOBER 2026",
        description: "Late night refresh, energy drinks, and quick coding mini-challenges."
      }
    ]
  },
  {
    day: "Day 2",
    pillLabel: "DAY 02 (18 OCT)",
    shortPillLabel: "D2 · 18 OCT",
    dateStr: "18 OCTOBER 2026",
    title: "DEPARTMENTAL CONTESTS, ROBOTICS & GRAND VALEDICTORY",
    events: [
      {
        time: "07:00 AM - 09:00 AM",
        title: "HACKATHON FINAL PROJECT SUBMISSION",
        venue: "Hackathon Portal",
        date: "18 OCTOBER 2026",
        description: "Code check-in, repository freeze, and final project documentation submission."
      },
      {
        time: "09:30 AM - 01:00 PM",
        title: "DEPARTMENTAL TECHNICAL COMPETITIONS",
        venue: "Respective Departmental Labs",
        date: "18 OCTOBER 2026",
        description: "CAD 3D Modelling, Circuit Designing, Debugging, Web & Cybersecurity Challenges, and Technical Quizzes."
      },
      {
        time: "10:00 AM - 01:00 PM",
        title: "HACKNATION 2.0 FINAL JURY DEMOS",
        venue: "Judges Panel Room",
        date: "18 OCTOBER 2026",
        description: "Top finalist teams present live product demonstrations to jury experts."
      },
      {
        time: "01:30 PM - 04:30 PM",
        title: "QUANTUM DRIFT (ROBO RACE & LINE FOLLOWER)",
        venue: "Robotics Ground Arena",
        date: "18 OCTOBER 2026",
        description: "High-speed robo races, line-following bots, and obstacle arena showdowns."
      },
      {
        time: "05:00 PM - 07:30 PM",
        title: "GRAND VALEDICTORY & PRIZE DISTRIBUTION CEREMONY",
        venue: "Main Auditorium",
        date: "18 OCTOBER 2026",
        description: "Awarding winner trophies, cash prize distributions, incubator grant announcements, and festival wrap-up."
      }
    ]
  }
];

fs.writeFileSync('src/data/schedule.js', `export const SCHEDULE_DATA = ${JSON.stringify(schedule2Day, null, 2)};\n`);
console.log('2-day schedule data generated successfully!');
