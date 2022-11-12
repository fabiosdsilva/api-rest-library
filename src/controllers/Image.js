import Image from "../models/Image";
import path from "path"

class ImageController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    try {
      if (path.extname(filename) !== ".jpg" || path.extname(filename) !== ".png" || path.extname(filename) === "") {
        return res.json("A imagem deve ser em jpg ou png");
      }

      const file = await Image.create({ originalname, filename });
      console.log(req.file);
      return res.json(file);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new ImageController();
