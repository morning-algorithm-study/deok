function solution3(n: number) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      console.log(i);
      return i;
    }
  }
}

solution3(10);
