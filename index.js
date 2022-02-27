const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        hello : String,
        lake : Int
    }
`)

const root = {
    hello : () => 'hello world',
    lake : () => 35
}

const app = express()
app.use( '/graphql' , graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}))

app.listen(4000, ()=>{
    console.log('Express server on port 4000!')
})