/**
 * GAMEVERSE - Production Static Server for Render
 * Zero-dependency Node.js HTTP server.
 * Reads process.env.PORT provided automatically by Render.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  // Parse requested URL pathname
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Default to index.html for root path
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Prevent directory traversal attacks
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  // If path is a directory, look for index.html inside
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        if (readErr.code === 'ENOENT') {
          // If specific file not found, fall back to index.html or 404
          const notFoundPath = path.join(PUBLIC_DIR, 'index.html');
          fs.readFile(notFoundPath, (fallbackErr, fallbackContent) => {
            if (!fallbackErr) {
              res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
              res.end(fallbackContent);
            } else {
              res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
              res.end('404 Not Found');
            }
          });
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end(`500 Server Error: ${readErr.code}`);
        }
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      // Cache headers for static assets
      const headers = { 'Content-Type': contentType };
      if (ext === '.html') {
        headers['Cache-Control'] = 'no-cache, must-revalidate';
      } else {
        headers['Cache-Control'] = 'public, max-age=86400'; // 1 day for assets
      }

      res.writeHead(200, headers);
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`===============================================`);
  console.log(`  GAMEVERSE Server running on port ${PORT}`);
  console.log(`  http://localhost:${PORT}`);
  console.log(`===============================================`);
});
