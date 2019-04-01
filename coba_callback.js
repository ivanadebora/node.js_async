
// -------------------------------- CALLBACK FUNCTION ----------------------------------//
function asyncDivision(dividend, divisor, cb) {
    setTimeout(() => {
      let err;
  
      if (isNaN(dividend) && isNaN(divisor)) {
        err = 'One of dividend or divisor is not a number';
        cb(err, null);
      }
  
      if (divisor === 0) {
        err = 'Divide by zero';
        cb(err, null);
      }
  
      const divideResult = Number(dividend) / Number(divisor);
      cb(null, divideResult);
    }, 2000);
  }
  
  //cb berupa function (CALLBACK FUNCTION) berfungsi sebagai handler ketika operasi asynchronous selesai dijalankan 
  //cb menerima 2 parameter,yaitu err dan result
  asyncDivision(0, 2, (err, result) => {
    if (err) {
      throw new Error(err);
    }
  
    console.log(result);
  });
  
  console.log('Pesan ini akan muncul pertama sebelum menampilkan result.')




  // ------------------------------- CALLBACK HELL ---------------------------------- //

  function isNumber (a, b, cb) {
    setTimeout(() => {
      if (isNaN(a) || isNaN(b)) {
        err = 'One of input is not a number';
        cb(err, null);
      } else {
        cb(null, true);
      }
    }, 500)
  };
  
  function divide (a, b, cb) {
    setTimeout(() => {
      if (b === 0) {
        err = 'Divide by zero';
        return cb(err, null);
      }
  
      const result = Number(a) / Number(b);
      cb(null, result);
    }, 1500)
  };
  
//   function multiply (a, b, cb) {
//     setTimeout(() => {
//       const result = Number(a) * Number(b);
//       cb(null, result);
//     }, 1000)
//   }
  
//   function add (a, b, cb) {
//     setTimeout(() => {
//       const result = Number(a) + Number(b);
//       cb(null, result);
//     }, 500);
//   }
  
  // callback hell start here...
  isNumber(6, 3, (err, res) => {
    if (err) {
      throw new Error(err);
    }
  
    divide(6, 3, (err, result) => {
      if (err) {
        throw new Error(err);
      }
  
    //   multiply(divResult, 7, (err, multiResult) => {
    //     if (err) {
    //       throw new Error(err);
    //     }
  
    //     add(multiResult, 1, (err, addResult) => {
    //       if (err) {
    //         throw new Error(err);
    //       }
  
          console.log(`The final result is ${result}`);
    //     });
    //   });
    });
  });

  console.log('Pesan ini akan muncul pertama sebelum menampilkan result.')