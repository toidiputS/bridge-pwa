import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
    {
        id: 'BB',
        name: 'BRIDGE',
        role: 'Offer Validator',
        pain: "I don't know if this offer actually hits a real problem",
        artifact: 'Validation Score + Offer Refinement + Market-Message Match',
        active: true,
    },
    {
        id: 'W',
        name: 'WARP',
        role: '7-Day Launch Sprint',
        pain: "I sit on ideas forever and never launch",
        artifact: '7-day sprint map + daily task breakdown',
        active: false,
    },
    {
        id: 'D',
        name: 'DYNAMO',
        role: 'Hooks Generator',
        pain: "No one pays attention to my offer",
        artifact: '10 scroll-stopping hooks + creative angles',
        active: false,
    },
    {
        id: 'J',
        name: 'JUNO',
        role: 'DM Appointment Sniper',
        pain: "I can't book calls or sales from cold messages",
        artifact: 'DM script set + booking confirmation flow',
        active: false,
    },
    {
        id: 'JJ',
        name: 'JOLT',
        role: 'Dead Lead Reactivator',
        pain: "I need cash NOW from my existing list",
        artifact: '7-day reactivation campaign + email/DM scripts',
        active: false,
    },
];

const flowLabels = ['Validate', 'Launch', 'Attract', 'Book', 'Monetize'];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
};

export const SquadFlow: React.FC = () => {
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
                <span className="text-bridge-gold text-xs uppercase tracking-[0.3em]">Cash Velocity Squad</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
                    5 Nodes. 5 Artifacts. One System.
                </h2>
                <p className="text-bridge-subtext mt-3 max-w-lg mx-auto">
                    From stuck idea to revenue in 7 days. Each node solves one problem and produces one finished artifact.
                </p>
            </motion.div>

            {/* Flow Pipeline — Horizontal on desktop, vertical on mobile */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="hidden md:flex items-center justify-between mb-12 relative"
            >
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-white/10 -translate-y-1/2 z-0" />
                <div className="absolute top-1/2 left-[10%] w-[16%] h-px bg-bridge-gold/50 -translate-y-1/2 z-0" />

                {nodes.map((node, i) => (
                    <motion.div
                        key={node.id}
                        variants={fadeUp}
                        custom={i + 1}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${node.active
                                    ? 'bg-bridge-gold/20 border-bridge-gold text-bridge-gold shadow-[0_0_20px_rgba(255,215,0,0.2)]'
                                    : 'bg-bridge-card border-white/10 text-bridge-subtext'
                                }`}
                        >
                            {node.id}
                        </div>
                        <span className={`mt-2 text-xs font-semibold uppercase tracking-wider ${node.active ? 'text-bridge-gold' : 'text-white/60'}`}>
                            {node.name}
                        </span>
                        <span className="text-[10px] text-bridge-subtext mt-0.5">{flowLabels[i]}</span>
                        {node.active && (
                            <span className="text-[9px] text-bridge-gold bg-bridge-gold/10 px-2 py-0.5 rounded-full mt-2">
                                YOU ARE HERE
                            </span>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Node Detail Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {nodes.map((node, i) => (
                    <motion.div
                        key={node.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                        variants={fadeUp}
                        custom={i + 2}
                        className={`rounded-xl p-4 border transition-all ${node.active
                                ? 'bg-bridge-gold/5 border-bridge-gold/30 shadow-[0_0_30px_rgba(255,215,0,0.05)]'
                                : 'bg-bridge-card/60 border-white/5 hover:border-white/10'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${node.active ? 'bg-bridge-gold/20 text-bridge-gold' : 'bg-white/5 text-white/40'
                                }`}>
                                {node.id}
                            </span>
                            <span className={`text-sm font-bold ${node.active ? 'text-white' : 'text-white/70'}`}>
                                {node.name}
                            </span>
                        </div>
                        <p className="text-xs text-bridge-subtext mb-2 italic">"{node.pain}"</p>
                        <div className="h-px bg-white/5 my-2" />
                        <p className="text-[11px] text-bridge-subtext">
                            <span className="text-white/50 uppercase text-[9px] tracking-wider">Artifact: </span>
                            {node.artifact}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Flow Summary */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={8}
                className="mt-10 text-center"
            >
                <div className="inline-flex items-center gap-2 text-sm text-bridge-subtext flex-wrap justify-center">
                    {flowLabels.map((label, i) => (
                        <React.Fragment key={label}>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${i === 0
                                    ? 'bg-bridge-gold/15 text-bridge-gold border border-bridge-gold/30'
                                    : 'bg-white/5 text-white/50'
                                }`}>
                                {label}
                            </span>
                            {i < flowLabels.length - 1 && <span className="text-white/20">→</span>}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
