require('dotenv').config()

const server = require('./src/app')
const { connectDB } = require('./src/utils/db')

const PORT = process.env.PORT || 8800
const DB_URI = process.env.DB_URI

async function start() {
    try {
        await connectDB(DB_URI)
        console.log("Connected to database")

        server.listen(PORT, () => console.log(`Listenning on PORT ${PORT}`))
        
    } catch (error) {
        console.log(error);
    }
}

start()