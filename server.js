// server.js — Local development server
// Reads TOGETHER_API_KEY from .env and injects it into the page
// as window.__DEV_KEY so the frontend can call Together directly.
// Never run this in production — use Vercel's /api/chat instead.

const http = require('http');
const fs = require('fs');
const path = require('path');

// Load .env
try {
  const env = fs.readFileSync('.env', 'utf8');
  env.split('\n').forEach(line => {
    const [k, ...v] = line.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim().replace(/^['"]|['"]$/g, '');
  });
} catch {
  console.warn('No .env file found. Create one with TOGETHER_API_KEY=your_key');
}

const PORT = 3000;
const API_KEY = process.env.TOGETHER_API_KEY || '';

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  // Inject key into index.html
  if (urlPath === '/index.html') {
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    // Inject window.__DEV_KEY before </head>
    html = html.replace('</head>', `<script>window.__DEV_KEY="${API_KEY}";</script>\n</head>`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(html);
  }

  // Serve other static files
  const filePath = path.join(__dirname, urlPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    return res.end(fs.readFileSync(filePath));
  }

  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`\n  WikisAI dev server running`);
  console.log(`  → http://localhost:${PORT}\n`);
  if (!API_KEY) console.warn('  ⚠ No TOGETHER_API_KEY found in .env\n');
});
