window.promises = [];
const promises = [];

for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => resolve(delay), delay * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").innerHTML = result;
  })
  .catch((error) => {
    console.error(error);
  });
// Do not change the code above this
// add your promises to the array `promises`
