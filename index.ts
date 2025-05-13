import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const port = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// congiguring pug as the template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// all other routes
app.get("/", (req, res) => {
  res.render("index");
});

// get products
app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", description: "product description 1", price: 100 },
    { name: "Product 2", description: "product description 2", price: 200 },
    { name: "Product 3", description: "product description 3", price: 300 },
  ];
  res.render("products", {
    products: products,
  });
});
// unhandled routes
app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
