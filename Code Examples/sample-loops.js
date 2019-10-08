function range(num) {
  const arr = [];
  for (let i = 0; i < num; i += 1){
    arr.push(0);
  }
  return arr;
}

const arr = range(5);

for(let i = 0; i < arr.length; i += 1) {
  arr[i] = `position-${i}`;
}

console.log(arr);

// there have historically been some subtle problems with forEach,
// which makes it non-preferred

arr.forEach((i) => {
  console.log(i);
})

// Other examples of how to do this, using in-place mutation

let count = 0;
let text = '';

while (count < 10) {
  text += "The number is " + count;
  count++;
}

console.log('count going forward', count);