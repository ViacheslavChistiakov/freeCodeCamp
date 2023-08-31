/*DESCRIPTION⚡
Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
*/

/*SOLUTION🔥 */

const makeServerRequest = new Promise((resolve, reject) => {
    makeServerRequest.then(result => {
      console.log(result)
    })
      let responseFromServer = true;
        
      if(responseFromServer) {
        resolve("We got the data");
      } else {  
        reject("Data not received");
      }
    });