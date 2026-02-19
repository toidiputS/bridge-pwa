import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithEmail } from '../services/supabase';

interface EmailGateProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const EmailGate: React.FC<EmailGateProps> = ({ isOpen, onClose, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setLoading(true);
        setError('');

        try {
            await signInWithEmail(email);
            setSent(true);
            // Allow immediate access on free tier — magic link is for persistent access later
            setTimeout(() => {
                onSuccess();
            }, 2000);
        } catch (err: any) {
            setError(err.message || 'Failed to send. Please try again.');
            setLoading(false);
        }
    };

    const handleSkip = () => {
        // Free tier: let them use without email, but no memory/persistence
        onSuccess();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-bridge-card border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!sent ? (
                            <>
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-bridge-gold/10 border border-bridge-gold/30 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-bridge-gold text-lg font-bold">BB</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                                        Access BRIDGE — Free
                                    </h3>
                                    <p className="text-sm text-bridge-subtext">
                                        Enter your email to get your validation artifact. No payment required.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full px-4 py-3 bg-bridge-dark border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-bridge-gold/50 focus:ring-1 focus:ring-bridge-gold/20 transition-all text-sm"
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-red-400 text-xs">{error}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading || !email.trim()}
                                        className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-bridge-gold text-bridge-dark hover:bg-bridge-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                                    >
                                        {loading ? 'Sending...' : 'Get Free Access'}
                                    </button>
                                </form>

                                {/* Skip option */}
                                <button
                                    onClick={handleSkip}
                                    className="w-full mt-3 py-2 text-xs text-white/30 hover:text-white/50 transition-colors"
                                >
                                    Skip — use without account
                                </button>

                                {/* Fine print */}
                                <p className="text-[10px] text-white/20 text-center mt-4">
                                    Free tier: 1 node, no memory, no NotNotes. Upgrade anytime.
                                </p>
                            </>
                        ) : (
                            /* Success state */
                            <div className="text-center py-4">
                                <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white mb-2">Check Your Email</h3>
                                <p className="text-sm text-bridge-subtext mb-1">
                                    We sent a login link to <span className="text-white">{email}</span>
                                </p>
                                <p className="text-xs text-bridge-subtext">
                                    Launching BRIDGE in a moment...
                                </p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
