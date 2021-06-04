const express=require("express");
const app=express();
const port=1100;

app.use(express.json());
const users=[{
    id:1,
    name:'kuldeep saini',
    sallary:10101,
},
{
    id:2,
    name:'sumit saini',
    sallary:10101,
},
{
    id:3,
    name:' sandeep saini',
    sallary:10101,
},
{
    id:4,
    name:'prem saini',
    sallary:10101,
},
]
app.get('/api/users',(req,res)=>{
    res.send(users)
})
app.post('/api/users',(req,res)=>{
    if(req.body.name.length<3){
        res.status(400).send("please write more than 3 words");
    }
    const user={
        id:users.length+1,
        name:req.body.name,
    };

    users.push(user);
    res.send(user);
})
app.get('/api/users/:id',(req,res)=>{
  const user=users.find(user=>user.id===parseInt(req.params.id))
  if(!user){
      res.status(404).send("user does not exits")
  }
  res.send(user);
})
app.put('/api/users/:id',(req,res)=>{
    const user=users.find(user=>user.id===parseInt(req.params.id));
    if(!user){
        res.status(404).send('user does not exist');
    }
    user.name=req.body.name;
    res.send(users);
})

app.delete('/api/users/:id',(req,res)=>{
  const user=users.find(user=>user.id===parseInt(req.params.id));
  if(!user){
      res.status(404).send('user does not exist');
  }
  const index=users.indexOf(user);
  users.splice(index,1);
  res.send(users);
})
app.listen(port,()=>{
    console.log("hello i am running");
})