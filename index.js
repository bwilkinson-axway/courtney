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

app.get('/contact2', (req, res) => {
    res.render('pages/contact2')
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
        body: req.body.body,
        newsletter: req.body.newsletter
    }
    console.log(updatedBody)
    knex('contacts')
        .insert(updatedBody)
        .then(() => {
          res.redirect('/contact2')
          console.log('Thank you!  I\'ll be in touch ASAP!')
        })
})

app.post('/emailonly', (req, res) => {
    const updatedBody = {
        name: null,
        email: req.body.email,
        phone: null,
        body: null,
        newsletter: true
    }
    console.log(updatedBody)
    knex('contacts')
        .insert(updatedBody)
        .then(() => {
          res.redirect('/')
        })
})

app.get('/contact/:id', (req, res) => {
  knex('contacts').where('id', req.params.id).del()
  .then(() => {
    res.redirect('/admin/thisismyoldroomhereitis100')
  })
})


app.listen(process.env.PORT || 3000)
