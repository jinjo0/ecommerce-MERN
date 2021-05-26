import express from 'express'
import multer from 'multer'
import path from 'path'
const router = express.Router()
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})
function checkFile(f, fn) {
  const types = /jpg|jpeg|png/
  const test = types.test(path.extname(f.originalname).toLowerCase())
  const mimetype = types.test(f.mimetype)

  if (test && mimetype) return fn(null, true)
  else return fn('Only Images Files are allowed for upload!')
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFile(file, cb)
  },
})

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})
export default router
