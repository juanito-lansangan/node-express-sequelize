var express    = require('express');
var router     = express.Router();

router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadedFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  uploadedFile.mv('public/uploads/'+uploadedFile.name, function(err) {
    if (err)
      return res.status(500).send(err);

    res.json({
      message: 'Upload Succesull'
    });
  });
});

module.exports = router;
