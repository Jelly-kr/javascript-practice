function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
    console.log(total);
  }
  return total;
}

console.log(addUpTo(12));
