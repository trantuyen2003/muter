const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/gallery', (req, res) => {

    fs.readdir(path.join(__dirname, 'uploads'), (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        res.render('gallery', { images: files });
    });
});

app.post('/upload', upload.single('image'), (req, res) => {
    res.redirect('/gallery');
});

app.listen(3001, () => {
    console.log("Server dang chay o cong 3001");
});