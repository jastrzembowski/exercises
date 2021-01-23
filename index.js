// 1. Please write a function that reverses a string

function reverseString(value) {
    return value.split("").reverse().join("");
  }
  console.log(reverseString("String"))
  
  // 2. Please write a function that filters out numbers from a list
  let list = [1, "a", 3, "df", false, 4, 5]
  let numbers = list.filter((element)=>{
    return (typeof element === 'number')
  })
  console.log(numbers)
  
  // 3. Please write a function that shows the usage of closures
  
  function createGreeter(greeting) {
    return { greet: function(name){
      return `${greeting}, ${name}!`
    }}
  }
  console.log(createGreeter('Hello').greet('Kamil'))
  
  function outer(){
    var a=10;
    function inner() {
      var b=22;
      console.log('inner B', b)
      console.log('a + b', a + b)
    }
    inner();
    console.log('outer A', a)
  }
  outer()
  // 4. Please write a recursive function that flattens an list of items
  // example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
  // example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
  const array = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]
  
  function flatten(x){
    return x.flat(Infinity)
  }
  console.log(flatten(array))
  
  
  // 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
  // example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
  // example output ['b', 4, 76]
  
  let ex5 = [['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']]
  
  function intersect(a) {
    var setA = new Set(a[0]);
    var setB = new Set(a[1]);
    var inter = new Set([...setA].filter(x => setB.has(x)));
    console.log(Array.from(inter))
  
  }
  intersect(ex5)
  // 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
  // example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
  // example output ['a', 3, 21, 'c', 'e']
  
  let ex6 = [['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']]
  function different(a){
    let setA = new Set(a[0]);
    let setB = new Set(a[1]);
    var dif = new Set([...setA]
      .filter(x => !setB.has(x))
      .concat([...setB].filter(x=> !setA.has(x))))
    console.log(Array.from(dif))
  }
  different(ex6)
  // 7. Please write a function that transforms an object to a list of [key, value] tuples.
  // example input { color: 'Blue', id: '22', size: 'xl' }
  // example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]
  
  let ex7 = { color: 'Blue', id: '22', size: 'xl' }
  function transform(a){
    let b = Object.entries(a)
   return(b)
  }
  console.log(transform(ex7))
  
  // 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
  // example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
  // example output { color: 'Blue', id: '22', size: 'xl' }
  
  let ex8 = [['color', 'blue'], ['id', '22'], ['size', 'xl']]
  function reverseTransform(a){
    let b = Object.fromEntries(a)
    return(b)
  }
  console.log(reverseTransform(ex8))
  
  // 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
  // example input [1,2,3], [4,5,6,7]
  // example output [[1,4], [2,5], [3,6]]
  
  let ex9=[[1,2,3], [4,5,6,7]]
  function transpose([arrayA, arrayB]) {
  const result = [];
  
  for (let index=0; index < arrayA.length; index++) {
    const elementA = arrayA[index];
    const elementB = arrayB[index];
  
    if (elementA == undefined || elementB == undefined){
      break;
    }
    result.push([elementA, elementB]);
  }
  return result;
  }
  
  console.log(transpose(ex9))
  // 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
  // example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
  // example output '23'
  
  const examplePath = ['a', 'b', 'c', 'd'];
  const exampleObject = { a: { b: { c: { d: '23' } } } };
  
  function pick(path, object){
    const key = path [0]
  
    if (!key) {
      return object
    }
    if (!object[key]){
      return undefined
    }
    return pick(path.slice(1), object[key])
    
  }
  console.log(pick(examplePath, exampleObject))
  
  
  
  // 11. Please write compare function which compares 2 objects for equality.
  // example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
  // example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
  
  let ex1={ a: 'b', c: 'd' }
  let ex2={ c: 'd', a: 'b' }
  let ex3={ a: 'c', c: 'a' }
  let ex4={ c: 'd', a: 'b', q: 's' }
  function compare(a,b){
    const uniqueKeys = new Set([...Object.keys(a), ...Object.keys(b)])
    return Array.from(uniqueKeys).every(key=>a[key]===b[key])
  }
  console.log(compare(ex1,ex2))
  console.log(compare(ex3,ex4))
    
  
  // 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
  // example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
  // example output { id: '22' }
  
  function returnWithoutKeys(key, obj){
    return key.reduce((prev, curr) => {
      const {[curr]: undefined, ...clean} = prev;
      return clean
    }, obj)
  }
  returnWithoutKeys(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' })
  
  