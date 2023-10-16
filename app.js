const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

// 2. making the db connection global
let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

// 3. created onsuccess method
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  };
};

dbRequest.onerror = function (event) {
  console.log('ERROR!');
};

// 1. storing the object inside the event listener
storeBtn.addEventListener('click', () => {
  if (!db) {
    return;
  }
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productStore.add({
    id: 'p2',
    title: 'A Second Product',
    price: 122.99,
    tags: ['Expensive', 'Luxury']
  });
});

// 4. retrieving the object
retrBtn.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productStore.get('p2');

  request.onsuccess = function () {
    console.log(request.result);
  };
});

/*

So some aspects which can be confusing for sure, it is the API IndexedDB offers,
though because it's a bit clunky with all these handler assignments here,
there actually are third-party libraries,
most importantly idb.js

*/
