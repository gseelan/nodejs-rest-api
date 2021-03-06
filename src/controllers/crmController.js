var mongoose = require('mongoose');
var ContactSchema = require('../models/crmModels');


const Contact = mongoose.model('Contact', ContactSchema);

const addNewContact = (req,res) =>{
    let newContact = new Contact(req.body);
    newContact.save((err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact);
    })
}

const getContacts = (req,res) =>{
    Contact.find({},(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact);
    })
}

const getContactWithID = (req,res)=>{
    Contact.findById(req.params.contactId, (err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact);
    })
}

const updateContact = (req,res)=>{
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body,{new: true},(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact);
    })
}

const deleteContact = (req,res)=>{
    Contact.findOneAndDelete({_id: req.params.contactId},(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json({message : 'Successfully deleted the contact'});
    })
}

exports.addNewContact = addNewContact;
exports.getContacts = getContacts;
exports.getContactWithID = getContactWithID;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;