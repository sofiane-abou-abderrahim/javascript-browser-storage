// console.log(document.cookie);

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  document.cookie = `uid=${userId}`;
  // Under the hood, this simply uses a setter function which triggers when you assign a new value
  // and that setter function will then add this as a new key-value pair to the existing pairs instead of replace the existing ones.
});
// unlike local and session storage, cookies really only are available
// if your web page is getting served with a real server
// and the file protocol simply just doesn't simulate real circumstances under
// which our page would be served

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
});
