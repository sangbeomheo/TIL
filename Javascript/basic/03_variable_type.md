##### 최초작성일 : 2021. 8. 24.<br><br>

# Variable Types - primitive types, object type

[Variable Types - primitive, object, function](#03-variable-types)  
[number](#number-타입)  
[string](#string-타입)  
[boolean](#boolean-타입)  
[null](#null-타입)  
[undefined](#undefined-타입)  
[symbol](#symbol-타입)  
[Reference](#reference)

<br><br>

## Variable Types

- **Primitive type**
  - single items: 더 이상 분해되지 않는 값
  - **number, string, boolean, null, undefined, symbol**
- **Object type**
  - box container
- **Function type**
  - first-class function: 다른 데이터 타입 처럼 변수에 할당 가능
  - 함수의 파라미터로도 전달이 되고 함수에서 리턴 타입으로도 function을 리턴하는 것이 가능

<br>

- primitive 타입 인지 object 타입 인지에 따라 메모리에 값을 다른 방식으로 저장

  - primitive 타입은 값 자체가 메모리에 저장

  ```js
  let name = 'mansaout'; // mansaout 값을 메모리에 바로 저장
  ```

  - object 타입은 값 자체가 메모리에 바로 저장되지 않음
    - 오브젝트를 가리키는 곳에 reference가 있고 reference가 실제 오브젝트가 담겨있는 메모리를 가리킴

  ```js
  let he = { name: mansa, age: 30 };
  // he -----> ref -----> name --> mansa
  ```

<br>

> Note!
>
> Immutable data types: primitive types, frozen objects (i.e. object.freeze())
> Mutable data types: all objects by default are mutable in JS

<br>

## number 타입

- JS는 데이터 크기를 생각하고 선언을 안 해도 됨 (c, java와 다름)
- 타입이 다이나믹하게 결정되게 때문에 number 타입 선언 필요 없음

```js
//type: number
const count = 20;
const size = 5.5;
```

<br>

- special number value : **Infinity, -Infinity, NaN**

```js
const infinity = 1 / 0; // print: Infinity
const negativeInfinity = -1 / 0; // print: -Infinity
const nan1 = 0 / 0; // print: NaN
const nan2 = 'haha' / 0; // print: NaN
const zero = 0 / 1; // print: 0
```

<br>

- 기타 표기 법

```js
// 지수 표기법 exponential notation
console.log(5e4); // 5 * 10000 = 50000
console.log(5e-4); // 5 * 1/10000 = 0.0005

// 2진법
// 숫자 앖에 '0b' 붙임
console.log(0b01, 0b10, 0b11, 0b100); // 1, 2, 3, 4

// 8진법
// 숫자 앖에 '0o' 붙임
console.log(0o7, 0o10, 0o11, 0o12); // 7, 8 ,9, 10

// 16진법
// 숫자 앞에 '0x' 붙임
// 0 ~ 9 ~ a ~ f
console.log(0xa, 0xf, 0x10); // 10, 15, 16

// parseInt() - 정수로 변환
parseInt('not-a-number'); // NaN
parseInt(1.234); // 1

// parseFloat() - 실수로 변환
parseFloat('not-a-number'); // NaN
parseFloat('1.234'); // 1.234

// 다른 기수법 사용
//parseInt(number, base)
parseInt(100, 2); // 4
parseInt(12, 8); // 10
```

<br>

- `NaN` 와 `NaN` 비교하면 전부 false

```js
NaN == NaN; //false
NaN < NaN; // false
```

<br>

## string 타입

```js
//type: string
const mansaout = 'mansaout';
const greeting = 'hello ' + mansaout;

console.log(greeting, typeof greeting); // print: "hello manasaout" string
```

<br>
- 문자열의 번호 확인 `charCodeAt()`

```js
console.log('a'.charCodeAt()); // print: 97

console.log('ad' > 'ab'); // print: true
// 1. 각 문자열의 첫 번째 비교 a vs a
// 2. 각 문자열의 두 번째 비교 d vs b
```

<br>

## boolean 타입

- **false** : 0, null, undefined, NaN, ''
- **true** : any other value

```js
const canRead = true;
const test = 10 < 1;

console.log(canRead, typeof canRead); // print: true boolean
console.log(test, typeof test); // print: false boolean
```

<br>

## null 타입

- 값이 **null** 이라고 직접 지정 (undefined 와 차이)

```js
let nothing = null;

console.log(nothing, typeof nothing); // print: null object
```

<br>

## undefined 타입

- 선언은 되었지만 아무것도 값이 지정되지 않음 (비었는지, 값이 있는지 등)

```js
let nothing;
console.log(nothing, typeof nothing); print: undefined undefined
```

<br>

## Symbol 타입

- create unique identifiers for objects
- 맵이나 다른 자료 구조에서 고유한 식별자가 필요하거나, 동시 다발적으로 발생하는 코드에서 우선순위를 주기위한 고유한 식별자가 필요할 때 사용

```js
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // print: false

// 동일한 symbol을 만들고 싶을 때
const sameSymbol1 = Symbol.for('pw');
const sameSymbol2 = Symbol.for('pw');
console.log(sameSymbol1 === sameSymbol2); // print: true

//symbol을 출력할 때
console.log(symbol1.description); // print: id
```

<br><br>

---

### **Reference**

- [자바스크립트 기초 강의 (ES5+), 드림코딩 by 엘리](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

<br><br>

##### [Next - Operator](/Javascript/basic/04_operator.md)

##### [Prev - Variable, Constant, Variable Types, Dynamic typing](/Javascript/basic/02_variable.md)
