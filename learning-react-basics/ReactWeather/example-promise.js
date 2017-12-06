// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Philadephia',function (err, temp) {
//   if(err){
//     console.log('error',err);
//   }else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location){
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Philadephia').then(function (temp) {
//     console.log('promise sucesss',temp);
//   },function (err) {
//     console.log('error',err);
// })
//
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a == 'number' && typeof b == 'number'){
      resolve(a + b);
    }else {
      reject('non number');
    }
  });
}

addPromise('20','30').then(function(sum) {
  console.log('promise sucessful', sum);
  },function (err) {
    console.log('error',err);
});


addPromise(2,3).then(function(sum) {
  console.log('promise sucessful sum is', sum);
},function (err) {
  console.log('error',err);
});