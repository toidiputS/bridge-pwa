import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppState, ValidationReport } from './types';
import { generateBridgeReport } from './services/gemini';
import { Logo } from './components/Logo';
import { QuestionFlow } from './components/QuestionFlow';
import { ReportView } from './components/ReportView';
import { Button } from './components/Button';
import { FeaturePreview } from './components/FeaturePreview';
import { SquadFlow } from './components/SquadFlow';
import { PricingTiers } from './components/PricingTiers';

// Utility to generate the raw text format for "NotNotes"
const generateArtifactText = (report: ValidationReport) => {
  return `
BRIDGE VALIDATION REPORT
Generated: ${new Date().toISOString()}

OFFER SNAPSHOT
Name: ${report.offerName}
Problem Solved: ${report.problemSolved}
Target Customer: ${report.targetCustomer}
Pricing: ${report.pricing}
Differentiator: ${report.differentiator}

VALIDATION SCORE: ${report.validationScore} / 10

Scoring Breakdown:
Problem Clarity: ${report.scoringBreakdown.problemClarity.score}/2 - ${report.scoringBreakdown.problemClarity.rationale}
Customer Specificity: ${report.scoringBreakdown.customerSpecificity.score}/2 - ${report.scoringBreakdown.customerSpecificity.rationale}
Pricing Confidence: ${report.scoringBreakdown.pricingConfidence.score}/2 - ${report.scoringBreakdown.pricingConfidence.rationale}
Differentiation Strength: ${report.scoringBreakdown.differentiationStrength.score}/2 - ${report.scoringBreakdown.differentiationStrength.rationale}
Demand Evidence: ${report.scoringBreakdown.demandEvidence.score}/2 - ${report.scoringBreakdown.demandEvidence.rationale}

STRENGTHS
${report.strengths.map(s => `✅ ${s}`).join('\n')}

WEAKNESSES
${report.weaknesses.map(w => `⚠️ ${w}`).join('\n')}

OFFER REFINEMENT
${report.offerRefinement.map(r => `
Priority ${r.priority}: ${r.issue}
Current state: ${r.currentState}
Target state: ${r.targetState}
Action: ${r.action}
`).join('')}

MARKET-MESSAGE MATCH REPORT
${report.marketMessageMatch}

END OF REPORT
  `.trim();
};

export default function App() {
  const [state, setState] = useState<AppState>(AppState.WELCOME);
  const [report, setReport] = useState<ValidationReport | null>(null);

  const handleStart = () => {
    setState(AppState.QUESTIONS);
  };

  const handleQuestionsComplete = async (answers: string[]) => {
    setState(AppState.ANALYZING);
    try {
      const generatedReport = await generateBridgeReport(answers);
      setReport(generatedReport);
      setState(AppState.REPORT);
    } catch (error: any) {
      console.error("Failed to generate report", error);
      // In a real app, handle error state better. 
      // For now, reset to allow retry if needed or show alert.
      alert(error.message || "Validation Node Offline. Please check your connection or API Key.");
      setState(AppState.WELCOME);
    }
  };

  const handleCommit = () => {
    if (!report) return;

    // Simulate Handoff to NotNotes
    console.log("Hey Not, BRIDGE here. I have a validation report ready to commit.");
    console.log(generateArtifactText(report));

    setState(AppState.COMMITTING);
    setTimeout(() => {
      setState(AppState.FINISHED);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-bridge-dark text-bridge-text font-sans selection:bg-bridge-gold/30 selection:text-white overflow-x-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bridge-card rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bridge-gold/5 rounded-full blur-[120px] opacity-10" />
      </div>

      <header className="relative z-50 p-6 flex justify-between items-center border-b border-white/5 bg-bridge-dark/50 backdrop-blur-sm">
        <Logo />
        <div className="hidden md:block">
          <span className="text-xs text-bridge-subtext uppercase tracking-widest">Node ID: B</span>
        </div>
      </header>


      <main className="grow flex flex-col justify-center py-12 px-4 relative z-10">
        <AnimatePresence mode="wait">
          {state === AppState.WELCOME && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Hero Section */}
              <div className="text-center max-w-2xl mx-auto space-y-8 min-h-[60vh] flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <div className="h-px w-20 bg-bridge-gold/50 mx-auto mb-4"></div>
                  <span className="text-bridge-gold text-xs uppercase tracking-[0.3em]">Offer Validation Protocol</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                  Validate Your <br />
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-500">Offer-Market Fit</span>
                </h1>
                <p className="text-lg text-bridge-subtext max-w-md mx-auto leading-relaxed">
                  A diagnostic tool to assess whether your offer hits a bleeding neck problem with enough clarity to convert.
                </p>
                <div className="pt-8">
                  <Button onClick={handleStart} className="text-lg px-10 py-4">
                    Initiate Validation
                  </Button>
                </div>
              </div>

              {/* Feature Preview Section */}
              <FeaturePreview />

              {/* Squad Flow Section */}
              <SquadFlow />

              {/* Pricing Section */}
              <PricingTiers />

              {/* Bottom CTA */}
              <div className="text-center py-16">
                <Button onClick={handleStart} className="text-lg px-10 py-4">
                  Start Your Validation — Free
                </Button>
              </div>
            </motion.div>
          )}

          {state === AppState.QUESTIONS && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <QuestionFlow onComplete={handleQuestionsComplete} />
            </motion.div>
          )}

          {state === AppState.ANALYZING && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center space-y-6"
            >

              <div className="flex flex-col items-center">
                <Logo className="scale-150 mb-12" />
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-4 border-white/5 rounded-full"></div>
                  <div className="absolute inset-0 border-t-4 border-bridge-gold rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white animate-pulse">AI</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif text-white mb-2">Generating Artifact</h2>
                <p className="text-bridge-subtext">Calculating validation score...</p>
              </div>

            </motion.div>
          )}

          {state === AppState.REPORT && report && (
            <motion.div
              key="report"
              className="w-full"
            >
              <ReportView report={report} onCommit={handleCommit} />
            </motion.div>
          )}

          {state === AppState.COMMITTING && (
            <motion.div
              key="committing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="text-bridge-gold animate-pulse text-xl font-serif">Syncing with NotNotes...</div>
            </motion.div>
          )}

          {state === AppState.FINISHED && (
            <motion.div
              key="finished"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center space-y-6 h-full"
            >
              <div className="text-center">
                <Logo className="scale-150 mb-12 justify-center" />
                <div className="w-16 h-16 border border-bridge-gold rounded-full flex items-center justify-center mx-auto mb-6 text-bridge-gold">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-serif text-white mb-4">Transmission Complete</h2>
                <p className="text-bridge-subtext">Session Terminated.</p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div >
  );
}
