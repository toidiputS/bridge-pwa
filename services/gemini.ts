import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { ValidationReport } from "../types";

export const generateBridgeReport = async (answers: string[]): Promise<ValidationReport> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("BRIDGE API Key is missing. Please check your .env.local file.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          offerName: { type: SchemaType.STRING },
          problemSolved: { type: SchemaType.STRING },
          targetCustomer: { type: SchemaType.STRING },
          pricing: { type: SchemaType.STRING },
          differentiator: { type: SchemaType.STRING },
          validationScore: { type: SchemaType.NUMBER },
          scoringBreakdown: {
            type: SchemaType.OBJECT,
            properties: {
              problemClarity: {
                type: SchemaType.OBJECT,
                properties: { score: { type: SchemaType.NUMBER }, rationale: { type: SchemaType.STRING } },
                required: ["score", "rationale"]
              },
              customerSpecificity: {
                type: SchemaType.OBJECT,
                properties: { score: { type: SchemaType.NUMBER }, rationale: { type: SchemaType.STRING } },
                required: ["score", "rationale"]
              },
              pricingConfidence: {
                type: SchemaType.OBJECT,
                properties: { score: { type: SchemaType.NUMBER }, rationale: { type: SchemaType.STRING } },
                required: ["score", "rationale"]
              },
              differentiationStrength: {
                type: SchemaType.OBJECT,
                properties: { score: { type: SchemaType.NUMBER }, rationale: { type: SchemaType.STRING } },
                required: ["score", "rationale"]
              },
              demandEvidence: {
                type: SchemaType.OBJECT,
                properties: { score: { type: SchemaType.NUMBER }, rationale: { type: SchemaType.STRING } },
                required: ["score", "rationale"]
              }
            },
            required: ["problemClarity", "customerSpecificity", "pricingConfidence", "differentiationStrength", "demandEvidence"]
          },
          strengths: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
          weaknesses: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
          offerRefinement: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                priority: { type: SchemaType.NUMBER },
                issue: { type: SchemaType.STRING },
                currentState: { type: SchemaType.STRING },
                targetState: { type: SchemaType.STRING },
                action: { type: SchemaType.STRING }
              },
              required: ["priority", "issue", "currentState", "targetState", "action"]
            }
          },
          marketMessageMatch: { type: SchemaType.STRING }
        },
        required: ["offerName", "problemSolved", "targetCustomer", "pricing", "differentiator", "validationScore", "scoringBreakdown", "strengths", "weaknesses", "offerRefinement", "marketMessageMatch"]
      }
    }
  });

  const systemPrompt = `
    You are BRIDGE, a Validation Node (ID: B) for "Validate Market PWA".
    Your purpose is to validate offer-market fit with surgical precision.

    You have just asked the user 5 diagnostic questions. Now you must generate a structured validation report.

    Input Questions:
    Q1: Problem solved?
    Q2: Ideal customer?
    Q3: Pricing?
    Q4: Differentiator?
    Q5: Proof of demand?

    User Answers:
    ${answers.map((a, i) => `A${i + 1}: ${a}`).join('\n')}

    Rubric for Scoring (0-10 Total):
    - Problem Clarity (0-2): Pain intensity, clarity, specificity.
    - Customer Specificity (0-2): Demographic + psychographic clarity.
    - Pricing Confidence (0-2): Logic, market awareness.
    - Differentiation Strength (0-2): Unique mechanism, positioning.
    - Demand Evidence (0-2): Real signals vs assumptions.

    Output strictly in JSON format matching the schema provided.
    Ensure "offerRefinement" contains exactly 3 priorities sorted by impact.
    The tone should be professional, high-ticket, and direct.
  `;


  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: systemPrompt }] }],
    });

    const response = result.response.text();

    if (response) {
      return JSON.parse(response) as ValidationReport;
    } else {
      throw new Error("Empty response from Bridge Node");
    }
  } catch (error: any) {
    console.error("Bridge Validation Failed:", error);
    throw new Error(`Validation Node Offline: ${error.message || 'Unknown error'}`);
  }
};