import { Router } from 'express'
import { test } from '../controllers/test'
const router = Router()

router.get('/', (req, res) => {
    res.send('<h1> HOLA MUNDO DSDE WEB</h1>')
})

router.get('/test', test);

module.exports = router;