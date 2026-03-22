const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name:
    { type:String,
        required:true

    },
    age: Number,
    email: String,
    work:
    {
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:
    {
        type:String,
        required:true,
        
    }
});

//create person model
const person=mongoose.model('person',personSchema);
//export person model
module.exports=person;  