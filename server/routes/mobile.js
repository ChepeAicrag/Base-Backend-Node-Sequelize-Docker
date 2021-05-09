import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1> HOLA MUNDO DSDE MOBILE</h1>')
})

module.exports = router;