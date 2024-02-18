
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tb:<password>@cluster0.osvojq0.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// insert

async function createListing(client, newListing){
    const result = await client.db("ece452demo2").collection("student").insertOne(newListing);
    console.log(`New student created with the following id: ${result.insertedId}`);
}

createListing(client,
    {
        name: "aaa bbb",
        email: "aaa.bbb@rutgers.edu"
    }
);

// query

// async function findOneListingByName(client, nameOfStudent) {
//     const result = await client.db("ece452demo2").collection("student").findOne({ name: nameOfStudent });

//     if (result) {
//         console.log(`Found a student in the collection with the name '${nameOfStudent}':`);
//         console.log(result);
//     } else {
//         console.log(`No students found with the name '${nameOfStudent}'`);
//     }
// }

// findOneListingByName(client, "aaa bbb");