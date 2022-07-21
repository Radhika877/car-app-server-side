/*
Initialise the node project.
*/

const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8090;

async function main(){
    try{
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch(err){
        console.error('Error occurred while starting server', err);
        console.log(err)
    }
}

main()
