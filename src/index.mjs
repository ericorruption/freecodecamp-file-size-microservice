import express from "express";
import multer from "multer";

export const app = express();
const upload = multer();

app.use(express.static("public"));

app.post("/", upload.single("file"), (req, res) =>
  res.send({ size: req.file.size })
);
