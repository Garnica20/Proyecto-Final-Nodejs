const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));//Sirve para mandar al servidor un html
    res.render('index.html', {title: 'Proyecto Final',cabeza:'home'});
});
router.get('/pacientes', (req, res)=>{
    res.render('pacientes.html', {title: 'Pacientes',cabeza:'pacientes'});
});
router.get('/enfermedades', (req, res)=>{
    res.render('enfermedades.html', {title: 'Enfermedades', cabeza:'enfermedades'});
});
router.get('/historial', (req, res)=>{
    res.render('historial.html', {title: 'Historial Clinico',cabeza:'historial'});
});
router.get('/pb-lab', (req, res)=>{
    res.render('pb-lab.html', {title: 'Pruebas de Laboratorio',cabeza:'pb-lab'});
});
router.get('/pb-muerte', (req, res)=>{
    res.render('pb-muerte.html', {title: 'Pruebas de Difuncion',cabeza:'pb-muerte'});
});
router.get('/signos', (req, res)=>{
    res.render('signos.html', {title: 'Signos',cabeza:'signos'});
});
router.get('/sintomas', (req, res)=>{
    res.render('sintomas.html', {title: 'Sintomas',cabeza:'sintomas'});
});
router.get('/usuarios', (req, res)=>{
    res.render('usuarios.html', {title: 'Usuarios',cabeza:'usuarios'});
});
module.exports=router;