const router = require("express").Router();
const { response } = require("express");
let data = require('../data.js')
let aktors = require('../data-model');



router.get("/", (req, res, next) => {
    aktors.findActor()
      .then((aktorler) => {
        res.status(200).json(aktorler);
      })
      .catch((error) => {
        next({
          statusCode: 500,
          errorMessage: "Aktorler alinirken hata olustu.",
          error,
        });
      });
  });
       // res.status(200).json(data);
router.get('/:id', function(req, res){
    let { id } = req.params;
    const aktor = data.find(aktor => aktor.id === parseInt(id));
    console.log("req.Query", req.query)
    if(aktor){
        res.status(200).json(aktor);
    }
    else{
        res.status(404).send("büle biri yoh");
    } //i/aktorler/3?isim=mvmf
});
router.post("/", (req, res, next) => {
    const yeniAktor = req.body;
  
    if (!yeniAktor.isim) {
      next({
        statusCode: 400,
        errorMessage: "Aktor eklemek icin isim girmelisiniz.",
      });
    } else {
      aktors.addActor(yeniAktor)
        .then((added) => {
          res.status(201).json(added);
        })
        .catch((error) => {
            next({
              statusCode: 500,
              errorMessage: "Aktorler alinirken hata olustu.",
              error,
            });
          });
    }
  });

router.delete('/:id',(req, res) => {
    let silinecek_id =req.params.id;
    const silinecek = data.find(
        (aktor) => aktor.id === Number(silinecek_id) 
    );
    if (silinecek) {
            data = data.filter((aktor) => aktor.id !== Number(silinecek_id));
            res.status(204).end();
    } else {
        res
        .status(404)
        .json({errorMessage: "Büle biri zaten yok"});
    }
});
router.put('/:id', (req, res) => {
    let updateNo =req.params.id;
    //const silinecek = data.find(
      //  (aktor) => aktor.id === Number(silinecek_id) 
    const updateE = data.find(
        (aktor) => aktor.id === Number(updateNo)
    );

 if (!updateNo) {
    return res.status(404).json({})
 }
    updateE.isim = req.body.isim;
    updateE.filmler = req.body.filmler;
    res.json(updateE);
 
  });

module.exports = router;