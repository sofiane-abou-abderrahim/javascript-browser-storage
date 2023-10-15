const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
  // localStorage.setItem('uid', userId);
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user)); // we can convert this to JSON because JSON actually is a string "{}"
});

retrBtn.addEventListener('click', () => {
  // const extractedId = localStorage.getItem('uid');
  // it's a synchronous action so it's actually not asynchronous as you could think,
  // you don't need a promise or a callback here,
  // this synchronously access the storage and gives you back a data immediately
  const extractedId = sessionStorage.getItem('uid');
  // Session storage data lives as long as your page is open in the browser
  // so as long as you have it in an active tab even if you reload the page.
  // Thereafter if you ever close that tab or close all tabs where your application is running or a close the entire browser,
  // session storage is cleared.
  // Local storage survives this, local storage is never cleared unless the user clears it manually
  // or the browser clears it because it's running out of space or anything like that

  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if (extractedId) {
    console.log('Got the Id - ' + extractedId);
  } else {
    console.log('Could not find id.');
  }
});
