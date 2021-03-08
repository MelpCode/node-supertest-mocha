
const ctrlIndex = require('../controllers/index.controller');

const {Router} = require('express');

const router = Router();

router.get('/api/contacts',ctrlIndex.getAllContacts);
router.post('/api/contacts',ctrlIndex.createNewContact);
router.get('/api/contacts/:id',ctrlIndex.getContact);
router.delete('/api/contacts/:id',ctrlIndex.deleteContact);
router.put('/api/contacts/:id',ctrlIndex.updateContact);

module.exports = router;