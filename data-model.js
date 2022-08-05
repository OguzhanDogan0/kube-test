const db =require('./db-config');

module.exports = {
    findActor,
    addActor,

}

function findActor(){
    return db('aktor');
}

function addActor(yeniAktor){
   return db("aktor").insert(yeniAktor, "id").then(([id]) => {
        return db("aktor").where({id}).first();
   } );
}