const { SlidePhoto, RoomPhoto, OtherPhoto, } = require('../models/photo_models.js');

//use multer to accept images from form and store in uploads folder and generate the location of the image in a string
const fs = require("fs");
const getShortId = require("get-short-id");

const server_url = ""

exports.createCoverPhoto = async (req, res) => {
    try {
        var imageLinks = [];
        if(!req.files) return res.status(400).json({ success: false, message: "No files uploaded" });

        const { image1, image2, image3, image4} = req.files;

        if (image1 !== undefined) {
            const filename = getShortId();
            image1.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image1",
                        public_id: filename,
                        url: `${server_url}/uploads/${filename}.jpg`,
                    });
                }
            });
        }

        if (image2 !== undefined) {
            const filename = getShortId();
            image1.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image2",
                        public_id: filename,
                        url: `${server_url}/uploads/${filename}.jpg`,
                    });
                }
            });
        }

        if (image3 !== undefined) {
            const filename = getShortId();
            image1.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image3",
                        public_id: filename,
                        url: `${server_url}/uploads/${filename}.jpg`,
                    });
                }
            });
        }

        if (image4 !== undefined) {
            const filename = getShortId();
            image1.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image4",
                        public_id: filename,
                        url: `${server_url}/uploads/${filename}.jpg`,
                    });
                }
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getAllCoverPhotos = async (req, res) => {
    try {
        const coverPhotos = await CoverPhoto.findAll();
        res.status(200).json({ success: true, data: coverPhotos });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getCoverPhotoByRoomId = async (req, res) => {
    try {
        const coverPhoto = await CoverPhoto.findOne({ where: { room_id: req.params.room_id } });
        res.status(200).json({ success: true, data: coverPhoto });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateCoverPhoto = async (req, res) => {
    //take the multiple uploaded files and put into database
    try {
        var image1, image2, image3, image4;
        //upload multiple photos with multer upload function
        upload.array('image', 4)(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, error: err.message });
            }

            console.log(req.files);
        });
        const coverPhoto = await CoverPhoto.update({ image1, image2, image3, image4 }, { where: { room_id: req.params.room_id } });
        res.status(200).json({ success: true, data: coverPhoto });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

