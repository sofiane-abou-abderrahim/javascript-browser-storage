const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

// 1. The first step with IndexedDB is that you create a database or open a connection to an existing one.
const dbRequest = indexedDB.open('StorageDummy', 1); // this is not promise based, instead this "open" method here returns a so-called request

// 2. Getting access to the database through that event object and configuring it
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products'); // gives direct access to that object store we're trying to establish a connection to
    productStore.add({
      id: 'p1', // you need to have your key path here in the object
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  }; // initializing the object store
};

/*

This is more structured data stored in there without the need to encode it with JSON or anything like that
and of course you can store multiple such objects with ease here, all identified through their key

*/

// 3. Handling errors
dbRequest.onerror = function (event) {
  console.log('ERROR!');
};

storeBtn.addEventListener('click', () => {});

retrBtn.addEventListener('click', () => {});
