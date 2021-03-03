const multer = require('multer')
const path = require('path')

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

const multerUpload = multer({
    storage: multerStorage,
    limits: { fieldSize : 1 * 1000 * 1000 },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(ext)){
            cb(null, true)
        }else{
            cb({message: 'Your type file are forbidden'}, false)
        }
    }
})

const singleUpload = (req, res, next) => {
    const multerSingle = multerUpload.single('image')
    multerSingle(req, res, (err) => {
        if(err){
            res.status(500).send(err)
        }else{
            next()
        }
    })
}

module.exports = singleUpload