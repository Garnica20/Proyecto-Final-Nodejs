const express=require('express');
const router =express.Router();

router.get ('/',(req, res)=>{
    res.render('partials/index', {title: 'Proyecto Final'});
});
router.get ('/pacientes',(req, res)=>{
    res.render('partials/pacientes');
});


module.exports=router;