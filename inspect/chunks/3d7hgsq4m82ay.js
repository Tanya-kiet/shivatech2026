(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 66720, e => {
    "use strict";
    var a = e.i(43476),
        t = e.i(71645),
        s = e.i(57688);
    let r = ({
        mouseX: e = 0,
        mouseY: t = 0
    }) => {
        let r = 22 * e,
            i = 12 * t;
        return (0, a.jsxs)("div", {
            className: "fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#02050e]",
            children: [(0, a.jsx)("div", {
                className: "absolute inset-0 w-full h-full transition-transform duration-700 ease-out scale-105",
                style: {
                    transform: `translate3d(${12*e}px, ${8*t}px, 0) scale(1.05)`
                },
                children: (0, a.jsx)(s.default, {
                    src: "/images/team/team_custom_bg.png",
                    alt: "Cinematic Custom Team Background",
                    fill: !0,
                    priority: !0,
                    sizes: "100vw",
                    className: "object-cover object-center opacity-85 brightness-95 contrast-105"
                })
            }), (0, a.jsx)("div", {
                className: "absolute bottom-6 right-2 sm:right-8 w-64 sm:w-80 h-96 sm:h-[480px] opacity-40 transition-transform duration-700 ease-out pointer-events-none mix-blend-screen",
                style: {
                    transform: `translate3d(${-r}px, ${-i}px, 0)`
                },
                children: (0, a.jsx)(s.default, {
                    src: "/images/hero/character.png",
                    alt: "Spider-Man Rooftop",
                    fill: !0,
                    sizes: "320px",
                    className: "object-contain object-bottom drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                })
            }), (0, a.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#02050e]/85 via-[#02050e]/50 to-[#02050e] opacity-95"
            }), (0, a.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#02050e]/70 via-transparent to-[#02050e]/70"
            }), (0, a.jsx)("div", {
                className: "absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-600/30 blur-[120px] transition-transform duration-700 ease-out",
                style: {
                    transform: `translate3d(${r}px, ${i}px, 0)`
                }
            }), (0, a.jsx)("div", {
                className: "absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sky-500/25 blur-[130px] transition-transform duration-700 ease-out",
                style: {
                    transform: `translate3d(${-r}px, ${-i}px, 0)`
                }
            }), (0, a.jsxs)("svg", {
                className: "absolute inset-0 w-full h-full opacity-20 mix-blend-screen",
                viewBox: "0 0 1000 1000",
                preserveAspectRatio: "none",
                children: [(0, a.jsx)("line", {
                    x1: "0",
                    y1: "0",
                    x2: "1000",
                    y2: "1000",
                    stroke: "#ef4444",
                    strokeWidth: "0.5",
                    strokeDasharray: "6 6"
                }), (0, a.jsx)("line", {
                    x1: "1000",
                    y1: "0",
                    x2: "0",
                    y2: "1000",
                    stroke: "#ef4444",
                    strokeWidth: "0.5",
                    strokeDasharray: "6 6"
                }), (0, a.jsx)("circle", {
                    cx: "500",
                    cy: "500",
                    r: "300",
                    stroke: "#38bdf8",
                    strokeWidth: "0.5",
                    strokeDasharray: "4 8",
                    fill: "none"
                }), (0, a.jsx)("circle", {
                    cx: "500",
                    cy: "500",
                    r: "450",
                    stroke: "#ef4444",
                    strokeWidth: "0.5",
                    strokeDasharray: "4 8",
                    fill: "none"
                })]
            })]
        })
    };
    var i = e.i(46932);
    let o = ({
            member: e,
            isFaculty: t = !1,
            isCenter: r = !1,
            onClick: o
        }) => (0, a.jsxs)(i.motion.div, {
            whileHover: {
                y: -6,
                scale: 1.02
            },
            transition: {
                duration: .25,
                ease: [.16, 1, .3, 1]
            },
            className: `group relative w-full rounded-2xl overflow-hidden cursor-pointer select-none transition-all duration-300 flex flex-col justify-between p-3.5 bg-[#080e22]/85 backdrop-blur-md border ${t?"border-red-500/40 hover:border-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.45),0_0_20px_rgba(245,158,11,0.3)]":"border-sky-500/30 hover:border-red-500/80 hover:shadow-[0_0_30px_rgba(239,68,68,0.4),0_0_20px_rgba(56,189,248,0.3)]"}`,
            children: [(0, a.jsx)("div", {
                className: "absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500 z-20"
            }), (0, a.jsx)("div", {
                className: "absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400 z-20"
            }), (0, a.jsx)("div", {
                className: "absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400 z-20"
            }), (0, a.jsx)("div", {
                className: "absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500 z-20"
            }), (0, a.jsx)("div", {
                className: `absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${t?"from-transparent via-red-500 to-transparent":"from-transparent via-sky-400 to-transparent"} opacity-60 group-hover:opacity-100 transition-opacity duration-300`
            }), (0, a.jsxs)("div", {
                className: "relative w-full aspect-[4/5] sm:h-72 rounded-xl overflow-hidden bg-[#030612] border border-white/10 group-hover:border-white/20 transition-colors duration-300",
                children: [e.image ? (0, a.jsx)(s.default, {
                    src: e.image,
                    alt: e.name,
                    fill: !0,
                    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
                    priority: !1,
                    className: "object-cover object-top transition-transform duration-500 group-hover:scale-105 brightness-95 contrast-105"
                }) : (0, a.jsxs)("div", {
                    className: "w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#080e22] via-[#040817] to-[#02050e] relative overflow-hidden p-4 select-none",
                    children: [(0, a.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] pointer-events-none"
                    }), (0, a.jsx)("div", {
                        className: "relative z-10 w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-300 group-hover:border-red-500/50 group-hover:text-red-400 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all",
                        children: (0, a.jsx)("span", {
                            className: "font-mono text-2xl font-black tracking-wider",
                            children: e.name.split(" ").filter(Boolean).map(e => e[0]).slice(0, 2).join("").toUpperCase()
                        })
                    }), (0, a.jsx)("span", {
                        className: "relative z-10 mt-3 text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 font-bold text-center",
                        children: "ACM MEMBER"
                    })]
                }), (0, a.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-[#080e22] via-[#080e22]/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
                }), t && (0, a.jsxs)("div", {
                    className: "absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-[#02050e]/85 backdrop-blur-md border border-white/15 flex items-center space-x-1.5 shadow-md",
                    children: [(0, a.jsx)("span", {
                        className: "w-1.5 h-1.5 rounded-full animate-pulse bg-amber-400"
                    }), (0, a.jsx)("span", {
                        className: "text-[9px] font-mono font-bold tracking-widest uppercase text-slate-200",
                        children: "FACULTY"
                    })]
                })]
            }), (0, a.jsxs)("div", {
                className: "relative z-10 pt-3 pb-1 flex flex-col font-mono",
                children: [(0, a.jsx)("h3", {
                    className: "text-base sm:text-lg font-black tracking-wider text-white uppercase drop-shadow-sm leading-tight group-hover:text-red-400 transition-colors duration-200",
                    children: e.name
                }), (0, a.jsx)("div", {
                    className: `text-xs font-bold tracking-[0.16em] uppercase mt-1 drop-shadow-[0_0_8px_rgba(239,68,68,0.7)] ${t?"text-amber-400":"text-red-500"}`,
                    children: e.role
                }), e.socials && (e.socials.linkedin || e.socials.instagram || e.socials.github || e.socials.email) && (0, a.jsxs)("div", {
                    className: "flex items-center space-x-3 mt-2.5 pt-2 border-t border-white/10 text-slate-400",
                    children: [e.socials.linkedin && (0, a.jsx)("a", {
                        href: e.socials.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-sky-400 transition-colors",
                        title: "LinkedIn",
                        onClick: e => e.stopPropagation(),
                        children: (0, a.jsx)("svg", {
                            className: "w-3.5 h-3.5 fill-current",
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                                d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"
                            })
                        })
                    }), e.socials.email && (0, a.jsx)("a", {
                        href: `mailto:${e.socials.email}`,
                        className: "hover:text-red-400 hover:scale-110 active:scale-95 transition-all",
                        title: `Send email to ${e.name} (${e.socials.email})`,
                        onClick: e => e.stopPropagation(),
                        children: (0, a.jsx)("svg", {
                            className: "w-3.5 h-3.5 fill-current",
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            })
                        })
                    }), e.socials.instagram && (0, a.jsx)("a", {
                        href: e.socials.instagram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-pink-400 hover:scale-110 active:scale-95 transition-all",
                        title: `Instagram: ${e.name}`,
                        onClick: e => e.stopPropagation(),
                        children: (0, a.jsx)("svg", {
                            className: "w-3.5 h-3.5 fill-current",
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                            })
                        })
                    }), e.socials.github && (0, a.jsx)("a", {
                        href: e.socials.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-white transition-colors",
                        title: "GitHub",
                        onClick: e => e.stopPropagation(),
                        children: (0, a.jsx)("svg", {
                            className: "w-3.5 h-3.5 fill-current",
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                                d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                            })
                        })
                    })]
                })]
            })]
        }),
        n = [{
            id: "ajay-kumar-verma",
            name: "Mr. Ajay Kumar Verma",
            role: "Associate Dean at the Center of Business Incubation and Innovations (CBII)",
            category: "faculty",
            image: "/team/ajay-kumar-verma.jpg",
            description: "Associate Dean, CBII",
            socials: {}
        }, {
            id: "kshitij-jain",
            name: "Er. Kshitij Jain",
            role: "ACM Faculty Head & Incubation Manager",
            category: "faculty",
            image: "/team/kshitij-jain.jpeg",
            description: "Faculty Mentor & Advisor",
            socials: {
                email: "kshitij.jain@shivalikcollege.edu.in"
            }
        }, {
            id: "santosh-joshi",
            name: "Dr. Santosh Joshi",
            role: "Faculty Coordinator",
            category: "faculty",
            image: "/team/santosh-joshi.jpg",
            description: "Academic & Strategic Lead",
            socials: {}
        }, {
            id: "shivali-pundir",
            name: "Mrs. Shivali Pundir",
            role: "Faculty Coordinator",
            category: "faculty",
            image: "/team/shivali.jpeg",
            description: "Program & Operations Coordinator",
            socials: {}
        }],
        l = [{
            id: "rifat-parvez",
            name: "Rifat Parvez",
            role: "Chairperson",
            category: "student",
            image: "/team/rifat.jpeg",
            description: "Overall Festival Lead & Strategy",
            socials: {
                email: "rifatparvez04@gmail.com",
                instagram: "https://www.instagram.com/thediamondr_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            }
        }, {
            id: "shivam-kumar",
            name: "Shivam Kumar",
            role: "Vice Chairperson",
            category: "student",
            image: "/team/shivam.jpeg",
            description: "Operations & Team Management",
            socials: {
                email: "shivamm9693kr@gmail.com"
            }
        }, {
            id: "aman-bhardwaj",
            name: "Aman Bhardwaj",
            role: "Treasurer",
            category: "student",
            image: "/team/aman_b.jpeg",
            description: "Finance & Resource Allocation",
            socials: {}
        }, {
            id: "gaurav-kumar",
            name: "Gaurav Kumar",
            role: "Secretary",
            category: "student",
            image: "/team/gaurav.jpeg",
            description: "Administration & Documentation",
            socials: {}
        }, {
            id: "kumar-satyam",
            name: "Kumar Satyam",
            role: "Graphic Head",
            category: "student",
            image: "/team/kumar-satyam-v3.jpeg",
            description: "Visual Identity & Creative Lead",
            socials: {
                email: "satyamkruk07@gmail.com",
                instagram: "https://www.instagram.com/official_satya_3843/"
            }
        }, {
            id: "himanshu-kumar",
            name: "Himanshu Kumar",
            role: "Media Head",
            category: "student",
            image: "/team/himanshu.jpeg",
            description: "Media Coverage & Broadcasting",
            socials: {}
        }, {
            id: "priyanjali",
            name: "Priyanjali",
            role: "Vice Media Head",
            category: "student",
            image: "/team/priyanjali.jpeg",
            description: "Outreach & Digital Communications",
            socials: {}
        }, {
            id: "shubham-shah",
            name: "Shubham Shah",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/shubham.jpeg",
            description: "Technical Support & Coordination",
            socials: {}
        }, {
            id: "prachi-rawat",
            name: "Prachi Rawat",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/prachi.jpeg",
            description: "Event Execution & Logistics",
            socials: {}
        }, {
            id: "srishti-raj",
            name: "Srishti Raj",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/srishti.jpeg",
            description: "Event Operations & Hospitality",
            socials: {}
        }, {
            id: "shreya-singh",
            name: "Shreya Singh",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/shreya-singh.jpeg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "komal-kumari",
            name: "Komal Kumari",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/komal-kumari.jpeg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "mishti",
            name: "Mishti",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/mishti.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "aditya-aadarsh",
            name: "Aditya Aadarsh",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/aditya-aadarsh.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "vivek-kumar",
            name: "Vivek Kumar",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/vivek-kumar.png",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "rishabh-kumar-gautam",
            name: "Rishabh Kumar Gautam",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/rishabh-gautam.png",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "minshu-kumar",
            name: "Minshu Kumar",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/minshu-kumar.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "nikita-kashyap",
            name: "Nikita Kashyap",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/nikita-kashyap.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "rohan-kumar",
            name: "Rohan Kumar",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/rohan-kumar.png",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "abhinav-mishra",
            name: "Abhinav Mishra",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/abhinav-mishra.png",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "agrani-mishra",
            name: "Agrani Mishra",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/agrani-mishra.jpeg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "anwar-hussain",
            name: "Anwar Hussain",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/anwar-hussain.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "bhairavi-singh",
            name: "Bhairavi Singh",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/bhairavi-singh.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "ayushi",
            name: "Ayushi",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/ayushi-raj.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "aakriti-gupta",
            name: "Aakriti Gupta",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/aakriti-gupta.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "prachi-priya",
            name: "Prachi Priya",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/prachi-priya.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "chanchal-gupta",
            name: "Chanchal Gupta",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/chanchal-gupta.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "sneha-rawat",
            name: "Sneha Rawat",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/sneha-rawat.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "ishita-paul",
            name: "Ishita Paul",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/ishita-paul.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "abhinav-gupta",
            name: "Abhinav Gupta",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/abhinav-gupta.png",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "anushka-gupta",
            name: "Anushka Gupta",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/anushka-gupta.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "anjali-kumari",
            name: "Anjali Kumari",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/anjali-kumari.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "aditya-raj",
            name: "Aditya Raj",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/aditya-raj.png",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "ashish-kumar-jha",
            name: "Ashish Kumar Jha",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/ashish-jha.jpg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "roopam-sinha",
            name: "Roopam Sinha",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/roopam-sinha.jpeg",
            description: "ACM Student Member",
            socials: {}
        }, {
            id: "aman-gupta",
            name: "Aman Gupta",
            role: "ACM MEMBER",
            category: "student",
            image: "/team/aman-gupta.jpeg",
            description: "ACM Student Member",
            socials: {}
        }];
    [...n, ...l], e.s(["default", 0, function() {
        let [e, s] = (0, t.useState)({
            x: 0,
            y: 0
        });
        return (0, a.jsxs)("main", {
            className: "relative w-full min-h-screen bg-[#02050e] text-white overflow-x-hidden selection:bg-red-600 selection:text-white pt-24 pb-20",
            onMouseMove: e => {
                let {
                    clientX: a,
                    clientY: t
                } = e, {
                    innerWidth: r,
                    innerHeight: i
                } = window;
                s({
                    x: (a / r - .5) * 2,
                    y: (t / i - .5) * 2
                })
            },
            children: [(0, a.jsx)(r, {
                mouseX: e.x,
                mouseY: e.y
            }), (0, a.jsx)("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 text-center sm:text-left",
                children: (0, a.jsxs)("div", {
                    className: "flex flex-col items-center sm:items-start max-w-3xl",
                    children: [(0, a.jsxs)("div", {
                        className: "inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-red-500/30 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]",
                        children: [(0, a.jsx)("svg", {
                            className: "w-3.5 h-3.5 text-red-500 fill-current animate-pulse",
                            viewBox: "0 0 24 24",
                            children: (0, a.jsx)("path", {
                                d: "M12 2a2 2 0 0 1 2 2v2.1c2.8.5 5 3 5 6 0 1.2-.4 2.3-1 3.2l2.8 2.8-1.4 1.4-2.7-2.7c-.8.6-1.7 1-2.7 1.2V20h-4v-2c-1 0-1.9-.4-2.7-1L4.3 19.7l-1.4-1.4 2.8-2.8C5.1 14.6 4.7 13.5 4.7 12.3c0-3 2.2-5.5 5-6V4a2 2 0 0 1 2.3-2z"
                            })
                        }), (0, a.jsx)("span", {
                            className: "text-[11px] sm:text-xs font-mono font-bold tracking-widest text-red-500 uppercase",
                            children: "SHIVATECH 2026 OFFICIAL CREW"
                        })]
                    }), (0, a.jsxs)("h1", {
                        className: "text-4xl sm:text-6xl lg:text-7xl font-black font-mono tracking-wider uppercase leading-tight drop-shadow-[0_0_30px_rgba(239,68,68,0.45)]",
                        children: [(0, a.jsx)("span", {
                            className: "text-white",
                            children: "OUR "
                        }), (0, a.jsx)("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-pink-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]",
                            children: "TEAM"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-slate-300 uppercase mt-2 mb-2",
                        children: "THE MINDS BEHIND THE MOVEMENT"
                    }), (0, a.jsx)("p", {
                        className: "text-sm text-slate-300/80 font-sans tracking-wide max-w-xl leading-relaxed",
                        children: "A passionate coalition of faculty visionaries, student creators, engineers, and organizers working in sync to power SHIVATECH 2026."
                    })]
                })
            }), (0, a.jsxs)("section", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14 sm:mt-18",
                children: [(0, a.jsxs)("div", {
                    className: "flex flex-col items-center sm:items-start mb-8",
                    children: [(0, a.jsxs)("div", {
                        className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-2",
                        children: [(0, a.jsx)("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"
                        }), (0, a.jsx)("span", {
                            className: "text-[10px] sm:text-xs font-mono font-bold tracking-widest text-amber-400 uppercase",
                            children: "FACULTY LEADERSHIP"
                        })]
                    }), (0, a.jsxs)("h2", {
                        className: "text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-wider uppercase text-white drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]",
                        children: ["FACULTY ", (0, a.jsx)("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500",
                            children: "COORDINATORS"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "h-[2px] w-28 bg-gradient-to-r from-amber-400 to-transparent mt-2"
                    })]
                }), (0, a.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto",
                    children: n.map(e => (0, a.jsx)(o, {
                        member: e,
                        isFaculty: !0
                    }, e.id))
                })]
            }), (0, a.jsxs)("section", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 sm:mt-24",
                children: [(0, a.jsxs)("div", {
                    className: "flex flex-col items-center sm:items-start mb-8",
                    children: [(0, a.jsxs)("div", {
                        className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md mb-2",
                        children: [(0, a.jsx)("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"
                        }), (0, a.jsx)("span", {
                            className: "text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase",
                            children: "EXECUTIVE & TECHNICAL COUNCIL"
                        })]
                    }), (0, a.jsxs)("h2", {
                        className: "text-2xl sm:text-3xl lg:text-4xl font-black font-mono tracking-wider uppercase text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]",
                        children: ["STUDENT ", (0, a.jsx)("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-sky-400",
                            children: "COORDINATORS"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "h-[2px] w-28 bg-gradient-to-r from-red-500 to-transparent mt-2"
                    })]
                }), (0, a.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
                    children: l.map(e => (0, a.jsx)(o, {
                        member: e,
                        isFaculty: !1
                    }, e.id))
                })]
            }), (0, a.jsxs)("div", {
                className: "relative z-10 w-full max-w-4xl mx-auto px-4 mt-20 flex flex-col items-center justify-center text-center font-mono",
                children: [(0, a.jsxs)("div", {
                    className: "w-full flex items-center justify-center space-x-4 mb-3",
                    children: [(0, a.jsx)("div", {
                        className: "h-[1px] flex-1 bg-gradient-to-r from-transparent via-red-500/60 to-red-500"
                    }), (0, a.jsx)("div", {
                        className: "relative w-8 h-8 flex items-center justify-center text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]",
                        children: (0, a.jsxs)("svg", {
                            className: "w-7 h-7 fill-none stroke-current",
                            viewBox: "0 0 24 24",
                            strokeWidth: "1.5",
                            children: [(0, a.jsx)("path", {
                                d: "M12 2L15 8L20 9L16 14L17 20L12 17L7 20L8 14L4 9L9 8L12 2Z"
                            }), (0, a.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "3",
                                fill: "#ef4444"
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: "h-[1px] flex-1 bg-gradient-to-l from-transparent via-sky-400/60 to-sky-400"
                    })]
                }), (0, a.jsxs)("div", {
                    className: "text-[11px] sm:text-xs font-bold tracking-[0.35em] text-slate-300 uppercase",
                    children: ["DIFFERENT SKILLS ", (0, a.jsx)("span", {
                        className: "text-red-500 font-extrabold mx-1.5",
                        children: "/"
                    }), " ONE VISION"]
                })]
            })]
        })
    }], 66720)
}]);