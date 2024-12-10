import { translate } from '@vitalets/google-translate-api';

export default async function handler(req, res) {
  const { from, to, text } = req.query;
  
  try {
    const { text: translatedText } = await translate(text, { 
      from: from, 
      to: to 
    });
    
    res.status(200).json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
