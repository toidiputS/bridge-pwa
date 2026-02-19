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
    { name: 'Legacy Vault', nodes: 5, focus: 'Legacy / VIP Strategy / Executive Transition', color: '#6366f1', domain: 'itsai.vip', active: false },
    { name: 'Ops Iron', nodes: 7, focus: 'Ops / Infrastructure / Automation', color: '#0d9488', domain: 'itsaiagent.solutions', active: false },
    { name: 'Capital Floor', nodes: 6, focus: 'Capital / Risk / Pricing / Profit', color: '#dc2626', domain: 'itsai.services', active: false },
    { name: 'Growth Engine', nodes: 9, focus: 'Growth / Acquisition / Launch / Distribution', color: '#2563eb', domain: 'itsaiagents.online', active: false },
    { name: 'Cash Velocity', nodes: 11, focus: 'Sales / Conversion / DMs / Cash Events', color: '#06b6d4', domain: 'itsai.chat', active: true },
    { name: 'Trust Shield', nodes: 6, focus: 'Trust / Support / PR / Compliance', color: '#059669', domain: 'itsai.help', active: false },
    { name: 'Brand Alive', nodes: 6, focus: 'Brand / Creative / Community / Identity', color: '#db2777', domain: 'itsai.life', active: false },
    { name: 'Intel Core', nodes: 6, focus: 'Knowledge / Intelligence / Competitive Research', color: '#ca8a04', domain: 'itsai.wiki', active: false },
    { name: 'Signal', nodes: 5, focus: 'SEO / Content Authority / Search Visibility', color: '#84cc16', domain: 'itsai.blog', active: false },
    { name: 'Convert', nodes: 5, focus: 'E-commerce / Offer Pages / Sales Assets / Checkout', color: '#b45309', domain: 'itsai.store', active: false },
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
                    67 Nodes. 10 Squads. 1 Oracle.
                </h2>
                <p className="text-bridge-subtext mt-3 max-w-xl mx-auto">
                    What you just saw is one squad. The full Platoon is 67 AI-powered sovereign nodes
                    covering every stage of building, launching, and scaling a business — each producing
                    a finished artifact you can execute on immediately.
                </p>
            </motion.div>

            {/* Oracle — Command Layer */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={1}
                className="flex justify-center mb-6"
            >
                <div className="relative group">
                    <div className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-white/20 bg-white/3 shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all group-hover:border-white/40 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]">
                        <div className="text-center">
                            <span className="text-white text-xs font-bold uppercase tracking-widest block">Oracle</span>
                            <span className="text-white/30 text-[9px] uppercase tracking-wider block mt-0.5">ORC</span>
                        </div>
                    </div>
                    {/* Pulse */}
                    <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20" />
                    {/* Label */}
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-[9px] text-white/30 uppercase tracking-widest">Command Layer · itsyouonline.com</span>
                    </div>
                </div>
            </motion.div>

            {/* Connecting line from Oracle to grid */}
            <div className="flex justify-center mb-6">
                <div className="w-px h-10 bg-linear-to-b from-white/10 to-transparent" />
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
                        custom={i * 0.4 + 2}
                        className={`rounded-xl p-4 border text-center transition-all group cursor-default ${squad.active
                                ? 'border-opacity-40 shadow-[0_0_25px_rgba(6,182,212,0.08)]'
                                : 'border-white/5 hover:border-white/10'
                            }`}
                        style={{
                            backgroundColor: squad.active ? `${squad.color}08` : 'rgba(255,255,255,0.02)',
                            borderColor: squad.active ? `${squad.color}66` : undefined,
                        }}
                    >
                        {/* Node dots */}
                        <div className="flex justify-center gap-0.5 mb-3 flex-wrap">
                            {Array.from({ length: squad.nodes }).map((_, j) => (
                                <div
                                    key={j}
                                    className="w-1.5 h-1.5 rounded-full transition-colors"
                                    style={{
                                        backgroundColor: squad.active ? `${squad.color}99` : 'rgba(255,255,255,0.08)',
                                    }}
                                />
                            ))}
                        </div>

                        <h4
                            className="text-[11px] font-bold uppercase tracking-wider mb-1 transition-colors"
                            style={{ color: squad.active ? squad.color : 'rgba(255,255,255,0.45)' }}
                        >
                            {squad.name}
                        </h4>

                        <p className={`text-[9px] leading-snug mb-2 ${squad.active ? 'text-bridge-subtext' : 'text-white/20'
                            }`}>
                            {squad.focus}
                        </p>

                        {/* Domain */}
                        <span className={`text-[8px] uppercase tracking-wider ${squad.active ? 'text-white/40' : 'text-white/15'
                            }`}>
                            {squad.domain}
                        </span>

                        {/* Node count */}
                        <div className="mt-2">
                            <span
                                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                                style={{
                                    backgroundColor: squad.active ? `${squad.color}15` : 'rgba(255,255,255,0.03)',
                                    color: squad.active ? squad.color : 'rgba(255,255,255,0.25)',
                                }}
                            >
                                {squad.nodes} nodes
                            </span>
                        </div>

                        {squad.active && (
                            <span
                                className="inline-block text-[8px] px-2 py-0.5 rounded-full mt-2 uppercase tracking-widest font-bold"
                                style={{ backgroundColor: `${squad.color}15`, color: squad.color }}
                            >
                                You Are Here
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Stats + Vision */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={8}
                className="mt-12 text-center max-w-2xl mx-auto"
            >
                <div className="bg-bridge-card/60 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                    <p className="text-white/70 text-sm leading-relaxed mb-5">
                        Every node is a sovereign precision tool. Every squad is a complete system.
                        The Oracle commands the platoon. This is the full operating layer for your business.
                    </p>
                    <div className="h-px bg-white/5 my-5" />
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div>
                            <span className="text-2xl font-bold text-white">67</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Sovereign Nodes</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">10</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Squads</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">1</span>
                            <span className="block text-[10px] text-bridge-subtext uppercase tracking-wider mt-1">Oracle</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">10</span>
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
