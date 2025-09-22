const express = require("express");
const router = express.Router(); 
const {pool} = require('../config/db');

router.get('/tours/:limit/:offset', async(req,res) => {
    try{
        const {limit = 10, offset = 0} = req.params;
        const toures = await pool.query('select * from tourApp.tours limit $1 offset $2',[limit, offset]);
        return res.json(toures.rows);
    }catch(error){
        console.error(error);
        return res.status.json({mensaje : "Error 500 al querer retornar la lista de tours!"});
    }
    
});

router.get('/tours/availability', async(req,res) =>{
    try{
        const disponibles = 0 ;
    }catch(error){

    }
});


router.put('/tours/reserve', async(req,res)=> {
    try{
        const reservas = 0;
    }catch(error){

    }
});



module.exports = router;