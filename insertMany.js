const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@***.***.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);


async function run() {

      const database = client.db("handson");
      const userCollection = database.collection("user");
      // create a document to insert
      

      for (let i=200000; i <400000; i++)
      {
        try {
        const newUser = {
            ssn:"123-456-000"+i, 
            email:"user"+i+"@email.com", 
            name:"Gildong Hong "+i, 
            age: Math.floor(Math.random()*100),
            DateOfBirth: "1st Jan.", 
            Hobbies:["Martial arts"],
            Addresses:[{"Address Name":"Work","Street":"431, Teheran-ro GangNam-gu ","City":"Seoul", "Zip":"06159"}], 
            Phones:[{"type":"mobile","number":"010-5555-1234"}]
          };

        const result = await userCollection.insertOne(newUser);
        if (i%1000==0)        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        } catch
        {
          console.log(`A document insertion fails #: ${i}`);
        }
      }
      await client.close();
  }

  run().catch(console.dir);