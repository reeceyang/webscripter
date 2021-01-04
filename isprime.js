var x = await input("enter a number to check if it is prime: ");
if (x % 2 == 0) {
  println(x, " is divisible by 2");
  return;
}
if (x % 3 == 0) {
  println(x, " is divisible by 3");
  return;
}
for (var i = 1; i * i < x; i++) {
  if (x % (6 * i - 1) == 0) {
    println(x, " is divisible by ", 6 * i - 1);
    return;
  }
  if (x % (6 * i + 1) == 0) {
    println(x, " is divisible by ", 6 * i + 1);
    return;
  }
}
println(x, " is prime!");
