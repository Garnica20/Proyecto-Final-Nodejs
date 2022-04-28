const express=require('express');
const router =express.Router();

router.get ('/pacientes/agregar',(req, res)=>{
    res.render('CrudPacientes/agregar');
});
const Paciente=require('../models/Paciente');
router.post('/CrudPacientes/agregar',async (req,res) => {
  const {Nombre,Apellido,NSS,DNI}=req.body;
  console.log(req.body);
  const errors=[];
  if(!Nombre){
    errors.push({text:'Escriba un Nombre'});
  }
  if(!Apellido){
    errors.push({text:'Escriba sus Apellidos'});
  }
  if(!NSS){
    errors.push({text:'Escriba el NSS'});
  }
  if(!DNI){
    errors.push({text:'Escriba el DNI'});
  }
  if(errors.length>0){
      res.render('Crudpacientes/agregar',{
          errors,
          Nombre,
          Apellido,
          NSS,
          DNI,
      });
  }else{
      const newPaciente=new Paciente({Nombre,Apellido,NSS,DNI});
     await newPaciente.save();
      res.redirect('/pacientes/mostrar')
  }
});
router.get('/pacientes/mostrar', async(req,res)=>{
  const pacientes=await Paciente.find().lean();
  res.render('CrudPacientes/mostrar',{pacientes});
})
module.exports=router;