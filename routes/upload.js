const router = require('express').Router()
const { fileUpload } = require("../controllers/upload");
const multer = require('multer')

const upload = multer({ dest: 'uploads/' });

router.post("/", upload.single('file'), fileUpload)

module.exports = router;