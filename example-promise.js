//
// function getTempPromise(location) {
//   return new Promise(function (resolve,reject) {
//       resolve(79);
//       reject('city not found');
//   });
// }
//
// getTempPromise('Philadelphia').then (
//   function (temp) {
//     console.log('Promise success', 79);
//   },
//   function (err){
//     console.log('Promise Failed', err);
//   }
// )

function addPromise(a,b){
  return new Promise(function (resolve,reject) {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('a and b need to be numbers');
      }
  });
}

addPromise(3,4).then(
  function(sum){
    console.log('Suceess', sum);
  },
  function(err){
    console.log('Failure', err);
  }
)

addPromise(3,'akhil').then(
    function(sum){
      console.log('Sucess', sum);
    },
    function(err){
      console.log('Failure', err);
    }
)
