const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

const handler = (req, res)=>{
    res.send('hello form my second node');
}

app.get('/', (req, res)=>{
    res.send('wow ! I am excited  moon hello from my second ever node server and I am learning node and express ');
});


const users = [
    {id:0, name:'Sharifa', email:'sabedin201@gmail.com', phone:'01739073984'},
    {id:1, name:'Abedin', email:'abedin201@gmail.com', phone:'01739073984'},
    {id:2, name:'Moon', email:'Moon201@gmail.com', phone:'01739073984'},
    {id:3, name:'Rubina', email:'Rabedin201@gmail.com', phone:'01739073984'},
    {id:4, name:'Karina', email:'Karina201@gmail.com', phone:'01739073984'},
    {id:5, name:'Munira', email:'Munira201@gmail.com', phone:'01739073984'},
    {id:6, name:'Jarina', email:'Jarina201@gmail.com', phone:'01739073984'},
    {id:7, name:'Jamila', email:'Jamila201@gmail.com', phone:'01739073984'},
    {id:8, name:'Durina', email:'Durina201@gmail.com', phone:'01739073984'},
    {id:9, name:'sakhina', email:'Sakhina201@gmail.com', phone:'01739073984'},
    {id:10, name:'Tarina', email:'Tarina201@gmail.com', phone:'01739073984'},
    {id:11, name:'horrem', email:'Horrem201@gmail.com', phone:'01739073984'},

]

app.get('/users',(req, res)=>{
    // use query parameter or search query parameter
const search = req.query.search; 
if (search){
const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes
(search));
res.send(searchResult);
}
else{
    res.send(users);
}
   
});

// app.Method
app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})



const fruits = [
    {
        id:0, name:'mango', color:'green & yellow', taste:'sweet'
    },
    
    {
        id:1, name:'orange', color:'yellow', taste:'sweet'
    },
    
    {
        id:2, name:'apple', color:'green & yellow', taste:'sweet'
    },
    
    {
        id:3, name:'banana', color:'yellow', taste:'sweet'
    },
    
    {
        id:4, name:'date', color:'red', taste:'sweet'
    },
    
    {
        id:5, name:'guava', color:'green', taste:'sweet'
    },
    {
        id:6, name:'carrot', color:'orange', taste:'sweet'
    },
    {
        id:7, name:'boroi', color:'green & yellow', taste:'sweet'
    },
    

]

app.get('/fruits/mangoes/amrapali',(req, res)=>{
    res.send('Yummy Yummy my favourite fruite is amrapali which is very taste to eat !!!')
})
// get all objects of array
app.get('/fruits',(req, res)=>{
    res.send(fruits);
})
// dynamic api or get specific id by search
app.get('/fruits/:id',(req, res)=>{
    const id = req.params.id;
    const fruit = fruits[id]
    res.send(fruit);
})
app.listen(port, ()=>{
    console.log('listening to port', port);
})