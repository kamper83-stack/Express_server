import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from your first server!" }));
});
server.listen(3000, () =>
  console.log("Server running on http://localhost:3000"),
);

const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from your second server!" }));
});
server2.listen(3001, () =>
  console.log("Server running on http://localhost:3001"),
);
