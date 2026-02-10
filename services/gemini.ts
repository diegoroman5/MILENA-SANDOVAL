
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `Eres el Asistente AI de Milena Sandoval. Milena es una reconocida Neuro-Experta en Alta Performance, CEO de Evolucione y experta en gimnasia cerebral.

Tu misión es:
1. Responder preguntas sobre gimnasia cerebral, metaprendizaje y lectura rápida.
2. Mantener un tono profesional, elegante, inspirador y empoderador (como el de Milena).
3. Invitar amablemente a los usuarios a conocer los programas de "Evolucione" si preguntan cómo profundizar.
4. Hablar siempre en español de forma fluida y cercana.

Sobre Milena: Tiene 25 años de experiencia, vive en Guadalajara, México, y colabora en Telemundo. Su frase es: "Trabaja más en ti que en tu proyecto".`;

export const getNeuroAdvice = async (userPrompt: string) => {
  // Use the process.env.API_KEY string directly when initializing the @google/genai client instance
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Lo siento, mi conexión cerebral ha tenido una interferencia. ¿Podrías preguntar de nuevo?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "En este momento estoy optimizando mi lóbulo frontal. Por favor, intenta de nuevo en un momento.";
  }
};
