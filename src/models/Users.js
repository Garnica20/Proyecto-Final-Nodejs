const mongoose = require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    Nombre: {type: String,required:true},
    Apellido: {type: String,required:true},
    Usuario: {type: String,required:true},
    Password: {type: String,required:true},
    TipoUsuario: {type: String,required:true},

});
module.exports=mongoose.model('Usuario',UserSchema);