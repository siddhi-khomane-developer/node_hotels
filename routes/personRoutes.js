const express =require('express');
const router=express.Router();
const person = require('./../models/person');

router.post('/',async(req, res) => {
  try{
  const data=req.body;
  const newPerson=new person(data);
  const response=await newPerson.save();
  console.log("data saved successfully");
  res.status(200).json(response);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
  });


router.get('/',async(req, res) => {
  try{
  const response=await person.find(); 
  res.status(200).json(response);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
  }); 


  router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;

    if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
      
      const response = await person.find({ work: workType }); // ✅ FIXED
      
      console.log('response fetched');
      res.status(200).json(response);
    } 
    else {
      res.status(404).json({ error: 'Invalid work type' });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const updatedPersonData=req.body;
    const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
      
      new:true,
    runValidators:true,});
    console.log("data updated successfully"); 
    res.status(200).json(response);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
})

module.exports=router;