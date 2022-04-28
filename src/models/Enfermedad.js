const { VERSION } = require('ejs');
const mongoose = require('mongoose');
const {Schema}=mongoose;
const EnfermedadesSchema=new Schema({
    Enfermedad: {type: String,required:true},
    
});
module.exports=mongoose.model('Enfermedades',EnfermedadesSchema);