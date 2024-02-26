const express = require('express')
const ejs = require('ejs');

const app = express()

app.set('view engine', 'ejs')

const USERS = [
    {
        username: 'george',
        name: 'George Bluth',
        email: 'george.bluth@reqres.in',
        profileImageURL: 'https://reqres.in/img/faces/1-image.jpg',
        likesIceream: true,
        hobbies: ['Singing', 'Swimming' ]
    },
    {
        username: 'janet',
        name: 'Janet Weaver',
        email: 'janet.weaver@reqres.in',
        profileImageURL: 'https://reqres.in/img/faces/2-image.jpg',
        likesIceream: false,
        hobbies: ['Swimming', 'Dancing', 'Coding', 'Reading Novels']
    },
    {
        username: 'anushka',
        name: 'Anushka Tamrakar',
        email: 'anushka@reqres.in',
        profileImageURL: 'https://reqres.in/img/faces/3-image.jpg',
        likesIceream: true,
        hobbies: ['Swimming', 'Dancing', 'Coding', 'Reading Novels']
    }
]

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.get('/not-found', (req, res) => {
    res.sendFile(__dirname + '/not-found.html')
})

// Routing Params
app.get('/users/:username', (req, res) => {
    const { username } = req.params
    const userDetails = USERS.find((user) => user.username === username)
    if(userDetails) {
        res.render('user.ejs', userDetails)
    } else {
        res.redirect('/not-found')
    }
})

app.listen(3000, () => {
  console.log('Server is up :)')
})


/*
    Template Engine / View Engine
*/