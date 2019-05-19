import * as functions from 'firebase-functions';
import * as express from 'express';
import * as corsLib from 'cors';
const cors = corsLib({origin: true});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'user') {
  
  const exUser = express()
  exUser.use(cors)

  exUser.post('/', (request, response) => {
    // 正常終了
    request.statusCode = 200
    response.send(JSON.stringify({ message: 'Hello from Firebase!祝TypeScriptデビュー♪'}))
    response.end()
    return
  })
  exports.user = functions.https.onRequest(exUser)
}