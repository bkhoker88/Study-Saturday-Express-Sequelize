const router = require('express').Router();
const Test = require('../db/models/test');

router.get('/', async (req, res, next) =>{
  try{
    const tests = await Test.findAll()
    res.send(tests)

  }catch(err){
    next(err)
  }
})

router.get('/:id', async (req, res, next)=> {
  try{
    const id = req.params.id
    let test = await Test.findByPk(id)

   if(test) res.send(test)
   else res.status(200).send('error')

  }catch(err){
    next(err)
  }
})

router.post('/:id', async (req, res, next)=> {
  try{

  }catch(err){
    next(err)
  }
} )


// router.post('/', async (req, res, next) => {
//   try {
//     let student = await Student.create(req.body);
//     res.status(201).send(student);
//   } catch (err) {
//     next(err);
//   }
// });

// router.put('/:id', async (req, res, next) => {
//   try {
//     let updatedStudentInfo = await Student.update(req.body, {
//       where: { id: req.params.id },
//       returning: true,
//       plain: true,
//     });
//     res.send(updatedStudentInfo[1]);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete('/:id', async (req, res, next) => {
//   try {
//     await Student.destroy({ where: { id: req.params.id } });
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// });





module.exports = router;
