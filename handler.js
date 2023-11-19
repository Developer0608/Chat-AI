// handler.js
module.exports.myFunction = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, Lambda!' }),
    };
  };
  