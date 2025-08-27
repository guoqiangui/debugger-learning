addEventListener("message", (e) => {
  let total = 0;
  let count = e.data;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  postMessage(total);
});
