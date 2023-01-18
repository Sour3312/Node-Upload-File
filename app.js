const exp = require("express");
const mult = require("multer");
const fs = require("fs");

const app = exp();
const multerr = mult({
  storage: mult.memoryStorage(),
});

app.post("/upload", multerr.single("file"), async (req, res) => {
  const file = req.file;
  console.log(file);
  fs.writeFileSync(__dirname + "/srv " + file.originalname, file.buffer);

  res.status(200).json({
    status: "OK",
  });
});

app.listen(4000, () => {
  console.log("server has started");
});
