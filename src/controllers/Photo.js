import Photo from "../models/Photo";

class PhotoController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    try {
      const file = await Photo.create({ originalname, filename });
      console.log(req.file);
      return res.json(file);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new PhotoController();
