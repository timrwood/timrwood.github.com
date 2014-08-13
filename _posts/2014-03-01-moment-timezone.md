---
layout: post
title:  Moment Timezone
date:   2014-03-01 00:00:00
categories: work
image: /images/moment-timezone/header.jpg
---

[Moment Timezone](http://momentjs.com/timezone/) is a plugin I wrote for 
[Moment.js](http://momentjs.com) for working with Dates in different
timezones.

It allows developers to parse in arbitrary timezones and then convert to other timezones for use with
any of the display methods of moment.js.

```js
moment.tz("2012-07-20 04:00", "America/New_York")
    .tz("America/Los_Angeles")
    .format(); // 2012-07-20T01:00:00-07:00
```

![Moment.js Website](/images/moment-timezone/map.jpg)
