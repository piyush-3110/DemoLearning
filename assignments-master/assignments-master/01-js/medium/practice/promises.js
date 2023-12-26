function myOwnAsync(durations) {
  let p = new Promise((resolve) => {
    setTimeout(() => {
      console.log("I am before");
      resolve();
    }, 3000);
  });
  return p;
}

myOwnAsync(3000).then(() => {
  console.log("I am fulfilled");
});
console.log("I am after");
