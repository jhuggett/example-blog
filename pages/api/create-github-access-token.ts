import { createAuthHandler } from 'next-tinacms-github'

export default createAuthHandler(
  process.env.APP_CLIENT_ID || "",
  process.env.APP_CLIENT_SECRET || ""
)


// exports.handler = function(event, context, callback) {
//   const authHandler = createAuthHandler(
//     process.env.APP_CLIENT_ID || "",
//     process.env.APP_CLIENT_SECRET || ""
//   )

//   const resp = authHandler(event, context)

//   if (resp) {

//   }
// }