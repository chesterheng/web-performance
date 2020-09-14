const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  const [ measure ] = items.getEntriesByName('My Special Benchmark');
  console.log(measure);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

// SETUP 🏁

let iterations = 1000000;

// const a = 1;
// const b = 2;

// const add = (x, y) => x + y;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

// %NeverOptimizeFunction(add);

while (iterations--) {
  // add(a, b);
  const point = new Point(2, 4);
  delete point.x;

  JSON.stringify(point);
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');
