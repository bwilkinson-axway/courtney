const express = require('express')
const bodyParser = require('body-parser')
const knex = require('./db/knex')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/admin/thisismyoldroomhereitis100', (req, res) => {
    console.log('hi')
    knex('contacts')
        .then(contacts => {
            console.log(contacts)
            res.render('pages/contacts', { contacts })
        })

})

app.post('/contact', (req, res) => {
    const updatedBody = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        body: req.body.body
    }
    console.log(updatedBody)
    knex('contacts')
        .insert(updatedBody)
        .then(() => {
            res.redirect('/contact')
            console.log('Thank you!  I\'ll be in touch ASAP!')
        })
})


app.listen(process.env.PORT || 3000)
