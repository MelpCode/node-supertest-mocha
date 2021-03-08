const { request } = require('../app');
const { findByIdAndUpdate } = require('../models/Contact');
const Contact = require('../models/Contact');

const ctrlIndex = {}

ctrlIndex.getAllContacts = async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json({contacts:contacts});
}

ctrlIndex.getContact = async (req,res)=>{
    const {id} = req.params;
    if (id.length<24 ){
        res.status(404).json('ID is not correct');
    }else{
        const contact = await Contact.findById(id);
        if (contact===null){
            res.status(404).json("Contact not Found");
        }else{
            res.status(200).json({contact:contact});
        }
    }
}

ctrlIndex.updateContact = async (req,res)=>{
    const {id} = req.params;
    await Contact.findByIdAndUpdate(id,req.body);
    res.status(200).json({message:'Contact Updated'});
}

ctrlIndex.createNewContact = async (req,res)=>{
    const {name,lastname,address,phone} = req.body;
    if (name&&lastname&&address&&phone){
        const newContact = new Contact({name,lastname,address,phone})
        await newContact.save();
        res.status(200).json({message:'New Contact Added'})
    }else{
        res.status(400).json({message:'Contact not created'})
    }    
}

ctrlIndex.deleteContact = async (req,res)=>{
    const {id} = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({message:'Contact Deleted'});
}

module.exports = ctrlIndex;