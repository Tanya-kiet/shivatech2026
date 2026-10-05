(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 42988, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(72328);
    e.s(["default", 0, function() {
        let e = (0, r.useRef)(null),
            i = (0, s.useReducedMotion)();
        return ((0, r.useEffect)(() => {
            let t;
            if (i) return;
            let r = e.current;
            if (!r) return;
            let s = r.getContext("2d");
            if (!s) return;
            let a = [],
                o = window.innerWidth,
                n = window.innerHeight,
                l = () => {
                    o = window.innerWidth, n = window.innerHeight, r.width = o, r.height = n, d()
                },
                d = () => {
                    a = [];
                    let e = window.innerWidth < 768 ? 50 : 150;
                    for (let t = 0; t < e; t++) a.push({
                        x: Math.random() * o - o / 2,
                        y: Math.random() * n - n / 2,
                        z: 1e3 * Math.random(),
                        speed: 2 * Math.random() + 1,
                        size: 1.5 * Math.random() + .5
                    })
                },
                c = !0,
                x = () => {
                    c = window.scrollY < 1.1 * window.innerHeight
                },
                p = () => {
                    if (!c) {
                        t = requestAnimationFrame(p);
                        return
                    }
                    s.fillStyle = "rgba(0, 0, 0, 0.2)", s.fillRect(0, 0, o, n);
                    let e = o / 2,
                        r = n / 2;
                    a.forEach(t => {
                        t.z -= 2 * t.speed, t.z <= 0 && (t.z = 1e3, t.x = Math.random() * o - e, t.y = Math.random() * n - r);
                        let i = 800 / t.z,
                            a = e + t.x * i,
                            l = r + t.y * i,
                            d = Math.max(.1, t.size * i),
                            c = Math.min(1, (1e3 - t.z) / 500);
                        s.beginPath(), s.arc(a, l, d, 0, 2 * Math.PI), t.x < 0 ? s.fillStyle = `rgba(220, 38, 38, ${c})` : s.fillStyle = `rgba(37, 99, 235, ${c})`, s.fill()
                    }), t = requestAnimationFrame(p)
                };
            return window.addEventListener("resize", l), window.addEventListener("scroll", x, {
                passive: !0
            }), l(), p(), () => {
                window.removeEventListener("resize", l), window.removeEventListener("scroll", x), cancelAnimationFrame(t)
            }
        }, [i]), i) ? null : (0, t.jsx)("canvas", {
            ref: e,
            className: "layer-particles absolute inset-0 z-[5] pointer-events-none mix-blend-screen opacity-80 will-change-transform"
        })
    }])
}, 57549, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(46932);
    e.s(["default", 0, function() {
        return (0, t.jsx)("div", {
            className: "absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 md:opacity-30 mix-blend-screen",
            children: (0, t.jsxs)(r.motion.svg, {
                initial: {
                    opacity: 0,
                    scale: 1.1
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 2, -2, 0]
                },
                transition: {
                    opacity: {
                        duration: 2,
                        ease: "easeOut"
                    },
                    scale: {
                        duration: 2,
                        ease: "easeOut"
                    },
                    rotate: {
                        duration: 20,
                        repeat: 1 / 0,
                        ease: "linear"
                    }
                },
                viewBox: "0 0 100 100",
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh]",
                fill: "none",
                stroke: "rgba(255,255,255,0.15)",
                strokeWidth: "0.1",
                children: [
                    [...Array(12)].map((e, r) => (0, t.jsx)("line", {
                        x1: "50",
                        y1: "50",
                        x2: (50 + 50 * Math.cos(r * Math.PI / 6)).toFixed(3),
                        y2: (50 + 50 * Math.sin(r * Math.PI / 6)).toFixed(3)
                    }, `line-${r}`)), [10, 20, 30, 40, 50].map((e, r) => (0, t.jsx)("polygon", {
                        points: Array.from({
                            length: 8
                        }).map((t, r) => {
                            let s = r * Math.PI / 4;
                            return `${(50+e*Math.cos(s)).toFixed(3)},${(50+e*Math.sin(s)).toFixed(3)}`
                        }).join(" ")
                    }, `poly-${r}`))
                ]
            })
        })
    }])
}, 79286, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let s = ["ALL", "EVENTS", "SHIVATECH", "TEAM", "MOMENTS", "BEHIND THE SCENES"],
        i = [{
            id: "gal-01",
            src: "/gallery/DSC04440.JPG",
            title: "HACKNATION INNOVATION SPRINT",
            category: "EVENTS",
            event: "HACKNATION 2.0",
            date: "07–08 OCTOBER 2026",
            location: "HACKATHON ARENA",
            description: "Developer teams collaborating and building next-generation software prototypes during the intense 30-hour hackathon.",
            x: -360,
            y: -160,
            size: "md",
            featured: !0
        }, {
            id: "gal-02",
            src: "/gallery/DSC04481.JPG",
            title: "RAPID PROTOTYPING LABS",
            category: "EVENTS",
            event: "HACKNATION 2.0",
            date: "07–08 OCTOBER 2026",
            location: "TECH LAB 1",
            description: "Engineers working through algorithmic challenges, machine learning models, and system architectures under high-intensity competition.",
            x: -110,
            y: -180,
            size: "lg",
            featured: !0
        }, {
            id: "gal-03",
            src: "/gallery/DSC04484.JPG",
            title: "COLLABORATIVE CODING SESSIONS",
            category: "SHIVATECH",
            event: "SHIVATECH EXPO",
            date: "07–08 OCTOBER 2026",
            location: "COLLABORATION HUB",
            description: "Students collaborating with tech leads and domain mentors to fine-tune production-grade features and software systems.",
            x: 160,
            y: -160,
            size: "md"
        }, {
            id: "gal-04",
            src: "/gallery/DSC04492.JPG",
            title: "TEAM WORKFLOW & ARCHITECTURE",
            category: "TEAM",
            event: "HACKNATION 2.0",
            date: "07–08 OCTOBER 2026",
            location: "MAIN AUDITORIUM WING",
            description: "Team leads synchronizing sprint milestones, database schemas, and interface designs before the evaluation checkpoints.",
            x: 230,
            y: 0,
            size: "md"
        }, {
            id: "gal-05",
            src: "/gallery/DSC04530.JPG",
            title: "AI & DEEP TECH EXPLORATION",
            category: "EVENTS",
            event: "SHIVATECH 2026",
            date: "08 OCTOBER 2026",
            location: "RESEARCH WING",
            description: "Participants testing modern AI tools, automated pipelines, and cloud computing architectures to solve real-world problems.",
            x: 170,
            y: 170,
            size: "lg",
            featured: !0
        }, {
            id: "gal-06",
            src: "/gallery/DSC04607.JPG",
            title: "MENTORSHIP & CODE REVIEWS",
            category: "BEHIND THE SCENES",
            event: "HACKNATION 2.0",
            date: "08 OCTOBER 2026",
            location: "MENTOR LOUNGE",
            description: "Industry mentors providing critical feedback on code structure, algorithmic efficiency, and product viability.",
            x: -80,
            y: 170,
            size: "md"
        }, {
            id: "gal-07",
            src: "/gallery/DSC04664.JPG",
            title: "PROJECT EVALUATION ARENA",
            category: "MOMENTS",
            event: "SHIVATECH 2026",
            date: "09 OCTOBER 2026",
            location: "EXPO FLOOR",
            description: "Teams presenting live product demonstrations, system demos, and user interaction journeys directly to the jury panel.",
            x: -340,
            y: 160,
            size: "md"
        }, {
            id: "gal-08",
            src: "/gallery/DSC04722.JPG",
            title: "PITCH STAGE PRESENTATIONS",
            category: "SHIVATECH",
            event: "IDEATHON",
            date: "08 OCTOBER 2026",
            location: "STAGE 1",
            description: "High-impact startup pitch presentations highlighting market viability, technological depth, and scalability potential.",
            x: -450,
            y: 0,
            size: "md"
        }, {
            id: "gal-09",
            src: "/gallery/DSC04727.JPG",
            title: "KEYNOTE & GUEST SESSIONS",
            category: "BEHIND THE SCENES",
            event: "OPENING CEREMONY",
            date: "07 OCTOBER 2026",
            location: "GRAND AUDITORIUM",
            description: "Distinguished keynote speakers and academic leadership inspiring delegates and students at the festival launch.",
            x: -240,
            y: 0,
            size: "sm"
        }, {
            id: "gal-10",
            src: "/gallery/DSC04753.JPG",
            title: "AWARDS & CHAMPIONS CELEBRATION",
            category: "MOMENTS",
            event: "VALEDICTORY CEREMONY",
            date: "10 OCTOBER 2026",
            location: "CENTRAL ARENA",
            description: "Celebrating outstanding hackathon winners, cash prize distributions, trophy presentations, and team milestones at SHIVATECH 2026.",
            x: 300,
            y: -160,
            size: "sm"
        }];
    var a = e.i(42988),
        o = e.i(57549);

    function n({
        mouseX: e = 0,
        mouseY: r = 0
    }) {
        return (0, t.jsxs)("div", {
            className: "fixed inset-0 pointer-events-none z-0 overflow-hidden select-none",
            children: [(0, t.jsxs)("div", {
                className: "absolute inset-0 transition-transform duration-300 ease-out scale-105",
                style: {
                    transform: `translate3d(${-10*e}px, ${-10*r}px, 0) scale(1.05)`
                },
                children: [(0, t.jsx)("img", {
                    src: "/gallery/city_skyline_rooftop.jpg",
                    alt: "Cinematic Futuristic City Skyline",
                    className: "w-full h-full object-cover filter brightness-[0.85] contrast-[1.1] saturate-[1.05]"
                }), (0, t.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-[#02050e]/90 via-[#02050e]/30 to-[#010308]/60"
                }), (0, t.jsx)("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950/20 via-transparent to-[#010306]/70"
                })]
            }), (0, t.jsx)("div", {
                className: "absolute -top-24 left-10 w-[550px] h-[550px] rounded-full bg-cyan-500/15 blur-[150px]"
            }), (0, t.jsx)("div", {
                className: "absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full bg-red-600/15 blur-[160px]"
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#ef4444 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    backgroundPosition: "0 0, 24px 24px"
                }
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-20",
                children: (0, t.jsx)(o.default, {})
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-50",
                children: (0, t.jsx)(a.default, {})
            })]
        })
    }

    function l({
        activeCategory: e,
        onSelectCategory: r
    }) {
        return (0, t.jsx)("div", {
            className: "w-full max-w-3xl mx-auto flex items-center justify-center pointer-events-auto select-none px-2 sm:px-4 pt-2 pb-1 z-20",
            children: (0, t.jsx)("div", {
                className: "inline-flex items-center flex-wrap justify-center gap-1.5 p-1 rounded-full bg-[#040814]/85 border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]",
                children: s.map(s => (0, t.jsx)("button", {
                    onClick: () => r(s),
                    className: `px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 ${e===s?"bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400/50":"text-slate-400 hover:text-white hover:bg-white/5"}`,
                    children: s
                }, s))
            })
        })
    }
    var d = e.i(57688),
        c = e.i(46932);
    let x = ({
            item: e,
            position: r,
            isCenter: s,
            onClick: i,
            onOpenPhotoModal: a
        }) => {
            let o = (() => {
                switch (r) {
                    case "far-left":
                        return {
                            x: "-170%", scale: .66, opacity: .35, zIndex: 5, filter: "brightness(0.5) contrast(0.9)"
                        };
                    case "left":
                        return {
                            x: "-92%", scale: .83, opacity: .65, zIndex: 15, filter: "brightness(0.7) contrast(0.95)"
                        };
                    case "center":
                        return {
                            x: "0%", scale: 1.08, opacity: 1, zIndex: 30, filter: "brightness(1) contrast(1)"
                        };
                    case "right":
                        return {
                            x: "92%", scale: .83, opacity: .65, zIndex: 15, filter: "brightness(0.7) contrast(0.95)"
                        };
                    case "far-right":
                        return {
                            x: "170%", scale: .66, opacity: .35, zIndex: 5, filter: "brightness(0.5) contrast(0.9)"
                        }
                }
            })();
            return (0, t.jsx)(c.motion.div, {
                className: "absolute top-0 left-0 right-0 bottom-0 m-auto w-[210px] h-[300px] xs:w-[240px] xs:h-[340px] sm:w-[280px] sm:h-[390px] md:w-[320px] md:h-[440px] cursor-pointer pointer-events-auto select-none",
                animate: {
                    x: o.x,
                    scale: o.scale,
                    opacity: o.opacity,
                    zIndex: o.zIndex,
                    filter: o.filter
                },
                transition: {
                    duration: .6,
                    ease: [.16, 1, .3, 1]
                },
                onClick: t => {
                    t.stopPropagation(), s ? a(e) : i()
                },
                children: (0, t.jsxs)("div", {
                    className: `relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group ${s?"border-2 border-red-500/80 shadow-[0_0_40px_rgba(239,68,68,0.45),0_0_20px_rgba(56,189,248,0.35)] bg-[#040814]":"border border-white/15 hover:border-red-500/50 hover:opacity-85 shadow-[0_0_25px_rgba(0,0,0,0.8)] bg-[#040814]"}`,
                    children: [(0, t.jsx)(d.default, {
                        src: e.src,
                        alt: e.title,
                        fill: !0,
                        sizes: "(max-width: 768px) 80vw, 400px",
                        className: "object-cover transition-transform duration-700 group-hover:scale-105",
                        priority: s
                    }), (0, t.jsx)("div", {
                        className: `absolute inset-0 bg-gradient-to-t from-[#02050e] via-black/25 to-transparent transition-opacity duration-300 ${s?"opacity-85":"opacity-90"}`
                    }), s && (0, t.jsx)("div", {
                        className: "absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-red-500 via-white to-sky-400 z-20"
                    }), (0, t.jsx)("div", {
                        className: "absolute top-3 left-3 z-20 font-mono",
                        children: (0, t.jsx)("span", {
                            className: `px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md transition-all ${s?"bg-[#040814]/85 border border-sky-400/50 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.3)]":"bg-black/60 border border-white/20 text-slate-300"}`,
                            children: e.category
                        })
                    }), s ? (0, t.jsxs)("div", {
                        className: "absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#040814] via-[#040814]/90 to-transparent font-mono text-white z-20",
                        children: [(0, t.jsxs)("div", {
                            className: "text-[9px] sm:text-[10px] text-red-500 font-bold tracking-[0.25em] uppercase mb-1",
                            children: [e.event, " • SHIVATECH 2026"]
                        }), (0, t.jsx)("h3", {
                            className: "text-sm sm:text-base md:text-lg font-black tracking-wider uppercase drop-shadow-md leading-tight mb-1",
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: "text-[10px] sm:text-[11px] text-slate-300 font-sans line-clamp-2 leading-relaxed mb-2",
                            children: e.description
                        }), (0, t.jsxs)("div", {
                            className: "inline-flex items-center space-x-1.5 text-[10px] text-sky-400 font-bold tracking-wider group-hover:text-white transition-colors",
                            children: [(0, t.jsx)("span", {
                                children: "CLICK TO ENLARGE"
                            }), (0, t.jsx)("span", {
                                children: "🔍"
                            })]
                        })]
                    }) : (0, t.jsxs)("div", {
                        className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent font-mono text-white z-20",
                        children: [(0, t.jsx)("h4", {
                            className: "text-xs sm:text-sm font-bold tracking-wider uppercase line-clamp-1 text-slate-200",
                            children: e.title
                        }), (0, t.jsx)("span", {
                            className: "text-[9px] text-red-400 tracking-wider uppercase opacity-80",
                            children: "TAP TO FOCUS"
                        })]
                    }), s && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("div", {
                            className: "absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500 pointer-events-none"
                        }), (0, t.jsx)("div", {
                            className: "absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-sky-400 pointer-events-none"
                        }), (0, t.jsx)("div", {
                            className: "absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-sky-400 pointer-events-none"
                        }), (0, t.jsx)("div", {
                            className: "absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-red-500 pointer-events-none"
                        })]
                    })]
                })
            })
        },
        p = () => (0, t.jsxs)("svg", {
            className: "absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 filter drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]",
            viewBox: "0 0 1200 800",
            fill: "none",
            children: [(0, t.jsx)("defs", {
                children: (0, t.jsxs)("radialGradient", {
                    id: "webCenterPulse",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    children: [(0, t.jsx)("stop", {
                        offset: "0%",
                        stopColor: "#ef4444",
                        stopOpacity: "0.4"
                    }), (0, t.jsx)("stop", {
                        offset: "60%",
                        stopColor: "#38bdf8",
                        stopOpacity: "0.15"
                    }), (0, t.jsx)("stop", {
                        offset: "100%",
                        stopColor: "#02050e",
                        stopOpacity: "0"
                    })]
                })
            }), (0, t.jsx)("ellipse", {
                cx: "600",
                cy: "400",
                rx: "350",
                ry: "250",
                fill: "url(#webCenterPulse)"
            }), (0, t.jsx)("line", {
                x1: "600",
                y1: "400",
                x2: "100",
                y2: "100",
                stroke: "#ef4444",
                strokeWidth: "1",
                strokeDasharray: "4 4"
            }), (0, t.jsx)("line", {
                x1: "600",
                y1: "400",
                x2: "1100",
                y2: "100",
                stroke: "#ef4444",
                strokeWidth: "1",
                strokeDasharray: "4 4"
            }), (0, t.jsx)("line", {
                x1: "600",
                y1: "400",
                x2: "100",
                y2: "700",
                stroke: "#38bdf8",
                strokeWidth: "1",
                strokeDasharray: "4 4"
            }), (0, t.jsx)("line", {
                x1: "600",
                y1: "400",
                x2: "1100",
                y2: "700",
                stroke: "#38bdf8",
                strokeWidth: "1",
                strokeDasharray: "4 4"
            }), (0, t.jsx)("line", {
                x1: "600",
                y1: "400",
                x2: "600",
                y2: "50",
                stroke: "#38bdf8",
                strokeWidth: "1.2"
            }), (0, t.jsx)("line", {
                x1: "600",
                y1: "400",
                x2: "600",
                y2: "750",
                stroke: "#38bdf8",
                strokeWidth: "1.2"
            }), (0, t.jsx)("ellipse", {
                cx: "600",
                cy: "400",
                rx: "150",
                ry: "100",
                stroke: "#38bdf8",
                strokeWidth: "1",
                strokeOpacity: "0.6",
                fill: "none"
            }), (0, t.jsx)("ellipse", {
                cx: "600",
                cy: "400",
                rx: "280",
                ry: "180",
                stroke: "#ef4444",
                strokeWidth: "1",
                strokeOpacity: "0.5",
                strokeDasharray: "8 6",
                fill: "none"
            }), (0, t.jsx)("ellipse", {
                cx: "600",
                cy: "400",
                rx: "450",
                ry: "280",
                stroke: "#38bdf8",
                strokeWidth: "1",
                strokeOpacity: "0.3",
                fill: "none"
            })]
        }),
        h = ({
            onPrev: e,
            onNext: r,
            isAutoPlaying: s,
            onToggleAutoPlay: i
        }) => (0, t.jsxs)("div", {
            className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-4 pointer-events-auto select-none font-mono",
            children: [(0, t.jsx)(c.motion.button, {
                whileHover: s ? {} : {
                    scale: 1.1,
                    backgroundColor: "rgba(239, 68, 68, 0.2)"
                },
                whileTap: s ? {} : {
                    scale: .95
                },
                disabled: s,
                onPointerDown: e => e.stopPropagation(),
                onClick: t => {
                    t.stopPropagation(), s || e()
                },
                className: `w-11 h-11 rounded-full bg-[#040814]/85 border backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all ${s?"opacity-25 border-white/10 cursor-not-allowed pointer-events-none":"opacity-100 border-white/25 hover:border-red-500 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)]"}`,
                "aria-label": "Previous Memory",
                title: s ? "Pause autoplay to use arrows" : "Previous photo",
                children: (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    children: (0, t.jsx)("path", {
                        d: "M15 18l-6-6 6-6"
                    })
                })
            }), (0, t.jsxs)("button", {
                onPointerDown: e => e.stopPropagation(),
                onClick: e => {
                    e.stopPropagation(), i()
                },
                className: "px-4 py-2 rounded-full bg-[#040814]/85 border border-sky-400/40 backdrop-blur-xl text-xs font-bold text-sky-400 hover:text-white hover:border-sky-300 flex items-center space-x-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] cursor-pointer",
                children: [(0, t.jsx)("span", {
                    className: `w-2 h-2 rounded-full ${s?"bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]":"bg-slate-500"}`
                }), (0, t.jsx)("span", {
                    className: "tracking-widest uppercase",
                    children: s ? "AUTOPLAY: ON" : "AUTOPLAY: PAUSED"
                })]
            }), (0, t.jsx)(c.motion.button, {
                whileHover: s ? {} : {
                    scale: 1.1,
                    backgroundColor: "rgba(239, 68, 68, 0.2)"
                },
                whileTap: s ? {} : {
                    scale: .95
                },
                disabled: s,
                onPointerDown: e => e.stopPropagation(),
                onClick: e => {
                    e.stopPropagation(), s || r()
                },
                className: `w-11 h-11 rounded-full bg-[#040814]/85 border backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all ${s?"opacity-25 border-white/10 cursor-not-allowed pointer-events-none":"opacity-100 border-white/25 hover:border-red-500 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)]"}`,
                "aria-label": "Next Memory",
                title: s ? "Pause autoplay to use arrows" : "Next photo",
                children: (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    children: (0, t.jsx)("path", {
                        d: "M9 18l6-6-6-6"
                    })
                })
            })]
        }),
        u = ({
            items: e,
            onOpenPhotoModal: s
        }) => {
            let [i, a] = (0, r.useState)(0), [o, n] = (0, r.useState)(!0), [l, d] = (0, r.useState)(!1), c = (0, r.useRef)(0), u = (0, r.useRef)(!1), m = e.length, b = (0, r.useCallback)(() => {
                0 !== m && a(e => (e + 1) % m)
            }, [m]), f = (0, r.useCallback)(() => {
                0 !== m && a(e => (e - 1 + m) % m)
            }, [m]), g = e.map(e => e.id).join(",");
            return ((0, r.useEffect)(() => {
                a(0)
            }, [g]), (0, r.useEffect)(() => {
                if (!o || m <= 1) return;
                let e = setInterval(() => {
                    a(e => (e + 1) % m)
                }, 3e3);
                return () => clearInterval(e)
            }, [o, m]), 0 === m) ? (0, t.jsx)("div", {
                className: "w-full h-[60vh] flex items-center justify-center font-mono text-slate-400",
                children: "NO MEMORIES FOUND IN THIS CATEGORY"
            }) : (0, t.jsxs)("div", {
                className: "relative w-full h-[65vh] max-h-[620px] min-h-[480px] flex items-center justify-center overflow-hidden select-none",
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onPointerDown: e => {
                    e.target.closest("button") || (u.current = !0, c.current = e.clientX)
                },
                onPointerUp: e => {
                    if (!u.current) return;
                    u.current = !1;
                    let t = e.clientX - c.current;
                    t > 50 ? f() : t < -50 && b()
                },
                children: [(0, t.jsx)(p, {
                    activeCenterId: e[i]?.id || ""
                }), (0, t.jsx)("div", {
                    className: "relative w-full max-w-6xl h-full flex items-center justify-center z-10",
                    children: e.map((e, r) => {
                        let o, n, l = 0 === (n = (o = (r - i + m) % m) > Math.floor(m / 2) ? o - m : o) ? "center" : -1 === n ? "left" : 1 === n ? "right" : -2 === n ? "far-left" : 2 === n ? "far-right" : "hidden";
                        return "hidden" === l ? null : (0, t.jsx)(x, {
                            item: e,
                            position: l,
                            isCenter: r === i,
                            onClick: () => a(r),
                            onOpenPhotoModal: s
                        }, e.id)
                    })
                }), (0, t.jsx)(h, {
                    onPrev: f,
                    onNext: b,
                    isAutoPlaying: o,
                    onToggleAutoPlay: () => n(e => !e)
                })]
            })
        };
    var m = e.i(88653);
    let b = ({
        item: e,
        onClose: r,
        onPrev: s,
        onNext: i
    }) => e ? (0, t.jsx)(m.AnimatePresence, {
        children: (0, t.jsxs)("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto",
            children: [(0, t.jsx)(c.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "absolute inset-0 bg-black/85 backdrop-blur-2xl cursor-pointer",
                onClick: r
            }), (0, t.jsxs)(c.motion.div, {
                initial: {
                    opacity: 0,
                    scale: .9,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .9,
                    y: 20
                },
                transition: {
                    duration: .35,
                    ease: [.16, 1, .3, 1]
                },
                className: "relative w-full max-w-4xl bg-[#040814] border border-white/20 rounded-3xl shadow-[0_0_90px_rgba(239,68,68,0.3)] overflow-hidden text-white z-10 flex flex-col md:flex-row max-h-[90vh]",
                children: [(0, t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-white to-sky-400 z-20"
                }), (0, t.jsx)("button", {
                    onClick: r,
                    className: "absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white/70 hover:text-white hover:bg-red-600/50 flex items-center justify-center transition-colors text-lg",
                    "aria-label": "Close photo details",
                    children: "✕"
                }), (0, t.jsx)("div", {
                    className: "relative w-full md:w-3/5 h-[300px] sm:h-[380px] md:h-[500px] bg-black",
                    children: (0, t.jsx)(d.default, {
                        src: e.src,
                        alt: e.title,
                        fill: !0,
                        sizes: "(max-width: 768px) 100vw, 60vw",
                        className: "object-contain",
                        priority: !0
                    })
                }), (0, t.jsxs)("div", {
                    className: "w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between font-mono bg-[#050b18]/90",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center space-x-2 mb-2",
                            children: [(0, t.jsx)("span", {
                                className: "w-2 h-2 rounded-full bg-red-500 animate-pulse"
                            }), (0, t.jsx)("span", {
                                className: "text-xs font-bold text-red-500 tracking-[0.25em] uppercase",
                                children: e.category
                            })]
                        }), (0, t.jsx)("h2", {
                            className: "text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2 leading-tight drop-shadow-md",
                            children: e.title
                        }), (0, t.jsx)("p", {
                            className: "text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6",
                            children: e.description
                        }), (0, t.jsx)("div", {
                            className: "border-t border-white/10 my-4"
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center justify-between space-x-3 pt-2",
                        children: [(0, t.jsx)("button", {
                            onClick: s,
                            className: "flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold tracking-wider uppercase transition-colors text-center",
                            children: "← PREVIOUS"
                        }), (0, t.jsx)("button", {
                            onClick: i,
                            className: "flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all text-center",
                            children: "NEXT →"
                        })]
                    })]
                })]
            })]
        })
    }) : null;
    e.s(["default", 0, function() {
        let [e, s] = (0, r.useState)("ALL"), [a, o] = (0, r.useState)(null), [d, c] = (0, r.useState)({
            x: 0,
            y: 0
        }), x = (0, r.useMemo)(() => i.filter(t => "ALL" === e || t.category === e), [e]), p = (0, r.useCallback)(() => {
            if (!a) return;
            let e = (x.findIndex(e => e.id === a.id) - 1 + x.length) % x.length;
            o(x[e])
        }, [a, x]), h = (0, r.useCallback)(() => {
            if (!a) return;
            let e = (x.findIndex(e => e.id === a.id) + 1) % x.length;
            o(x[e])
        }, [a, x]);
        return (0, r.useEffect)(() => {
            let e = e => {
                a && ("ArrowLeft" === e.key && p(), "ArrowRight" === e.key && h(), "Escape" === e.key && o(null))
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
        }, [a, p, h]), (0, t.jsxs)("main", {
            className: "relative w-full min-h-screen bg-[#02050e] text-white overflow-hidden selection:bg-red-600 selection:text-white select-none flex flex-col justify-between",
            onMouseMove: e => {
                let {
                    clientX: t,
                    clientY: r
                } = e, {
                    innerWidth: s,
                    innerHeight: i
                } = window;
                c({
                    x: (t / s - .5) * 2,
                    y: (r / i - .5) * 2
                })
            },
            children: [(0, t.jsx)(n, {
                mouseX: d.x,
                mouseY: d.y
            }), (0, t.jsxs)("div", {
                className: "relative z-20 pt-16 sm:pt-20 px-4 flex flex-col items-center",
                children: [(0, t.jsxs)("div", {
                    className: "inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-1",
                    children: [(0, t.jsx)("span", {
                        className: "w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"
                    }), (0, t.jsx)("span", {
                        className: "text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase",
                        children: "WEB OF MEMORIES"
                    })]
                }), (0, t.jsx)("h1", {
                    className: "text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase font-mono drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-none mb-4 text-center",
                    children: "GALLERY ARCHIVE"
                }), (0, t.jsx)(l, {
                    activeCategory: e,
                    onSelectCategory: e => {
                        s(e)
                    }
                })]
            }), (0, t.jsx)("div", {
                className: "relative z-10 w-full my-auto",
                children: (0, t.jsx)(u, {
                    items: x,
                    onOpenPhotoModal: e => o(e)
                })
            }), (0, t.jsx)(b, {
                item: a,
                onClose: () => o(null),
                onPrev: p,
                onNext: h
            })]
        })
    }], 79286)
}, 72328, e => {
    "use strict";
    e.i(47167);
    var t = e.i(71164),
        r = e.i(38544),
        s = e.i(71645);
    e.s(["useReducedMotion", 0, function() {
        t.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [e] = (0, s.useState)(t.prefersReducedMotion.current);
        return e
    }])
}]);