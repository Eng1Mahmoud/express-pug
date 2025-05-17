import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const port = process.env.PORT || 3000;
const app = express();

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure pug as the template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// all other routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Civil Engineering Solutions | Expert Services"
  });
});

// unhandled routes
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found | BuildTech Engineers"
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
