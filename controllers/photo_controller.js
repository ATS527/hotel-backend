const { SlidePhoto, RoomPhoto, OtherPhoto, CoverPhoto } = require('../models/photo_models.js');

//use multer to accept images from form and store in uploads folder and generate the location of the image in a string
const fs = require("fs");
const getShortId = require("get-short-id");

const server_url = ""

exports.createCoverPhoto = async (req, res) => {
    try {
        var imageLinks = [];
        if (!req.files) return res.status(400).json({ success: false, message: "No files uploaded" });

        const { image1, image2, image3, image4 } = req.files;

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
                    });
                }
            });
        }

        if (image2 !== undefined) {
            const filename = getShortId();
            image2.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image2",
                        public_id: filename,
                    });
                }
            });
        }

        if (image3 !== undefined) {
            const filename = getShortId();
            image3.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image3",
                        public_id: filename,
                    });
                }
            });
        }

        if (image4 !== undefined) {
            const filename = getShortId();
            image4.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    imageLinks.push({
                        name: "image4",
                        public_id: filename,
                    });
                }
            });
        }

        const coverPhoto = await CoverPhoto.create({
            id: req.body.id,
            room_id: req.body.room_id,
            image1: server_url + imageLinks[0].public_id,
            image2: server_url + imageLinks[1].public_id,
            image3: server_url + imageLinks[2].public_id,
            image4: server_url + imageLinks[3].public_id,
        });

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

exports.getCoverPhotosByRoomId = async (req, res) => {
    try {
        const coverPhoto = await CoverPhoto.findOne({ where: { room_id: req.params.room_id } });
        res.status(200).json({ success: true, data: coverPhoto });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateCoverPhoto = async (req, res) => {
    //take the multiple uploaded files and put into database
    var imageData1,imageData2,imageData3,imageData4;

    try {

        const coverPhoto = await CoverPhoto.findOne({
            where: { room_id: req.params.room_id },
        });

        if (coverPhoto === null) {
            return res.status(404).json({ success: false, message: "Cover photo not found" });
        }

        if (req.body.image1 === "true") {
            const { image1 } = req.files;

            const filename = getId();
            await image1.mv(`./public/uploads/${filename}`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                fs.unlink(`./public/uploads/${coverPhoto.image1}`, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ success: false, error: err.message });
                    }
                    coverPhoto.image1 = null;
                });
            });

            imageData1 = server_url + filename;
        }

        if (req.body.image2 === "true") {
            const filename = getId();
            await image2.mv(`./public/uploads/${filename}`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                fs.unlink(`./public/uploads/${coverPhoto.image2}`, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ success: false, error: err.message });
                    }
                    coverPhoto.image2 = null;
                });
            });

            imageData2 = server_url + filename;
        }

        if (req.body.image3 === "true") {
            const filename = getId();
            await image3.mv(`./public/uploads/${filename}`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                fs.unlink(`./public/uploads/${coverPhoto.image3}`, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ success: false, error: err.message });
                    }
                    coverPhoto.image3 = null;
                });
            });

            imageData3 = server_url + filename;
        }

        if (req.body.image4 === "true") {
            const filename = getId();
            await image4.mv(`./public/uploads/${filename}`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                fs.unlink(`./public/uploads/${coverPhoto.image4}`, (err) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ success: false, error: err.message });
                    }
                    coverPhoto.image4 = null;
                });
            });

            imageData4 = server_url + filename;
        }

        await coverPhoto.save();

        res.status(200).json({ success: true, data: coverPhoto });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteCoverPhoto = async (req, res) => {
    try {
        const coverPhoto = await CoverPhoto.findOne({
            where: { room_id: req.params.room_id },
        });

        if (coverPhoto === null) {
            return res.status(404).json({ success: false, message: "Cover photo not found" });
        }

        const image1Location = coverPhoto.image1.replace(server_url, "");
        fs.unlink(`./public/uploads/${image1Location}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, error: err.message });
            }
        });

        const image2Location = coverPhoto.image2.replace(server_url, "");
        fs.unlink(`./public/uploads/${image2Location}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, error: err.message });
            }
        });

        const image3Location = coverPhoto.image3.replace(server_url, "");
        fs.unlink(`./public/uploads/${image3Location}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, error: err.message });
            }
        });

        const image4Location = coverPhoto.image4.replace(server_url, "");
        fs.unlink(`./public/uploads/${image4Location}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, error: err.message });
            }
        });

        await coverPhoto.destroy();

        res.status(200).json({ success: true, message: "Cover photo deleted" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

