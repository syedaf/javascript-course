// Regular Function - Global Call - Strict Mode
// function regularFunction() {
//   console.log('Strict mode - Global call:', this); // undefined
// }
//
// regularFunction();

// Regular Function - Global Call - Non-Strict Mode
// function regularFunction() {
//   console.log('Non-strict mode - Global call:', this); // Window object (browser) or global (Node.js)
// }
//
// regularFunction();

// Regular Function - Call
// function regularFunction() {
//   console.log('call() method:', this);
// }
//
// const customThis = { name: 'Custom Object' };
// regularFunction.call(customThis); // Custom Object
// regularFunction.call(null); // null (strict) or Window (non-strict)
// regularFunction.call(undefined); // undefined (strict) or Window (non-strict)

// Regular Function - Apply
// function regularFunction(arg1, arg2) {
//   console.log('apply() method:', this);
//   console.log('Arguments:', arg1, arg2);
// }
//
// const customThis = { name: 'Custom Object' };
// regularFunction.apply(customThis, ['arg3', 'arg4']); // Custom Object

// Regular Function - Bind
// function regularFunction() {
//   console.log('bind() method:', this);
// }
//
// const customThis = { name: 'Custom Object' };
// const boundFunction = regularFunction.bind(customThis);
// boundFunction(); // Custom Object
//
// // bind() is permanent - cannot be overridden
// boundFunction.call({ name: 'Different Object' }); // Still Custom Object

// Regular Function - Method Call - Strict Mode
// const obj = {
//   name: 'Object Method',
//   method: function () {
//     console.log('Strict mode - Method call:', this); // obj
//     console.log('Name:', this.name);
//   },
// };
//
// obj.method(); // this = obj

// Regular Function - Method Call - Non-Strict Mode
// const obj = {
//   name: 'Object Method',
//   method: function () {
//     console.log('Non-strict mode - Method call:', this); // obj
//     console.log('Name:', this.name);
//   },
// };
//
// obj.method(); // this = obj (same as strict mode for method calls)

// Regular Function - call/apply/bind with Methods
// const obj1 = {
//   name: 'Object 1',
//   method: function () {
//     console.log('Method this:', this.name);
//   },
// };
//
// const obj2 = { name: 'Object 2' };
//
// obj1.method.call(obj2); // "Object 2"
// obj1.method.apply(obj2); // "Object 2"
// obj1.method.bind(obj2)(); // "Object 2"

// Regular Function - Method extraction (Loses context)
// const obj = {
//   name: 'Original Object',
//   method: function () {
//     console.log('Extracted method:', this);
//   },
// };
//
// obj.method(); // this = obj
//
// const extracted = obj.method;
// extracted(); // this = undefined (strict) or Window (non-strict)
//
// // Solutions:
// const bound = extracted.bind(obj);
// bound(); // this = obj
//
// const wrapper = () => extracted;
// wrapper(); // this = obj (via closure)

// Regular Function - Constructor (Strict and Non-Strict)
// function Constructor(name) {
//   this.name = name;
//   console.log('Constructor this:', this); // New instance
// }
//
// const instance = new Constructor('Test'); // this = new instance
// console.log(instance.name); // "Test"

// Regular Function - Constructor (without New)
// function Constructor(name) {
//   this.name = name; // TypeError in strict mode
// }
//
// // Wrong usage:
// Constructor('Alice'); // TypeError: Cannot set property 'name' of undefined
//
// // Non-strict mode:
// function ConstructorNonStrict(name) {
//   this.name = name; // Pollutes global object!
// }
// // ConstructorNonStrict('Alice'); // Creates global.name = 'Alice'
// console.log(this.name);

// Regular Function - Constructor (call, apply, bind)
// function Constructor(name) {
//   this.name = name;
//   this.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
//   };
// }
//
// const instance = new Constructor('Alice');
//
// // call/apply on instance methods
// const obj = { name: 'Bob' };
// instance.greet.call(obj); // "Hello, I'm Bob"

// Regular Function - Event Handler
// function handleClick() {
//   console.log('Event handler this:', this); // Button element
//   console.log('Button text:', this.textContent);
// }
//
// const button = document.getElementById('myButton');
// button.addEventListener('click', handleClick); // this = button element

// Regular Function - Event Handler (call/apply/bind)
// function handleClick() {
//   console.log('Bound event handler this:', this);
// }
//
// const customContext = { name: 'Custom Context' };
// const button = document.getElementById('myButton');
//
// // Bind to custom context
// button.addEventListener('click', handleClick.bind(customContext)); // this = customContext

