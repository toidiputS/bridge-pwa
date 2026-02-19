import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
};

const ScoreRing = () => (
    <div className="relative w-36 h-36 mx-auto">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
            <circle
                cx="50" cy="50" r="42"
                fill="none"
                stroke="#FFD700"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset="0"
                className="drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]"
            />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">10</span>
            <span className="text-sm text-bridge-subtext">/ 10.0</span>
        </div>
    </div>
);

const ScoreCard = ({ label, score, rationale }: { label: string; score: string; rationale: string }) => (
    <div className="bg-white/3 border border-white/5 rounded-xl p-4 hover:border-bridge-gold/20 transition-colors">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider">{label}</span>
            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">{score}</span>
        </div>
        <p className="text-xs text-bridge-subtext leading-relaxed">{rationale}</p>
    </div>
);

export const FeaturePreview: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto py-16 px-4">
            {/* Section Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={0}
                className="text-center mb-12"
            >
                <div className="h-px w-16 bg-bridge-gold/50 mx-auto mb-4" />
                <span className="text-bridge-gold text-xs uppercase tracking-[0.3em]">What You Get</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
                    AI-Powered Validation Artifact
                </h2>
                <p className="text-bridge-subtext mt-3 max-w-lg mx-auto">
                    5 questions. 60 seconds. A surgical report that tells you exactly where your offer stands.
                </p>
            </motion.div>

            {/* ─── CARD 1: Report Header + Score + Breakdown ─── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={1}
                className="bg-bridge-card/80 border border-white/5 rounded-2xl overflow-hidden mb-6 backdrop-blur-sm"
            >
                {/* Report Header */}
                <div className="text-center py-8 px-6 border-b border-white/5">
                    <span className="inline-block text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
                        Validation Complete
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                        Surgical Validation System for Founders
                    </h3>
                    <p className="text-xs text-bridge-subtext">
                        Generated: 2:47:08 AM &nbsp;•&nbsp; Node ID: BB
                    </p>
                </div>

                {/* Score + Breakdown Grid */}
                <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
                        {/* Score Ring */}
                        <div className="text-center">
                            <span className="text-xs text-bridge-subtext uppercase tracking-widest block mb-5">Validation Score</span>
                            <ScoreRing />
                        </div>

                        {/* Scoring Breakdown Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ScoreCard
                                label="Problem Clarity"
                                score="2/2"
                                rationale="The problem is articulated with high intensity, clarity, and specificity, focusing on 'wasted weeks' and a 'bleeding neck problem' due to a lack of surgical validation."
                            />
                            <ScoreCard
                                label="Customer Specificity"
                                score="2/2"
                                rationale="The ideal customer is precisely defined both demographically ('Bootstrap SaaS founders building their first product') and psychographically ('drowning in tool options', 'limited runway')."
                            />
                            <ScoreCard
                                label="Pricing Confidence"
                                score="2/2"
                                rationale="The pricing is justified logically, demonstrating market awareness by considering the target customer's budget and approval processes, and clearly linking it to a strong ROI."
                            />
                            <ScoreCard
                                label="Diff. Strength"
                                score="2/2"
                                rationale="The offer presents a strong, unique mechanism (precision system, Humanot protocol, single-purpose nodes) that clearly differentiates it from generic AI tools."
                            />
                            <ScoreCard
                                label="Demand Evidence"
                                score="2/2"
                                rationale="Compelling proof of demand is provided through the founder's direct personal experience, validated by conversations with multiple target customers."
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ─── CARD 2: Strengths & Weaknesses + Offer Refinement ─── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={2}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            >
                {/* Strengths & Weaknesses */}
                <div className="bg-bridge-card/80 border border-white/5 rounded-2xl p-6 backdrop-blur-sm space-y-6">
                    {/* Strengths */}
                    <div>
                        <h3 className="text-white font-semibold flex items-center gap-2 mb-4 text-lg">
                            <span className="text-green-400">✓</span> Strengths
                        </h3>
                        <div className="space-y-3">
                            {[
                                "Exceptional problem clarity and intensity, articulating a direct pain point for the target market.",
                                "Highly specific and well-defined target customer, indicating a deep understanding of their needs and constraints.",
                                "Strong and logical pricing strategy, considering both value signaling and customer accessibility.",
                                "Robust differentiation based on a unique technical approach (Humanot protocol, precision nodes) that solves common AI limitations.",
                                "Powerful and authentic demand evidence, stemming from personal experience and direct customer validation.",
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-sm">
                                    <span className="text-green-400 mt-0.5 shrink-0">•</span>
                                    <span className="text-bridge-subtext leading-relaxed">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-white/5" />

                    {/* Weaknesses */}
                    <div>
                        <h3 className="text-white font-semibold flex items-center gap-2 mb-4 text-lg">
                            <span className="text-yellow-400">⚠</span> Weaknesses
                        </h3>
                        <div className="space-y-3">
                            {[
                                "The overarching offer name isn't explicitly stated in the responses, potentially causing confusion if 'Cash Velocity Squad' is a component, not the primary offer.",
                                "While compelling, the current demand evidence relies heavily on personal anecdotes and informal conversations, which may need broader, more structured validation.",
                                "The technical benefits of 'Humanot protocol' could be further translated into direct, non-technical business outcomes for the founder to fully capture its value.",
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-sm">
                                    <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
                                    <span className="text-bridge-subtext leading-relaxed">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Offer Refinement Protocol */}
                <div className="bg-bridge-card/80 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-white font-semibold flex items-center gap-2 mb-6 text-lg">
                        <span className="text-bridge-gold">⟡</span> Offer Refinement Protocol
                    </h3>
                    <div className="space-y-6">
                        {/* P1 */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-bridge-gold/50" />
                                <span className="text-sm font-bold text-white">P1 &nbsp;Clarify Offer Name</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 ml-4">
                                <div>
                                    <span className="text-[10px] text-bridge-subtext uppercase tracking-wider block mb-1">Current</span>
                                    <p className="text-xs text-bridge-subtext leading-relaxed">The primary offer name is currently implied or tied to a product component ('Cash Velocity Squad'), potentially lacking a distinct market identity.</p>
                                </div>
                                <div>
                                    <span className="text-[10px] text-bridge-subtext uppercase tracking-wider block mb-1">Target</span>
                                    <p className="text-xs text-bridge-subtext leading-relaxed">A clear, concise, and compelling market-facing name that instantly communicates its core value.</p>
                                </div>
                            </div>
                            <div className="ml-4 bg-bridge-gold/10 text-bridge-gold text-xs px-3 py-2 rounded-lg leading-relaxed">
                                <span className="font-bold">ACTION:</span> Develop and test several distinct names for the overall validation system, ensuring it resonates with bootstrap SaaS founders.
                            </div>
                        </div>

                        <div className="h-px bg-white/5" />

                        {/* P2 */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-bridge-gold/50" />
                                <span className="text-sm font-bold text-white">P2 &nbsp;Scale Demand Validation</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 ml-4">
                                <div>
                                    <span className="text-[10px] text-bridge-subtext uppercase tracking-wider block mb-1">Current</span>
                                    <p className="text-xs text-bridge-subtext leading-relaxed">Demand evidence is strong but primarily anecdotal (personal experience, informal conversations) and could benefit from broader, more formalized data.</p>
                                </div>
                                <div>
                                    <span className="text-[10px] text-bridge-subtext uppercase tracking-wider block mb-1">Target</span>
                                    <p className="text-xs text-bridge-subtext leading-relaxed">Quantified and broader external validation through structured surveys, pilot programs, or testimonials from early adopters beyond the immediate network.</p>
                                </div>
                            </div>
                            <div className="ml-4 bg-bridge-gold/10 text-bridge-gold text-xs px-3 py-2 rounded-lg leading-relaxed">
                                <span className="font-bold">ACTION:</span> Design and execute a micro-survey or conduct 5-10 structured interviews with target founders to gather quantifiable data on their pain points.
                            </div>
                        </div>

                        <div className="h-px bg-white/5" />

                        {/* P3 */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-bridge-gold/50" />
                                <span className="text-sm font-bold text-white">P3 &nbsp;Translate Technical Differentiator to Business Benefit</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 ml-4">
                                <div>
                                    <span className="text-[10px] text-bridge-subtext uppercase tracking-wider block mb-1">Current</span>
                                    <p className="text-xs text-bridge-subtext leading-relaxed">The 'Humanot protocol' is described with technical advantages ('debuggable', 'self-healing', 'immune to JSON hell') which may not immediately resonate with all founders as direct business benefits.</p>
                                </div>
                                <div>
                                    <span className="text-[10px] text-bridge-subtext uppercase tracking-wider block mb-1">Target</span>
                                    <p className="text-xs text-bridge-subtext leading-relaxed">Clearly articulate how the technical advantages directly translate into tangible business outcomes for founders, such as faster market fit, reduced development risk, or more reliable strategic decisions.</p>
                                </div>
                            </div>
                            <div className="ml-4 bg-bridge-gold/10 text-bridge-gold text-xs px-3 py-2 rounded-lg leading-relaxed">
                                <span className="font-bold">ACTION:</span> Rephrase the benefits to emphasize founder-centric outcomes, e.g., 'ensures market insights are consistently accurate, preventing wasted development cycles.'
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ─── CARD 3: Market-Message Match ─── */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={3}
                className="bg-bridge-card/80 border border-white/5 rounded-2xl p-6 md:p-10 backdrop-blur-sm text-center"
            >
                <span className="text-bridge-gold text-xs uppercase tracking-[0.3em]">Market-Message Match</span>
                <blockquote className="mt-5 text-white/80 font-serif text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto">
                    "The offer demonstrates an exceptional match with its target market. The problem is deeply understood,
                    the customer is precisely identified, and the proposed solution's value proposition and pricing
                    directly address their critical needs and constraints. The differentiation is strong and relevant,
                    directly combating common frustrations with existing solutions. The evidence of demand, while largely
                    qualitative, is highly persuasive and authentic, suggesting a strong resonance with the market's
                    'bleeding neck' problem."
                </blockquote>
            </motion.div>
        </section>
    );
};
