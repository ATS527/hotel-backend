const Other_Inventories = require("../models/other_inventories_model");

exports.createOtherInventory = async (req, res) => {
    try {
        const otherInventory = await Other_Inventories.create(req.body);
        res.status(201).json({ success: true, data: otherInventory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getAllOtherInventories = async (req, res) => {
    try {
        const otherInventories = await Other_Inventories.findAll();
        res.status(200).json({ success: true, data: otherInventories });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
};

exports.getOtherInventoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const otherInventory = await Other_Inventories.findByPk(id);
        if (!otherInventory) {
            return res
                .status(404)
                .json({ success: false, error: "Other inventory not found" });
        }
        res.status(200).json({ success: true, data: otherInventory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
}

exports.updateOtherInventory = async (req, res) => {
    try {
        const { id } = req.params;
        const otherInventory = await Other_Inventories.findByPk(id);
        if (!otherInventory) {
            return res
                .status(404)
                .json({ success: false, error: "Other inventory not found" });
        }
        await otherInventory.update(req.body);
        res.status(200).json({ success: true, data: otherInventory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
}

exports.deleteOtherInventory = async (req, res) => {
    try {
        const { id } = req.params;
        const otherInventory = await Other_Inventories.findByPk(id);
        if (!otherInventory) {
            return res
                .status(404)
                .json({ success: false, error: "Other inventory not found" });
        }
        await otherInventory.destroy();
        res.status(200).json({ success: true, data: otherInventory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
}