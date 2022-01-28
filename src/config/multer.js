import multer from "multer";
import path from "path";

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  // fileFilter: (req, file, cb) => {
  //   const mimes = [
  //     'image/png',
  //     'image/jpge',
  //     'image/jpg',
  //     'image/gif',
  //   ];

  //   /**
  //    * Se a img que eu mandar estiver dentro do array mimes
  //    * Então eu vou retornar true
  //    * Senão vou lançar um erro no callback do FILEFILTER
  //    */
  //   if (mimes.includes(file.mimetype)) {
  //     cb(null, true);
  //   }
  //   cb(new Error('O formato da imagem é inválido'), false);
  // },

};
