# Marino India AI Chatbot Setup

AI-powered 24/7 customer support chatbot for Marino Corporation Of India.

## Model Used
- **Model**: `@cf/meta/llama-3.1-8b-instruct-fp8-fast`
- **Latency**: 300ms - 1.2 seconds
- **Free tier**: ~4,000 chats/day (10,000 neurons/day)

---

## Deployment Steps

### Step 1: Create Cloudflare Worker

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create Worker**
3. Name it: `marino-ai-agent` (or any name you prefer)
4. Click **Deploy**
5. Click **Edit Code**
6. Replace the default code with the contents of `worker.js` from this folder
7. Click **Save and Deploy**

### Step 2: Set Environment Variables

1. In your Worker, go to **Settings** tab
2. Click **Variables**
3. Add these two variables:

| Variable Name | Value |
|---------------|-------|
| `ACCOUNT_ID` | Your Cloudflare Account ID (from the URL: dash.cloudflare.com/**ACCOUNT_ID**/...) |
| `AI_TOKEN` | Your Cloudflare API Token |

**To create AI_TOKEN:**
- Go to [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
- Click **Create Token**
- Use **Custom token**
- Permissions:
  - `Account` → `Workers AI` → `Edit`
  - `Account` → `Cloudflare Workers` → `Edit`
- Copy the token and paste as `AI_TOKEN`

### Step 3: Get Your Worker URL

1. In your Worker, look for the URL pattern:
   `https://marino-ai-agent.YOUR_SUBDOMAIN.workers.dev`
2. Copy this URL

### Step 4: Add Chat Widget to Website

1. Open `chat-widget.html`
2. Find this line:
   ```javascript
   const WORKER_URL = 'https://marino-ai-agent.YOUR_SUBDOMAIN.workers.dev';
   ```
3. Replace with your actual Worker URL from Step 3
4. Copy the entire content of `chat-widget.html`
5. Paste it **before the closing `</body>` tag** in your website's `index.html`

### Step 5: Test

1. Open your website
2. Click the **💬 chat button** (bottom right)
3. Try sending a message like:
   - "What wire ropes do you sell?"
   - "I need chain slings"
   - "Get Quote"

---

## Features

✅ **24/7 Available** - Never sleeps (Cloudflare edge computing)
✅ **Fast Response** - 300ms to 1.2s latency
✅ **Product Knowledge** - Knows all Marino India products
✅ **Quick Replies** - Wire Rope, Chain Slings, Shackles, Get Quote
✅ **WhatsApp Integration** - Link to your WhatsApp for human follow-up
✅ **Mobile Responsive** - Works on phones and tablets

---

## Cost

| Component | Cost |
|-----------|------|
| Cloudflare Worker | Free (100,000 requests/day) |
| Workers AI | Free (10,000 neurons/day) |
| **Total** | **₹0** |

---

## Customization

### Change Colors
Edit the CSS in `chat-widget.html`:
```css
background: #166534; /* Change this to your brand color */
```

### Add More Quick Replies
Find this section in `chat-widget.html`:
```html
<div class="quick-replies">
  <button onclick="sendQuick('Wire Rope')">Wire Rope</button>
  <!-- Add more buttons here -->
</div>
```

### Update Product Knowledge
Edit the `systemPrompt` in `worker.js` with:
- New products
- Updated contact info
- Special offers
- FAQ answers

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Chat not opening | Check browser console for errors |
| "Having trouble connecting" | Verify WORKER_URL is correct |
| Slow responses | Model is warming up, try again |
| Exceeded quota | Wait until next day (resets 00:00 UTC) |

---

## Support

For technical issues:
- Check Cloudflare Workers AI dashboard: https://dash.cloudflare.com/8ada24dc16e811d15e431dc800f27a68/ai/workers-ai/usage
- Contact: skr3178@users.noreply.github.com

For business inquiries:
- Marino India: +91-9831144669
- Website: https://marinoindia.co.in
