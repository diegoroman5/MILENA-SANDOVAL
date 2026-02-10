// Service to interact with the Gemini AI via our secure API endpoint

export const getNeuroAdvice = async (userPrompt: string) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userPrompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.text || 'Lo siento, mi conexión cerebral ha tenido una interferencia. ¿Podrías preguntar de nuevo?';
  } catch (error) {
    console.error('Gemini Error:', error);
    return 'En este momento estoy optimizando mi lóbulo frontal. Por favor, intenta de nuevo en un momento.';
  }
};
