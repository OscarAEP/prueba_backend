const { MongoClient } = require('mongodb')
    // or as an es module:
    // import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'prueba'

export async function connect() {
    // Use connect method to connect to the server
    try {
        await client.connect()
        console.log('DB is connected')
        return client.db(dbName)
    } catch (error) {
        console.log('no se pudo conectar')
    }

}