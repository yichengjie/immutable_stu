'use strict' ;
var Immutable = require('immutable');
//import Cursor from 'immutable/contrib/cursor';
//import {Cursor},Immutable from 'immutable' ;
var Cursor = require('immutable/contrib/cursor') ;

function test1(){
  var map1 = Immutable.Map({a:1, b:2, c:3});
  var map2 = map1.set('b', 50);
  var b1 = map1.get('b'); // 2
  var b2 = map2.get('b'); // 50
  console.info(b1) ;
  console.info(b2) ;
}

//test1() ;


function test2(){
  var map1 = Immutable.Map({a:1, b:2, c:3});
  var map2 = map1.set('b', 2);
  console.info(map1.equals(map2) === true);
  var map3 = map1.set('b', 50);
  console.info(map1.equals(map3) === false);
}
//test2 () ;

function test3(){
  let data = Immutable.fromJS({ a: { b: { c: 1 } } });
  let tmpData = null ;
  // 让 cursor 指向 { c: 1 }
  let cursor = Cursor.from(data, ['a', 'b'], newData => {
    // 当 cursor 或其子 cursor 执行 update 时调用
    console.log(newData);
    tmpData = newData ;
  });
  cursor.get('c'); // 1
  cursor = cursor.update('c', x => x + 1);
  cursor.get('c'); // 2

  console.info(tmpData) ;
}

test3() ;
