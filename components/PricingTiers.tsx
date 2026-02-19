import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
    {
        name: 'Free',
        price: '$0',
        period: '',
        description: 'Try any single node',
        features: [
            'Any single node',
            'Get your artifact',
            'Walk away',
        ],
        excluded: ['Memory', 'NotNotes', 'Oracle'],
        highlight: false,
        cta: 'Start Free',
    },
    {
        name: 'Node',
        price: '$19',
        period: '/mo',
        altPrice: '$47 lifetime',
        description: '1 node, supercharged',
        features: [
            '1 node of your choice',
            'Memory (saves context)',
            'NotNotes integration',
        ],
        excluded: ['Oracle'],
        highlight: false,
        cta: 'Get Node',
    },
    {
        name: 'Squad',
        price: '$97',
        period: ' flat',
        description: 'The full 5-node system',
        features: [
            'All 5 squad nodes',
            '5 finished artifacts',
            'Complete idea-to-cash system',
        ],
        excluded: ['Memory', 'NotNotes', 'Oracle'],
        highlight: true,
        cta: 'Get the Squad',
        badge: 'MOST POPULAR',
    },
    {
        name: 'Squad+',
        price: '$127',
        period: '/mo',
        description: 'Squad with full power',
        features: [
            'All 5 squad nodes',
            'Memory (persistent context)',
            'NotNotes integration',
        ],
        excluded: ['Oracle'],
        highlight: false,
        cta: 'Upgrade to Squad+',
    },
    {
        name: 'Platoon',
        price: '$297',
        period: '/mo',
        description: 'All 52 nodes. Everything.',
        features: [
            'All 52 nodes',
            'BooksOS memory',
            'NotNotes',
            'Oracle AI assistant',
        ],
        excluded: [],
        highlight: false,
        cta: 'Go Platoon',
        altPrice: '$1,997/yr',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
};

export const PricingTiers: React.FC = () => {
    return (
        <section className="w-full max-w-6xl mx-auto py-20 px-4">
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
                <span className="text-bridge-gold text-xs uppercase tracking-[0.3em]">Pricing</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
                    Precision Tools. Not Subscriptions.
                </h2>
                <p className="text-bridge-subtext mt-3 max-w-lg mx-auto">
                    Use it free. Or unlock the full system. No courses, no communities, no fluff.
                </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {tiers.map((tier, i) => (
                    <motion.div
                        key={tier.name}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-30px" }}
                        variants={fadeUp}
                        custom={i + 1}
                        className={`relative rounded-2xl p-5 border flex flex-col transition-all ${tier.highlight
                                ? 'bg-bridge-gold/5 border-bridge-gold/40 shadow-[0_0_40px_rgba(255,215,0,0.08)]'
                                : 'bg-bridge-card/60 border-white/5 hover:border-white/10'
                            }`}
                    >
                        {/* Badge */}
                        {tier.badge && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="bg-bridge-gold text-bridge-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    {tier.badge}
                                </span>
                            </div>
                        )}

                        {/* Tier Name */}
                        <h3 className={`text-sm font-bold uppercase tracking-wider mb-1 ${tier.highlight ? 'text-bridge-gold' : 'text-white/70'
                            }`}>
                            {tier.name}
                        </h3>

                        {/* Price */}
                        <div className="mb-3">
                            <span className="text-3xl font-bold text-white">{tier.price}</span>
                            {tier.period && <span className="text-sm text-bridge-subtext">{tier.period}</span>}
                            {tier.altPrice && (
                                <div className="text-xs text-bridge-subtext mt-0.5">or {tier.altPrice}</div>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-xs text-bridge-subtext mb-4">{tier.description}</p>

                        <div className="h-px bg-white/5 mb-4" />

                        {/* Features */}
                        <div className="space-y-2 grow">
                            {tier.features.map((feature) => (
                                <div key={feature} className="flex items-start gap-2 text-xs">
                                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                                    <span className="text-bridge-subtext">{feature}</span>
                                </div>
                            ))}
                            {tier.excluded.map((item) => (
                                <div key={item} className="flex items-start gap-2 text-xs">
                                    <span className="text-white/20 mt-0.5 shrink-0">✕</span>
                                    <span className="text-white/20">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            className={`mt-5 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${tier.highlight
                                    ? 'bg-bridge-gold text-bridge-dark hover:bg-bridge-gold/90 shadow-[0_0_15px_rgba(255,215,0,0.2)]'
                                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {tier.cta}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* What It's NOT */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={7}
                className="mt-12 text-center"
            >
                <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs text-white/30">
                    {['Not a course', 'Not a community', 'Not a coaching program', 'Not a subscription'].map((item) => (
                        <span key={item} className="px-3 py-1.5 rounded-full border border-white/5 bg-white/3">
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-bridge-subtext text-sm mt-4 max-w-md mx-auto">
                    5 precision tools. Run them once. Get 5 finished artifacts. Execute. Done.
                </p>
            </motion.div>

            {/* Hub Link */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={8}
                className="mt-8 text-center"
            >
                <a href="https://itsyouonline.com" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-bridge-gold/60 hover:text-bridge-gold transition-colors uppercase tracking-widest">
                    Part of the itsyouonline.com ecosystem →
                </a>
            </motion.div>
        </section>
    );
};