// Arrow Function - Any context (Strict and Non-Strict)
// const arrowFunction = () => {
//   console.log('Arrow function this:', this); // Lexical scope (undefined in strict, Window in non-strict)
// };
//
// arrowFunction();

// Arrow Function  (call/apply/bind)
// const arrowFunction = () => {
//   console.log('Arrow this:', this);
// };
//
// const customThis = { name: 'Custom' };
//
// // These don't change 'this' in arrow functions
// arrowFunction.call(customThis); // Still lexical this
// arrowFunction.apply(customThis); // Still lexical this
// arrowFunction.bind(customThis)(); // Still lexical this

// const obj = {
//   name: 'Object',
//   arrowMethod: () => {
//     console.log('Arrow method this:', this); // Global this, NOT obj
//     console.log('Name:', this.name); // undefined
//   },
//   regularMethod: function () {
//     console.log('Regular method this:', this); // obj
//
//     const innerArrow = () => {
//       console.log('Inner arrow this:', this); // obj (inherits from regularMethod)
//     };
//     innerArrow();
//   },
// };
//
// // obj.arrowMethod(); // this = global (wrong!)
// obj.regularMethod(); // this = obj, inner arrow also obj (correct!)

// . Method (Object) - Method Call (Strict and Non-Strict)
// const person = {
//   name: 'Alice',
//   age: 30,
//   greet() {
//     // Method shorthand
//     console.log('Method this:', this); // person object
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
//
// person.greet(); // this = person

// . Method (Object) - Call/Apply/Bind
// const person1 = {
//   name: 'Alice',
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
//
// const person2 = { name: 'Bob' };
//
// person1.greet.call(person2); // "Hello, I'm Bob"
// person1.greet.apply(person2); // "Hello, I'm Bob"
// person1.greet.bind(person2)(); // "Hello, I'm Bob"

// // Method (Object) - Extracted
// const obj = {
//   name: 'Object',
//   method() {
//     console.log('Extracted method this:', this); // undefined when extracted (Strict) Window (Non-Strict)
//   },
// };
//
// const extracted = obj.method;
// extracted(); // this = undefined

// Extracted Methods -Call/Apply/Bind
// const obj = {
//   name: 'Object',
//   method() {
//     console.log('Method this:', this.name);
//   },
// };
//
// // Problem:
// const extracted = obj.method;
// // extracted(); // this = undefined/Window
//
// // Solution 1: bind()
// const bound = obj.method.bind(obj);
// bound(); // this = obj
//
// // Solution 2: Arrow wrapper
// const wrapper = () => obj.method();
// wrapper(); // this = obj
//
// // Solution 3: call() each time
// extracted.call(obj); // this = obj

// Class Method - Instance Call
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log('Class method this:', this); // Animal instance
//     console.log(`${this.name} makes a sound`);
//   }
// }
//
// const dog = new Animal('Rex');
// dog.speak(); // this = dog instance
//
// // Class Method - call/apply/bind
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }
//
// const dog = new Animal('Rex');
// const cat = new Animal('Whiskers');
//
// dog.speak.call(cat); // "Whiskers makes a sound"
// dog.speak.apply(cat); // "Whiskers makes a sound"
// dog.speak.bind(cat)(); // "Whiskers makes a sound"

// // Class Method - Extracted
// class Component {
//   constructor(name) {
//     this.name = name;
//   }
//
//   handleClick() {
//     console.log('Handler this:', this); // undefined when extracted
//     console.log(`${this.name} clicked`);
//   }
// }
//
// const comp = new Component('Button');
// comp.handleClick(); // Works: this = comp
//
// // Problem:
// // const handler = comp.handleClick;
// // handler(); // Error: this = undefined
//
// // Solution 1: bind in constructor
// class ComponentWithBind {
//   constructor(name) {
//     this.name = name;
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     console.log(`${this.name} clicked`); // Always works
//   }
// }
//
// const comp2 = new ComponentWithBind('Button');
// const handler = comp2.handleClick;
// handler();
//
// // Solution 2: Arrow method
// class ComponentWithArrow {
//   constructor(name) {
//     this.name = name;
//   }
//
//   handleClick = () => {
//     console.log(`${this.name} clicked`); // Always works
//   };
// }
//
// const comp3 = new ComponentWithArrow('Button');
// const handler2 = comp3.handleClick;
// handler2();

