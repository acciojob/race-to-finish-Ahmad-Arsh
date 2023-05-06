const promises = [
  new Promise(resolve => setTimeout(() => resolve('Promise 1'), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 2'), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 3'), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 4'), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve('Promise 5'), Math.random() * 5000))
];

Promise.any(promises).then(result => {
    document.getElementById('output').innerHTML = result;
});