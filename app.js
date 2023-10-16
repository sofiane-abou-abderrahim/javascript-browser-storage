const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {
    name: 'Max',
    age: 30
  };
  document.cookie = `uid=${userId}; max-age=360`;
  // document.cookie = `uid=${userId}; expires=`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
  // console.log(document.cookie.split(';')); // extra white space
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  // console.log(data);
  console.log(data[1].split('=')[1]); // user value
  // console.log(data.includes().split('=')[1]); // the best way to get data is to search it with the key name
});

/*

The advantages of cookies are that you can set them to expire
and that you can also send them to a server with requests.

*/
