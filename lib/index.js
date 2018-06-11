import fetch from "node-fetch";
// import { introspectionQuery } from 'graphql/utilities/introspectionQuery'
// import { buildClientSchema } from 'graphql/utilities/buildClientSchema'

(function getSchema() {
  const URL = 'https://dev.zx-courier.com/front/public/graphql';
  fetch(URL).then(res => {
    res.json().then(parsedResponse => console.log(parsedResponse));
  }).catch();
})();