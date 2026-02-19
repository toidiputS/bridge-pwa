import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

const squads = [
    { name: 'Cash Velocity', nodes: 5, focus: 'Idea → Revenue in 7 Days', active: true },
    { name: 'Authority Engine', nodes: 5, focus: 'Positioning & Thought Leadership', active: false },
    { name: 'Acquisition Stack', nodes: 5, focus: 'Traffic, Funnels & Lead Gen', active: false },
    { name: 'Retention Protocol', nodes: 5, focus: 'Onboarding & Churn Defense', active: false },
    { name: 'Scale Ops', nodes: 5, focus: 'Systems, SOPs & Automation', active: false },
    { name: 'Revenue Expansion', nodes: 5, focus: 'Upsells, Cross-sells & LTV', active: false },
    { name: 'Content Arsenal', nodes: 5, focus: 'Content Strategy & Production', active: false },
    { name: 'Data Command', nodes: 5, focus: 'Analytics, Insights & Decisions', active: false },
    { name: 'Brand Forge', nodes: 6, focus: 'Identity, Voice & Visual Systems', active: false },
    { name: 'Launch Sequence', nodes: 6, focus: 'Product Launches & GTM Strategy', active: false },
];

export const PlatoonOverview: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto py-20 px-4">
            {/* Section Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={0}
                className="text-center mb-14"
            >
                <div className="h-px w-16 bg-bridge-gold/50 mx-auto mb-4" />
                <span className="text-bridge-gold text-xs uppercase tracking-[0.3em]">The Full System</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
                    52 Nodes. 10 Squads. One Platoon.
                </h2>
                <p className="text-bridge-subtext mt-3 max-w-xl mx-auto">
                    What you just saw is one squad out of ten. The full Platoon is 52 AI-powered precision tools
                    that cover every stage of building, launching, and scaling a business.
                </p>
            </motion.div>

            {/* Ecosystem Diagram */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={1}
                className="relative mb-12"
            >
                {/* Central Hub */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-bridge-gold/10 border-2 border-bridge-gold/40 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.1)]">
                            <div className="text-center">
                                <span className="text-bridge-gold text-lg font-bold block">52</span>
                                <span className="text-bridge-gold/60 text-[9px] uppercase tracking-wider">Nodes</span>
                            </div>
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-full border border-bridge-gold/10 animate-ping opacity-30" />
                    </div>
                </div>

                {/* Squad Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {squads.map((squad, i) => (
                        <motion.div
                            key={squad.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-20px" }}
                            variants={fadeUp}
                            custom={i * 0.5 + 2}
                            className={`rounded-xl p-4 border text-center transition-all ${squad.active
                                    ? 'bg-bridge-gold/5 border-bridge-gold/30 shadow-[0_0_25px_rgba(255,215,0,0.06)]'
                                    : 'bg-bridge-card/40 border-white/5'
                                }`}
                        >
                            {/* Node dots */}
                            <div className="flex justify-center gap-1 mb-3">
                                {Array.from({ length: squad.nodes }).map((_, j) => (
                                    <div
                                        key={j}
                                        className={`w-2 h-2 rounded-full ${squad.active
                                                ? 'bg-bridge-gold/60'
                                                : 'bg-white/10'
                                            }`}
                                    />
                                ))}
                            </div>

                            <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${squad.active ? 'text-bridge-gold' : 'text-white/50'
                                }`}>
                                {squad.name}
                            </h4>

                            <p className={`text-[10px] leading-relaxed ${squad.active ? 'text-bridge-subtext' : 'text-white/25'
                                }`}>
                                {squad.focus}
                            </p>

                            {squad.active && (
                                <span className="inline-block text-[8px] text-bridge-gold bg-bridge-gold/10 px-2 py-0.5 rounded-full mt-2 uppercase tracking-widest">
                                    You Are Here
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* The Vision Statement */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={8}
                className="text-center max-w-2xl mx-auto"
            >
                <div className="bg-bridge-card/60 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                        Every node is a precision tool. Every squad is a complete system.
                        The Platoon is the full operating layer for your business.
                    </p>
                    <div className="h-px bg-white/5 my-4" />
                    <div className="flex flex-wrap justify-center gap-6 text-center">
                        <div>
                            <span className="text-2xl font-bold text-white">52</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Nodes</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">10</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Squads</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">52</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Artifacts</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">14</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Domains</span>
                        </div>
                    </div>
                </div>

                <a
                    href="https://itsyouonline.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-xs text-bridge-gold/60 hover:text-bridge-gold transition-colors uppercase tracking-widest"
                >
                    Explore the full ecosystem at itsyouonline.com →
                </a>
            </motion.div>
        </section>
    );
};
