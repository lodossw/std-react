function getTempCallBack( location, callback) {
  callback(undefined, 78);    //-- success ;
  callback('City not found'); //-- error page;
}

getTempCallBack('Seoul',function(err, temp){
  if(err) {
      console.log('error', err);
  } else {
      console.log('success', temp);
  }
}); 


function getTempPromise( location ) {
  return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(79);
        //reject('City not fount');
      }, 1000);
  });
}

getTempPromise('Seoul')
.then(function(temp){
    console.log('promise success', temp);
}).then(result => {
    console.log('result ', result);
});


function addPromise( a, b ) {
    return new Promise( function( resolve, reject ) {
        if( typeof a === 'number' && typeof b === 'number' ) {
            resolve(a + b);
        } else {
            reject('a and b need to be number;');
        }
    });
}

addPromise( 1, 'A' )
.then(function(result){
    console.log( 'result : ', result );
})
.catch(function(err){
    console.log( 'error message : ', err)
});



//-- Promise 
/*
var _promise1 = function() { return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("첫번째 Promise 완료.");
            throw 'oh, no!';
        }, Math.random() * 20000 + 1000);
    });
};

var _promise2 = function() { 
    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('두번째 promise 완료');
            resolve("22222");
        }, Math.random() * 10000 + 1000); 
    });
};


_promise1().then( function (data) {
    console.log(data);
}).catch(function(e) {
    console.log('Catched Error : ', e)
}).then(_promise2()).then(result => {
    console.log('_promise2 : ', result );
});

Promise.all([_promise1, _promise2]).then(function( values ) {
    console.log('모두완료됨', values);
});
*/