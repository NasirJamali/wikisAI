// api/chat.js — Vercel Serverless Function
// The API key lives in Vercel's environment variables (TOGETHER_API_KEY).
// The browser never sees it — it only calls /api/chat.

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.TOGETHER_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured on server' });
  }

  const { messages, model, max_tokens = 1500, temperature = 0.45 } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  try {
    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: model || 'mistralai/Mistral-Small-24B-Instruct-2501',
        messages,
        max_tokens,
        temperature,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: err.error?.message || `Together API error ${response.status}` });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content?.trim() || '';
    return res.status(200).json({ content });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
