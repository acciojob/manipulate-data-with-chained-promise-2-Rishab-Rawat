//your JS code here. If required.
function processArray(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
    .then((arr) => {
      return new Promise((resolve) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        setTimeout(() => {
          document.getElementById('output').textContent = evenNumbers.join(', ');
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenArr) => {
      return new Promise((resolve) => {
        const multipliedNumbers = evenArr.map(num => num * 2);
        setTimeout(() => {
          document.getElementById('output').textContent = multipliedNumbers.join(', ');
          resolve(multipliedNumbers);
        }, 2000);
      });
    });
}

// Usage
processArray([1, 2, 3, 4]);