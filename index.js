import 'dotenv/config' // Corrected import statement

import { app } from './src/app.js'

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`) // Corrected the console log
})
