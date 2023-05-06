const otherInventoryRouter = require('express').Router();

const {
    createOtherInventory,
    getAllOtherInventories,
    getOtherInventoryById,
    updateOtherInventory,
    deleteOtherInventory,
} = require('../controllers/other_inventories_controller');

otherInventoryRouter.post('/createOtherInventory', createOtherInventory);

otherInventoryRouter.get('/getAllOtherInventories', getAllOtherInventories);

otherInventoryRouter.get('/getOtherInventoryById/:id', getOtherInventoryById);

otherInventoryRouter.put('/updateOtherInventory/:id', updateOtherInventory);

otherInventoryRouter.delete('/deleteOtherInventory/:id', deleteOtherInventory);

module.exports = otherInventoryRouter;