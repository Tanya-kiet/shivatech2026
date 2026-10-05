(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 42988, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(71645),
        n = e.i(72328);
    e.s(["default", 0, function() {
        let e = (0, i.useRef)(null),
            r = (0, n.useReducedMotion)();
        return ((0, i.useEffect)(() => {
            let t;
            if (r) return;
            let i = e.current;
            if (!i) return;
            let n = i.getContext("2d");
            if (!n) return;
            let a = [],
                o = window.innerWidth,
                s = window.innerHeight,
                l = () => {
                    o = window.innerWidth, s = window.innerHeight, i.width = o, i.height = s, d()
                },
                d = () => {
                    a = [];
                    let e = window.innerWidth < 768 ? 50 : 150;
                    for (let t = 0; t < e; t++) a.push({
                        x: Math.random() * o - o / 2,
                        y: Math.random() * s - s / 2,
                        z: 1e3 * Math.random(),
                        speed: 2 * Math.random() + 1,
                        size: 1.5 * Math.random() + .5
                    })
                },
                c = !0,
                u = () => {
                    c = window.scrollY < 1.1 * window.innerHeight
                },
                h = () => {
                    if (!c) {
                        t = requestAnimationFrame(h);
                        return
                    }
                    n.fillStyle = "rgba(0, 0, 0, 0.2)", n.fillRect(0, 0, o, s);
                    let e = o / 2,
                        i = s / 2;
                    a.forEach(t => {
                        t.z -= 2 * t.speed, t.z <= 0 && (t.z = 1e3, t.x = Math.random() * o - e, t.y = Math.random() * s - i);
                        let r = 800 / t.z,
                            a = e + t.x * r,
                            l = i + t.y * r,
                            d = Math.max(.1, t.size * r),
                            c = Math.min(1, (1e3 - t.z) / 500);
                        n.beginPath(), n.arc(a, l, d, 0, 2 * Math.PI), t.x < 0 ? n.fillStyle = `rgba(220, 38, 38, ${c})` : n.fillStyle = `rgba(37, 99, 235, ${c})`, n.fill()
                    }), t = requestAnimationFrame(h)
                };
            return window.addEventListener("resize", l), window.addEventListener("scroll", u, {
                passive: !0
            }), l(), h(), () => {
                window.removeEventListener("resize", l), window.removeEventListener("scroll", u), cancelAnimationFrame(t)
            }
        }, [r]), r) ? null : (0, t.jsx)("canvas", {
            ref: e,
            className: "layer-particles absolute inset-0 z-[5] pointer-events-none mix-blend-screen opacity-80 will-change-transform"
        })
    }])
}, 57549, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(46932);
    e.s(["default", 0, function() {
        return (0, t.jsx)("div", {
            className: "absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 md:opacity-30 mix-blend-screen",
            children: (0, t.jsxs)(i.motion.svg, {
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
                    [...Array(12)].map((e, i) => (0, t.jsx)("line", {
                        x1: "50",
                        y1: "50",
                        x2: (50 + 50 * Math.cos(i * Math.PI / 6)).toFixed(3),
                        y2: (50 + 50 * Math.sin(i * Math.PI / 6)).toFixed(3)
                    }, `line-${i}`)), [10, 20, 30, 40, 50].map((e, i) => (0, t.jsx)("polygon", {
                        points: Array.from({
                            length: 8
                        }).map((t, i) => {
                            let n = i * Math.PI / 4;
                            return `${(50+e*Math.cos(n)).toFixed(3)},${(50+e*Math.sin(n)).toFixed(3)}`
                        }).join(" ")
                    }, `poly-${i}`))
                ]
            })
        })
    }])
}, 72328, e => {
    "use strict";
    e.i(47167);
    var t = e.i(71164),
        i = e.i(38544),
        n = e.i(71645);
    e.s(["useReducedMotion", 0, function() {
        t.hasReducedMotionListener.current || (0, i.initPrefersReducedMotion)();
        let [e] = (0, n.useState)(t.prefersReducedMotion.current);
        return e
    }])
}]);