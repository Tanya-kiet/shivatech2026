[e.socials.linkedin && (0, a.jsx)("a", {
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