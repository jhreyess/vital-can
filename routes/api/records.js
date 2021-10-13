const router = require('express').Router();

const Patients = require('../../models/patientsModel');
const Clients = require('../../models/clientsModel');

router.get('/patients', async (req, res) => {
    let records = await Patients.find({}).exec();
    return res.json({data: records, type: 'patients'});
});


router.get('/clients', async (req, res) => {
    let records = await Clients.find({}).exec();
    return res.json({data: records, type: 'clients'});
});

router.get('/clients/:id', async (req, res) => {
    const userdata = {};
    console.log(req.params.id);
    let clientInfo = await Clients.findOne({_id: req.params.id}).exec();
    userdata.info = clientInfo;
    let clientPets = await Patients.find({"owner.id": req.params.id }).exec();
    userdata.pets = clientPets;
    return res.json({data: userdata});
});

router.get('/patients/:id', async (req, res) => {
    let patientInfo = await Patients.findOne({_id: req.params.id}).exec();
    return res.json({data: patientInfo});
})

module.exports = router;