const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

storeBtn.addEventListener('click', () => {
  localStorage.setItem('uid', userId);
});

retrBtn.addEventListener('click', () => {
  const extractedId = localStorage.getItem('uid');
  // it's a synchronous action so it's actually not asynchronous as you could think,
  // you don't need a promise or a callback here,
  // this synchronously access the storage and gives you back a data immediately
  if (extractedId) {
    console.log('Got the Id - ' + extractedId);
  } else {
    console.log('Could not find id.');
  }
});
