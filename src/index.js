import express from "express";
import dotenv from "dotenv";
import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => res.json({ message: "Selamat datang di FRDS Library" }));

app.use("/api/author", authorRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/loan", loanRoutes);
app.use("/api/member", memberRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});