// fonte de dados 

const users =[
      {id:1 , name:'teste simples' , email:'mariochita@gmail.com'} , 
      {id:2 , name:'code simples' , email:'palmiracarlos@gmail.com'} ,
      {id:3 , name:'code simples' , email:'teste@gmail.com'}
];

module.exports ={
     Query:{ 
        users:()=> users,
        user:(_,{id})=> users[id-1]  
     },
     Mutation:{
        createUser:()=>{}  
     }
}
 