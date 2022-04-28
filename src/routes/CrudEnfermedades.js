const express=require('express');
const router =express.Router();

router.get ('/enfermedades/agregar',(req, res)=>{
    res.render('CrudEnfermedades/agregar');
});
const Paciente=require('../models/Enfermedad');
router.post('/CrudEnfermedades/agregar',async (req,res) => {
  const {Enfermedad}=req.body;
  console.log(req.body);
  const errors=[];
  if(!Enfermedad){
    errors.push({text:'Escriba una Enfermedad'});
  }
  if(errors.length>0){
      res.render('CrudEnfermedades/agregar',{
        Enfermedad
      });
  }else{
      const newPaciente=new Paciente({Enfermedad});
     await newPaciente.save();
      res.redirect('/')
  }
});
module.exports=router;