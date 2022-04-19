const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const route = express.Router();
const Contact = require('../schema/Schema');


// adding a new user
route.post('/newuser',async (req, res)=> {
    const user = req.body
    try {
        const contact = await new Contact(user)
        await contact.save()
        res.status(200).send({"User added successfully" : contact})
    } catch (error) {
        console.log(error)
    }
});

// finding a user
route.get('/getuser', async (req, res) =>{
    try {
        const contact = await Contact.find()
        res.status(200).send({"got users" : contact})
    } catch (error) {
        console.log(error)
    }
})

// updating a user
route.put('/edituser/:id', async (req, res)=> {
    const {id} = req.params;
    const {name, age, favoriteFoods} = req.body;
    try {
        const contact = await Contact.findByIdAndUpdate(id, {$set : {name, age, favoriteFoods}});
        res.status(200).send({"user edited" : contact});
    } catch (error) {
        console.log(error);
    }
});

// deleting a user
route.delete('/deleteuser/:id',async (req, res)=>{
    const {id} = req.params
    try {
        const contact = await Contact.findByIdAndDelete(id)
        res.status(200).send("Deleted user")
    } catch (error) {
        console.log(error)
    }
})



// exporting routes to server
module.exports = route