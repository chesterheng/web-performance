const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  const [ measure ] = items.getEntriesByName('My Special Benchmark');
  console.log(measure);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

// SETUP 🏁

let iterations = 1e7;

// const a = 1;
// const b = 2;

// const add = (x, y) => x + y;

// class Point {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
// }

const objects = [{ a: 1 }, { b: 1, a: 2 }, { a: 3, c: 4, b: 2 }, { a: 4, b: 7 }]
// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

// %NeverOptimizeFunction(add);

while (iterations--) {
  // add(a, b);
  // const point = new Point(2, 4, 6);
  // delete point.x;
  // delete point.y;
  // delete point.z;

  // JSON.stringify(point);
  let sum = 0;
  const obj = objects[iterations & 3];
  sum = sum + obj.a;
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');
