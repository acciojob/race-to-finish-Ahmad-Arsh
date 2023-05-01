const promises = [];

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then(result => {
    document.getElementById("output").innerHTML = `The first promise to resolve took ${result} seconds.`;
  })
  .catch(error => {
    console.log(error);
  });
