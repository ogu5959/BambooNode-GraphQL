const { graphql , buildSchema } = require('graphql')

// 스키마 생성
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

graphql( schema , '{ lake }', root ).then( (response) => {
    console.log(response)
})