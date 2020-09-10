# Web Performance

## Table of Contents

- [Web Performance](#web-performance)
  - [Table of Contents](#table-of-contents)
  - [**01. Introduction**](#01-introduction)
    - [Thinking About Performance](#thinking-about-performance)
      - [Why does performance matter?](#why-does-performance-matter)
      - [What is performance?](#what-is-performance)
    - [The Importance of Measurement](#the-importance-of-measurement)
  - [**02. JavaScript Performance](#02-javascript-performance)
  - [**03. Rendering Performance](#03-rendering-performance)
  - [**04. Load Performance](#04-load-performance)
  - [**05. Tools](#05-tools)
  - [**06. Wrapping Up](#06-wrapping-up)

## **01. Introduction**

### Thinking About Performance

#### Why does performance matter?

0.1 second is about the limit for having the user feel that the system is reacting instantaneously, meaning that no special feedback is necessary except to display the result. —Jakob Nielsen

1.0 second is about the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second, but the user does lose the feeling of operating directly on the data. —Jakob Nielsen

10 seconds is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they should be given feedback indicating when the computer expects to be done. Feedback during the delay is especially important if the response time is likely to be highly variable, since users will then

If your user interface takes 10 seconds or more to respond to an interaction, then we should talk.

Aberdeen Group found that a 1 second slow down resulted 11% fewer page views, 7% less conversion.

[Akamai](https://www.akamai.com/us/en/about/news/press/2017-press/akamai-releases-spring-2017-state-of-online-retail-performance-report.jsp) found that two-second delay in web page load time increase bounce rates by 103 percent.

A 400 millisecond improvement in performance resulted in a 9% increase in traffic at [Yahoo](https://www.slideshare.net/stoyan/dont-make-me-wait-or-building-highperformance-web-applications#btnNext).

[Google](http://assets.en.oreilly.com/1/event/29/Keynote%20Presentation%202.pdf) found that a 2% slower page resulted in 2% fewer searches, which means 2% fewer ads shown.

100 millisecond improvement in performance results in 1% increase in overall revenue at [Amazon](http://radar.oreilly.com/2008/08/radar-theme-web-ops.html).

[53% of users will leave a mobile site if it takes more than 3 secs to load.](https://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide)

According to [research](https://www.smashingmagazine.com/2015/09/why-performance-matters-the-perception-of-time/#the-need-for-performance-optimization-the-20-rule), if you want user to feel like your site is faster than your competitors, you need to be 20% faster.

At the same time... [Our applications are getting bigger](https://twitter.com/xbs/status/626781529054834688?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fmobiforge.com%2Fresearch-analysis%2Fthe-web-is-doom).

[Total Kilobytes](https://httparchive.org/reports/state-of-the-web#bytesTotal)

[LTE is actually getting slower.](https://www.vox.com/2017/8/2/16069642/verizon-att-tmobile-sprint-mobile-customers-slow-speeds-unlimited-data-plan)

#### What is performance?

There are different kinds of performance.
- Network Load performance
- Parsing and JavaScript and Compilation performance
- Rendering performance

Some numbers to think about.

[Speed, Performance, and Human Perception](https://medium.com/@jakob_anderson/speed-performance-and-human-perception-70ae83ea144e)

![](img/number-1.jpg)
![](img/number-2.jpg)

Disclaimer: We’re not going to obsess over numbers.

It’s about getting 10% better.

“Strategies for Optimizing Web Performance When, Honestly, You Have Like 5 Meetings Today and You Need to Choose the Correct Hills Upon Which to Strategically Die” — Romeeka Gayhart, @CCandUC

Are all of our needs the same?
What matters to you?

- The New York Times might care about time to first headline.
- Twitter might care about time to first tweet. 
- Chrome might care about time to inspect element. 
- What does your product or project care about?

**[⬆ back to top](#table-of-contents)**

### The Importance of Measurement

Measure. Don’t tune for speed until you’ve measured, and even then don’t unless one part of the code overwhelms the rest. —Rob Pike

Do not go just blindly applying performance optimizations.

There is a cost to every abstraction —and everything has a trade off.

I’m not a fan of premature optimization, but performance is one of those things where if we’re not keeping an eye on it, it has a chance of getting away from us.

Some things to think about while measuring

- Are we testing performance on fancy MacBook Pros or consumer-grade hardware?
- Are we simulating less-than-perfect network conditions. 
- What is our performance budget?

Don’t get carried away with measuring, either.

Thinking deeply about the architecture and design of your application is a better use of your time than micro-benchmarks.

Three Tiers of Advice

- Definitely do this.
- Maybe do this, but measure before and after.
- Only do this if you find a performance problem that needs solving.

And now: Steve’s Golden Rule of Performance

- Doing Less Stuff Takes Less Time.
- If you can do it later. Do it later.

Rough Outline

- JavaScript performance: Write code that runs faster, later, or not at all.
- Rendering performance: It turns out most of our JavaScript happens in the browser, which has its own performance concerns.
- Load performance: Until the user actually gets the page, there isn’t much to optimize.

**[⬆ back to top](#table-of-contents)**

## **02. JavaScript Performance
**[⬆ back to top](#table-of-contents)**

## **03. Rendering Performance
**[⬆ back to top](#table-of-contents)**

## **04. Load Performance
**[⬆ back to top](#table-of-contents)**

## **05. Tools
**[⬆ back to top](#table-of-contents)**

## **06. Wrapping Up
**[⬆ back to top](#table-of-contents)**
