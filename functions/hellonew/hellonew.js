// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  // try {
  //   const subject = event.queryStringParameters
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: `Hello ${subject.name}` }),
  //     // // more keys you can return:
  //     // headers: { "headerName": "headerValue", ... },
  //     // isBase64Encoded: true,
  //   }
  // } catch (error) {
  //   return { statusCode: 500, body: error.toString() }
  // }
  try {
    const subject = event.queryStringParameters
    const response = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${subject.query}`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: data,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
}

module.exports = { handler }
