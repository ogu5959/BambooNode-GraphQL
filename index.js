const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// 스키마
const schema = buildSchema(`
    type Product {
        id : ID!
        name : String
        price : Int
        description : String
    }

    type Query {
        getProduct( id : ID! ) : Product

    }
`)

// 데이터
const products = [{
    id : 1,
    name : '첫번째 제품',
    price : 2000,
    description : '비고1'
},{
    id : 2,
    name : '두번째 제품',
    price : 4000,
    description : '비고2'
}]

const root = {
    getProduct : ({ id }) => products.find( product => product.id === parseInt(id))
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