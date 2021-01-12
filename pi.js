var loops = await input("number of loops to run? ");
var pi = 0;
for (var i = 1; i < loops; i++) {
  if (i % 2 == 0) {
    pi += 4 * (1.0 / (2 * i - 1));
  } else {
    pi -= 4 * (1.0 / (2 * i - 1));
  }
  println(i, pi);
  //if (i % 100 == 0) await input();
}
