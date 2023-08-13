/*DESCRIPTION⚡
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

*/

/*SOLUTION🔥 */
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  
  console.log(sum(0, 1, 2))
  console.log(sum(1, 2, 3, 4))
  console.log(sum(5))
  console.log(sum())