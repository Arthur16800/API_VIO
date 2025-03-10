const connect = require("../db/connect")

module.exports = async function validateCpf(cpf, userId){

    const query = 'SELECT id_usuario from usuario where cpf=?';
    const values = [cpf]

    connect.query(query,values,(err, results)=>{
        if(err){

        }
        else if( results.length > 0){
            const idDoCpfCadastrado = results.length[0];

            if(userId && idDoCpfCadastrado !== userId){
                return{error:"CPF já cadastrado para outro usuário"}
            }else if(!userId){
                return{error:"CPF já cadastrado"}
            }
        }
        else{
            return null;
        }
    })
}