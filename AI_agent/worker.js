// Marino India AI Chatbot Worker
// Model: @cf/meta/llama-3.1-8b-instruct-fp8-fast (Fastest - 300ms to 1.2s)

export default {
  async fetch(request, env) {
    // CORS headers for your website
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only accept POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    // Parse the incoming message
    const { message, history = [] } = await request.json();

    // 🚀 FASTEST MODEL: llama-3.1-8b-instruct-fp8-fast
    const MODEL = '@cf/meta/llama-3.1-8b-instruct-fp8-fast';

    // Marino India Product Knowledge
    const systemPrompt = `You are a helpful AI assistant for Marino Corporation Of India, a leading industrial lifting equipment supplier based in Kolkata with 40+ years of experience.

COMPANY INFORMATION:
- Name: Marino Corporation Of India
- Address: 28 Orphangunj Road, Kidderpore, Kolkata 700023, West Bengal
- Phone/WhatsApp: +91-9831144669
- Website: https://marinoindia.co.in
- Experience: 40+ years in the industry
- Delivery: All India (Pan India delivery available)

PRODUCTS WE SELL:
1. Wire Ropes - Galvanized, Ungalvanized, PVC Coated, Stainless Steel
2. Chain Slings - Grade 80, Grade 100, Single/Multi-leg configurations
3. Polyester Slings - Webbing slings, Round endless slings, Multi-leg slings
4. Wire Rope Slings - With thimble, various configurations available
5. Shackles - D-Shackles, Bow Shackles, Grade 80, Stainless Steel 304
6. Hooks - Clevis hooks, Eye hooks, Swivel hooks, Self-locking hooks
7. Pulley Blocks - Manila rope pulleys, Wire rope pulleys
8. Chain Hoists - Manual and Electric
9. Turnbuckles - Eye-eye, Hook-hook, Eye-hook types
10. Plate Lifting Clamps - Horizontal and vertical
11. Permanent Magnetic Lifters
12. Builder Hoists and Winches

GUIDELINES:
- Be professional, helpful, and concise (under 3 sentences)
- For pricing: "Contact +91-9831144669 for current rates"
- Ask about capacity/tonnage for technical specs
- Offer WhatsApp for quick quotes
- If unsure, suggest calling the office`;

    try {
      const startTime = Date.now();

      // Call Cloudflare AI using the native binding
      const result = await env.AI.run(MODEL, {
        messages: [
          { role: 'system', content: systemPrompt },
          ...history.slice(-4), // Keep last 4 exchanges
          { role: 'user', content: message }
        ],
        max_tokens: 250,
        temperature: 0.7
      });

      const latency = Date.now() - startTime;

      // Extract the response
      const reply = result.response || "I'm sorry, I couldn't process that. Please call us at +91-9831144669.";

      return new Response(
        JSON.stringify({ 
          reply, 
          latency: `${latency}ms`,
          model: MODEL 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (error) {
      return new Response(
        JSON.stringify({ 
          reply: "Sorry, I'm having trouble. Please contact us at +91-9831144669.",
          error: error.message 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  }
};
