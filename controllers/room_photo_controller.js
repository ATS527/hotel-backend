const Photos = require('../models/room_photo_model.js');
const Activity_Log = require("../models/activity_log_model.js");

//use multer to accept images from form and store in uploads folder and generate the location of the image in a string
const fs = require("fs");
const { nanoid } = require("nanoid");

const server_url = process.env.SERVER_URL || "http://localhost:3000/uploads/";

exports.createRoomPhoto = async (req, res) => {
    try {
        if (!req.files) return res.status(400).json({ success: false, message: "No files uploaded" });

        const photo = await Photos.create({
            id: req.body.id,
            room_id: req.body.room_id,
        });

        const { image1, image2, image3, image4 } = req.files;


        if (image1 !== undefined) {
            const filename = nanoid();
            image1.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    photo.image1 = server_url + filename + '.jpg';
                }
            });
        }

        if (image2 !== undefined) {
            const filename = nanoid();
            image2.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    photo.image2 = server_url + filename + '.jpg';
                }
            });
        }

        if (image3 !== undefined) {
            const filename = nanoid();
            image3.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    photo.image3 = server_url + filename + '.jpg';
                }
            });
        }

        if (image4 !== undefined) {
            const filename = nanoid();
            image4.mv(`./public/uploads/${filename}.jpg`, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                } else {
                    photo.image4 = server_url + filename + '.jpg';
                }
            });
        }

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Room Photo created with data ${JSON.stringify(req.body)}`
        });

        setTimeout(async () => {
            await photo.save();
            res.status(200).json({ success: true, data: photo });
        }, 5000);

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getAllRoomPhotos = async (req, res) => {
    try {
        const photos = await Photos.findAll();
        res.status(200).json({ success: true, data: photos });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getRoomPhotoById = async (req, res) => {
    try {
        const photo = await Photos.findOne({ where: { room_id: req.params.room_id } });
        res.status(200).json({ success: true, data: photo });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateRoomPhoto = async (req, res) => {
    try {

        const photo = await Photos.findOne({
            where: { room_id: req.body.room_id },
        });

        if (photo === null) {
            return res.status(404).json({ success: false, message: "Photo not found" });
        }

        if (req.files.image1 !== undefined) {
            const { image1 } = req.files;

            const filename = nanoid();
            await image1.mv(`./public/uploads/${filename}.jpg`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                if (photo.image1 !== null) {
                    const strippedFilename = photo.image1.replace(server_url, "");

                    fs.unlink(`./public/uploads/${strippedFilename}`, (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ success: false, error: err.message });
                        }
                        photo.image1 = server_url + filename + '.jpg';
                    });
                } else {
                    photo.image1 = server_url + filename + '.jpg';
                }
            });
        }

        if (req.files.image2 !== undefined) {
            const { image2 } = req.files;
            console.log("called here");
            const filename = nanoid();
            await image2.mv(`./public/uploads/${filename}.jpg`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                if (photo.image2 !== null) {
                    const strippedFilename = photo.image2.replace(server_url, "");

                    fs.unlink(`./public/uploads/${strippedFilename}`, (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ success: false, error: err.message });
                        }
                        photo.image2 = server_url + filename + '.jpg';
                    });
                } else {
                    photo.image2 = server_url + filename + '.jpg';
                }
            });
        }

        if (req.files.image3 !== undefined) {
            const { image3 } = req.files;
            const filename = nanoid();
            await image3.mv(`./public/uploads/${filename}.jpg`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                if (photo.image3 !== null) {
                    const strippedFilename = photo.image3.replace(server_url, "");

                    fs.unlink(`./public/uploads/${strippedFilename}`, (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ success: false, error: err.message });
                        }
                        photo.image3 = server_url + filename + '.jpg';
                    });
                } else {
                    photo.image3 = server_url + filename + '.jpg';
                }
            });
        }

        if (req.files.image4 !== undefined) {
            const { image4 } = req.files;
            const filename = nanoid();
            await image4.mv(`./public/uploads/${filename}.jpg`, async function (err) {

                if (err) {
                    console.log(err);
                    return res.status(500).json({ success: false, error: err.message });
                }

                if (photo.image4 !== null) {
                    const strippedFilename = photo.image4.replace(server_url, "");

                    fs.unlink(`./public/uploads/${strippedFilename}`, (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ success: false, error: err.message });
                        }
                        photo.image4 = server_url + filename + '.jpg';
                    });
                } else {
                    photo.image4 = server_url + filename + '.jpg';
                }
            });
        }

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Room with room id: ${req.body.room_id} updated ${req.body.type} photos`
        });

        setTimeout(async () => {
            await photo.save();
            res.status(200).json({ success: true, data: photo });
        }, 5000);

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.getAllPhotosByRoomId = async (req, res) => {
    try {
        const photos = await Photos.findAll({ where: { room_id: req.params.room_id } });

        if (photos === null) {
            return res.status(404).json({ success: false, message: "Photos not found" });
        }

        res.status(200).json({ success: true, data: photos });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

async function deleteRoomPhotosFunction(imageLocation) {
    fs.unlink(`./public/uploads/${imageLocation}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ success: false, error: err.message });
        }
        console.log("Image deleted");
    });
}

exports.deleteRoomPhotos = async (req, res) => {
    try {
        const photo = await Photos.findOne({
            where: { room_id: req.params.room_id },
        });

        if (photo === null) {
            return res.status(404).json({ success: false, message: "Room photo not found" });
        }

        if (photo.image1 !== null) {
            await deleteRoomPhotosFunction(photo.image1.replace(server_url, ""));
        }

        if (photo.image2 !== null) {
            await deleteRoomPhotosFunction(photo.image2.replace(server_url, ""));
        }

        if (photo.image3 !== null) {
            await deleteRoomPhotosFunction(photo.image3.replace(server_url, ""));
        }

        if (photo.image4 !== null) {
            await deleteRoomPhotosFunction(photo.image4.replace(server_url, ""));
        }

        const activityLog = await Activity_Log.create({
            log_id: nanoid(),
            manager_id: req.user.id,
            log: `Photo ${req.query.room_id} deleted`
        });

        setTimeout(async () => {
            await photo.destroy();
            res.status(200).json({ success: true, message: "Cover photo deleted" });
        }, 3000);

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
}