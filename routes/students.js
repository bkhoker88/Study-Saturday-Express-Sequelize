const router = require('express').Router();
const Student = require('../db/models/student');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).send(students);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);

    if (student) res.status(200).send(student);
    else res.sendStatus(404);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const post = await Student.create(req.body)

    res.status(201).send(post)
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next)=> {
  try{
    const id = req.params.id;
    const student = await Student.findByPk(id);
    student.update(req.body)

    res.status(200).send(student)
  }catch(err){
    next(err)
  }
})

router.delete('/:id', async (req, res, next)=>{
  try{
     const id = req.params.id;
     const student = await Student.findByPk(id);

     student.destroy()
    res.status(204).send(student)
  }catch(err){
    next(err)
  }
})


module.exports = router;
