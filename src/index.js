import fetch from "node-fetch"
import { introspectionQuery } from 'graphql/utilities/introspectionQuery'
import { buildClientSchema } from 'graphql/utilities/buildClientSchema'
import { printSchema } from 'graphql/utilities/schemaPrinter'
import { buildSchema, TypeInfo } from 'graphql'


(function getSchema() {
  const URL = 'https://dev.zx-courier.com/front/public/graphql'
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ query: introspectionQuery }),
  }).then(res => {
    res.json().then(({data}) => {
      data.__schema.types.forEach(item => console.log(item.fields))
      // console.log(res.data.__schema.types[6].fields[0].name)

    })
  }).catch()
})()