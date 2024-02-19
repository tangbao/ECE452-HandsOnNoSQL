
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./key.json');

initializeApp({
  credential: cert(serviceAccount)
});


const db = getFirestore();

// add

// const docRef = db.collection('student').doc();

// docRef.set({
//   first: 'ccc',
//   last: 'ddd',
//   email: 'ccc.ddd@rutgers.edu'
// }
// );

// read all data

async function readAll() {
  const snapshot = await db.collection('student').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

readAll();