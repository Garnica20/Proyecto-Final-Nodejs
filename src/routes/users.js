const express=require('express');
const router =express.Router();

router.get('/singin',(req, res)=>{
    res.render ('users/singin');
});
router.get('/singup',(req, res)=>{
    res.render ('users/singup');
});
const User=require('../models/Users');
router.post('/users/singup',async (req,res) => {
  const {Nombre,Apellido,Usuario,Password,TipoUsuario}=req.body;
  const errors=[];
  if(!Nombre){
    errors.push({text:'Escriba un Nombre'});
  }
  if(!Apellido){
    errors.push({text:'Escriba sus Apellidos'});
  }
  if(!Usuario){
    errors.push({text:'Escriba un Nombre de Usuario'});
  }
  if(!Password){
    errors.push({text:'Escriba una Contraseña'});
  }
  if(TipoUsuario=="Seleccione un Usuario"){
    errors.push({text:'Eliga un Tipo de Usuario'});
  }
  if(errors.length>0){
      res.render('users/singup',{
          errors,
          Nombre,
          Apellido,
          Usuario,
          
      });
  }else{
      const newUser=new User({Nombre,Apellido,Usuario,Password,TipoUsuario});
     await newUser.save();
      res.redirect('/')
  }
});
module.exports=router;