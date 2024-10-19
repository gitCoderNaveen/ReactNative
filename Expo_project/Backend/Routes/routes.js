const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser')
const clientModel = require('../Models/client-model')

router.use(bodyparser.json())

router.get('/', (req, res)=>{
    res.send('React-native-client-Page')
})

router.get('/get', (req, res)=>{
    clientModel.find({})
    .then(clients =>{
        res.json(clients)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:"internal Server Error"})
    })
})

router.post('/post', (req, res)=>{
    const newClient = new clientModel(req.body)
    newClient.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('Clients Post Page')
})

router.get('/getClientDetails', async(req, res)=>{
    const customerName = req.query.name||'';
    try {
        const myNames = await userModel.find({ name:{$regex:customerName, $options:'i'} }, 'phonenumber name address city pincode product');
        if (myNames.length>0) {
            res.json(myNames);
        } else {
            res.status(404).json({ message: 'Name not found for the specified' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
})

module.exports = router