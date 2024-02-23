const express = require('express')
const ejs = require('ejs');

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.get('/users/george', (req, res) => {
    res.render('user.ejs', {
        name: 'George Bluth',
        email: 'george.bluth@reqres.in',
        profileImageURL: 'https://reqres.in/img/faces/1-image.jpg',
        likesIceream: true,
        hobbies: ['Singing', 'Swimming' ]
    })
})

app.get('/users/janet', (req, res) => {
    res.render('user.ejs', {
        name: 'Janet Weaver',
        email: 'janet.weaver@reqres.in',
        profileImageURL: 'https://reqres.in/img/faces/2-image.jpg',
        likesIceream: false,
        hobbies: ['Swimming', 'Dancing', 'Coding', 'Reading Novels']
    })
})

app.listen(3000, () => {
  console.log('Server is up :)')
})


/*
    Template Engine / View Engine
*/