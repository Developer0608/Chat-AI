const duckduckgo = require('node-duckduckgo');

async function search() {
  const results = await duckduckgo.search('hello world');
  console.log(results);
}

search();