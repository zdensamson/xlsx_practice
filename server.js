const express = require('express');
const expresFileUpload = require('express-fileupload');
const xlReader = require('./excelReader');

const app = express();

app.use(expresFileUpload());

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.post('/upload', (req, res) => {
    if(!req.files || Object.keys(req.files).length == 0) {
        return res.status(400).send("No files were uploaded");
    }

    // req.files.NAME OF INPUT TAG
    let uploadedFile = req.files.myFile;

    xlReader(uploadedFile.data);
});



app.listen(PORT, 'localhost', () => {
    console.log('Server is now listening!')
})