// Class Arrow Field
//
// class EventHandler {
//   constructor(name) {
//     this.name = name;
//   }
//
//   // Arrow method - bound to instance
//   handleEvent = () => {
//     console.log('Arrow method this:', this); // Always the instance
//     console.log(`${this.name} handled event`);
//   };
//
//   // Regular method for comparison
//   regularMethod() {
//     console.log('Regular method this:', this); // Depends on call context
//   }
// }
//
// const handler = new EventHandler('Handler1');
//
// // Both work when called on instance
// handler.handleEvent(); // this = handler
// handler.regularMethod(); // this = handler
//
// // Different behavior when extracted
// const extractedArrow = handler.handleEvent;
// const extractedRegular = handler.regularMethod;
//
// extractedArrow(); // this = handler (arrow preserves context)
// extractedRegular(); // this = undefined (regular loses context)

// Arrow methods cannot be overridden
// class EventHandler {
//   constructor(name) {
//     this.name = name;
//   }
//
//   handleEvent = () => {
//     console.log('Arrow method:', this.name);
//   };
// }
//
// const handler = new EventHandler('Original');
// const other = { name: 'Other' };
//
// // Cannot change this context
// handler.handleEvent.call(other); // Still logs "Original"
// handler.handleEvent.apply(other); // Still logs "Original"
// handler.handleEvent.bind(other)(); // Still logs "Original"

// Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log('Constructor this:', this); // New instance
//
//   this.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
//   };
// }
//
// const alice = new Person('Alice', 30); // this = new alice instance
// alice.greet(); // this = alice

// Constructor with Arrow function
// function Person(name) {
//   this.name = name;
//
//   // Arrow function bound to instance
//   this.arrowGreet = () => {
//     console.log('Arrow greet this:', this); // Always this instance
//     console.log(`Hello, I'm ${this.name}`);
//   };
//
//   // Regular function
//   this.regularGreet = function () {
//     console.log('Regular greet this:', this); // Depends on call context
//   };
// }
//
// const person = new Person('Alice');
//
// // Both work normally
// person.arrowGreet(); // this = person
// person.regularGreet(); // this = person
//
// // Different when extracted
// const arrowExtracted = person.arrowGreet;
// const regularExtracted = person.regularGreet;
//
// arrowExtracted(); // this = person (preserved)
// regularExtracted(); // this = undefined (lost)

// Constructor Function - Direct Call
// function Person(name) {
//   this.name = name; // TypeError: Cannot set property 'name' of undefined
// }
//
// // Wrong usage:
// Person('Alice'); // TypeError in strict mode

// Constructor Function - Direct Call (Non-Strict Mode)
// function Person(name) {
//   this.name = name; // Pollutes global object!
//   console.log('Direct call this:', this); // Window object
// }
//
// // Wrong usage:
// Person('Alice'); // Creates window.name = 'Alice' (bad!)
// console.log(window.name); // "Alice" (global pollution)

// IIFE - Strict Mode
// (function () {
//   console.log('IIFE strict this:', this); // undefined
// })();
//
// // With parameters
// (function (name) {
//   console.log('IIFE with params this:', this); // undefined
//   console.log('Name:', name);
// })('Alice');

// IIFE - Non-Strict Mode
// (function () {
//   console.log('IIFE non-strict this:', this); // Window object
// })();

// IIFE - call/apply/bind
// const customThis = { name: 'Custom IIFE Context' };
//
// (function () {
//   console.log('IIFE call this:', this.name);
// }).call(customThis); // "Custom IIFE Context"
//
// (function (greeting) {
//   console.log('IIFE apply this:', this.name, greeting);
// }).apply(customThis, ['Hello']); // "Custom IIFE Context Hello"

/// Callback Functions - Regular (Strict mode)
// const obj = {
//   name: 'Object',
//   delayedGreet: function () {
//     console.log('Original this:', this.name); // "Object"
//
//     setTimeout(function () {
//       console.log('Callback this:', this); // undefined (strict mode)
//     }, 100);
//   },
// };
//
// obj.delayedGreet();

// Array Method Callbacks
// const numbers = [1, 2, 3];
// const processor = {
//   multiplier: 10,
//
//   process: function () {
//     numbers.forEach(function (num) {
//       console.log('forEach this:', this); // undefined (strict) or Window (non-strict)
//       // console.log(num * this.multiplier); // Error - this.multiplier undefined
//     });
//   },
//
//   processWithBind: function () {
//     numbers.forEach(
//       function (num) {
//         console.log('Bound forEach this:', this); // 10
//         console.log('Bound forEach this:', this.multiplier); // 10
//         console.log(num * this.multiplier);
//       }.bind(this)
//     );
//   },
// };
//
// processor.process();
// processor.processWithBind();
