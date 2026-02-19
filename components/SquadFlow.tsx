import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
    { id: 'BB', name: 'BRIDGE', role: 'Offer Validator', pain: "I don't know if this offer actually hits a real problem", artifact: 'Validation score / offer refinement / market-message match report', active: true },
    { id: 'J', name: 'JUNO', role: 'DM Appointment Sniper', pain: "I can't book calls or sales from cold messages", artifact: 'DM script set / booking confirmation flow', active: false },
    { id: 'JJ', name: 'JOLT', role: 'Dead Lead Reactivator', pain: "I need cash NOW from my existing list", artifact: '7-day reactivation campaign / email + DM scripts', active: false },
    { id: 'LK', name: 'LINK', role: 'Closing Protocol', pain: "I can't close — I keep losing at the pitch", artifact: 'Closing protocol / conversion audit', active: false },
    { id: 'LC', name: 'LOCUS', role: 'Lead Intent Scorer', pain: "I don't know which leads are actually ready to buy", artifact: 'Lead intent score / retargeting map', active: false },
    { id: 'MN', name: 'MIND', role: 'Buyer Psychology', pain: "I don't understand what moves my buyer psychologically", artifact: 'Psychological profile / influence strategy', active: false },
    { id: 'KN', name: 'KNOT', role: 'Scarcity Protocol', pain: "I have no scarcity or urgency in my offer", artifact: 'Scarcity protocol / gate plan', active: false },
    { id: 'KX', name: 'KINETIX', role: 'VSL Builder', pain: "I have no VSL", artifact: 'VSL script + storyboard', active: false },
    { id: 'QK', name: 'QUARK', role: 'Copy Optimizer', pain: "My copy doesn't convert", artifact: 'Optimized copy + logic score', active: false },
    { id: 'XR', name: 'X-RAY', role: 'Funnel Diagnostics', pain: "My funnel is leaking and I don't know where", artifact: 'Funnel friction report / optimization list', active: false },
    { id: 'YD', name: 'YIELD', role: 'Upsell Architect', pain: "I have no upsell or value ladder", artifact: 'Upsell map / value-add copy', active: false },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-[#06b6d4] text-xs uppercase tracking-[0.3em]">Cash Velocity Squad</span>
                    <span className="w-2 h-2 rounded-full bg-[#06b6d4]/50" />
                    <span className="text-white/30 text-[10px] uppercase tracking-wider">itsai.chat</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
                    11 Nodes. 11 Artifacts. One Mission.
                </h2>
                <p className="text-bridge-subtext mt-3 max-w-lg mx-auto">
                    From stuck idea to closed revenue. Each node solves one sales problem and produces one finished artifact.
                </p>
                <p className="text-white/30 text-xs mt-2 italic">
                    "Operators who have leads but can't close, convert, or create immediate cash."
                </p>
            </motion.div>

            {/* Node Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {nodes.map((node, i) => (
                    <motion.div
                        key={node.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                        variants={fadeUp}
                        custom={i + 1}
                        className={`rounded-xl p-4 border transition-all ${node.active
                                ? 'bg-[#06b6d4]/5 border-[#06b6d4]/30 shadow-[0_0_25px_rgba(6,182,212,0.06)]'
                                : 'bg-bridge-card/60 border-white/5 hover:border-white/10'
                            }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${node.active ? 'bg-[#06b6d4]/20 text-[#06b6d4]' : 'bg-white/5 text-white/35'
                                }`}>
                                {node.id}
                            </span>
                            <span className={`text-xs font-bold ${node.active ? 'text-white' : 'text-white/60'}`}>
                                {node.name}
                            </span>
                        </div>
                        <p className="text-[10px] text-bridge-subtext mb-2 italic leading-snug">"{node.pain}"</p>
                        <div className="h-px bg-white/5 my-2" />
                        <p className="text-[10px] text-bridge-subtext leading-snug">
                            <span className="text-white/40 uppercase text-[8px] tracking-wider">Artifact: </span>
                            {node.artifact}
                        </p>
                        {node.active && (
                            <span className="inline-block text-[8px] text-[#06b6d4] bg-[#06b6d4]/10 px-2 py-0.5 rounded-full mt-2 uppercase tracking-widest font-bold">
                                You Are Here
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
