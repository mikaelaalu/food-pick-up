const contentful = require("contentful");

const spaceKey = process.env.REACT_APP_SPACE_KEY;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
console.log(spaceKey);

const client = contentful.createClient({
  space: spaceKey,
  accessToken: accessToken,
});

export default client;
