import { Request, Response } from 'express';

export const ImgRoutes = {
  add: (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No se subió ningún archivo.' });
    }

    // Aquí puedes manejar la lógica adicional como guardar la información en la BD
    const uploadedFile = {
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
      mimeType: req.file.mimetype,
      size: req.file.size,
    };

    return res.status(201).json({
      message: 'Imagen subida correctamente.',
      file: uploadedFile,
    });
  },
};
