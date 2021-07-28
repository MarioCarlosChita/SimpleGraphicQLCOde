const { GraphQLServer }  = require('graphql-yoga');
const  path   = require('path');
const  resolvers  = require('./resolvers');

const serve  =  new GraphQLServer({
         typeDefs: path.resolve(__dirname, 'shema.graphql') , 
         resolvers 
});

//rodando o servidor ;
serve.start();



