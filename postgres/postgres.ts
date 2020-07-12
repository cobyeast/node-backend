// require('dotenv').config()

// interface knexObj {
//   connect(): any,
//   end(): any,
//   user: string,
//   password: string,
//   host: string,
//   port: number,
//   database: string,
// }

// export const knex:knexObj = require('knex')({
//   client: 'pg',
//   connection: () => ({
//     host: process.env.PGHOST,
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDB,
//     charset: 'utf8'
//   })
// })



// Connect to Postgres
// export const client:postgres = new Client({
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDB
// })

// export async function execute() {
//   try {
//     await client.connect()
//     console.log(`Successfully connected to ${process.env.PGDB}`)
//   } catch (error) {
//     console.log(error.message)
//   } finally {
//     await client.end()
//     console.log(`Successfully closed connection with ${process.env.PGDB}`)
//   }
// }


// Stackoverflow
// https://github.com/brianc/node-postgres/issues/1123#issuecomment-557545445

// Query Search
// https://kb.objectrocket.com/postgresql/the-postgresql-schema-in-nodejs-970


// class EnhancedClient extends Client {
//   getStartupConf() {
//     if (process.env.PG_OPTIONS) {
//       try {
//         const options = JSON.parse(process.env.PG_OPTIONS);
//         return {
//           ...super.getStartupConf(),
//           ...options,
//         };
//       } catch (e) {
//         console.error(e);
//         // Coalesce to super.getStartupConf() on parse error
//       }
//     }

//     return super.getStartupConf();
//   }
// }

// const pool = new Pool({ Client: EnhancedClient });

// (async function(){
//   try {
//     await client.connect()
//     console.log(`Successfully connected to ${process.env.PGDB}`)
//   } catch (error) {
//     console.log(error.message)
//   } finally {
//     await client.end()
//     console.log(`Successfully closed connection with ${process.env.PGDB}`)
//   }
// })()