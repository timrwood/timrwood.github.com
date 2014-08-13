---
layout: post
title:  RED Interactive Agency
date:   2014-07-19 15:20:01
categories: work
image: /images/red-interactive/logo-7.jpg
---

I am currently working as a Senior Front-End Developer at [RED Interactive Agency](http://ff0000.com).

These are the websites I have built for RED.

* * *



### [ESPN World Cup Essentials](http://worldcupessentials.ff0000.com)

[![ESPN World Cup Essentials](/images/red-interactive/espnfc.jpg)](http://worldcupessentials.ff0000.com)

We built this site for ESPN to help people unfamiliar with the World Cup get up
to speed.

The site is built with Ember.js using modular components and a responsive layout.
CSS transitions and animations are used when navigating between pages. It is backed
by a Django REST API for up to date match scores. The end result is a snappy and
stimulating user experience supporting all modern browsers and devices.

[![ESPN World Cup Essentials](/images/red-interactive/espnfc-webgl.jpg)](http://worldcupessentials.ff0000.com)

The site uses Three.js to render the WebGL navigation. To render the team names,
match scores, and days in WebGL, we draw the text onto a 2D canvas and then use
that canvas as a texture in WebGL. We use Ember’s data binding to keep the 2D canvases
in sync with the rest of the site.

I was one of two front-end developers who built this site. I was focused mostly on
the WebGL navigation and responsive navigation collapsing.

Visit the site at [worldcupessentials.ff0000.com](http://worldcupessentials.ff0000.com).

Awards: [FWA Site of the Day](http://www.thefwa.com/profile/red-interactive-agency), [CommArts Webpick of the Day](http://www.commarts.com/webpicks)

Tech Used: [Ember.js](http://emberjs.com/), [Three.js](http://threejs.org/),
[Sass](http://sass-lang.com/), [RED Sass](https://github.com/ff0000/red-sass),
[Autoprefixer](https://github.com/ai/autoprefixer), [Grunt](http://gruntjs.com/),
[RED Django Yeoman Generator](https://github.com/ff0000/generator-red-django), [Django](https://www.djangoproject.com/)

* * *


### [RED Interactive's Website](http://ff0000.com)

[![RED Interactive](/images/red-interactive/ff0000-home.jpg)](http://ff0000.com)

After the front-end team at RED switched to Ember as the framework of choice, I
worked on converting the company's website to Ember. Because a lot of the css had
already been written, I was able to completely rewrite the JavaScript and Handlebars
templates in 3 weeks.

I was the sole front-end developer who worked on the Ember rewrite.

[![RED Interactive](/images/red-interactive/ff0000-about.jpg)](http://ff0000.com)

The site makes extensive use of Ember Components, CSS3 Transitions, 3D Transforms,
and Animations.

[![RED Interactive](/images/red-interactive/ff0000-work.jpg)](http://ff0000.com)

Because this is a much longer lived site than some of the other campaign sites
we built for clients, I wrote a full suite of integration tests for ensuring that
the front-end UI continued to work as expected when releasing updates.

Visit the site at [ff0000.com](http://ff0000.com).

Tech Used: [Ember.js](http://emberjs.com/), [QUnit](http://qunitjs.com/),
[Sass](http://sass-lang.com/), [RED Sass](https://github.com/ff0000/red-sass),
[Autoprefixer](https://github.com/ai/autoprefixer), [Grunt](http://gruntjs.com/),
[RED Django Yeoman Generator](https://github.com/ff0000/generator-red-django),
[Django](https://www.djangoproject.com/)

* * *


### [Doctor OZ: You Feel Wall](http://you.doctoroz.com/)

[![Doctor OZ: You Feel Wall](/images/red-interactive/droz.jpg)](http://you.doctoroz.com/)

We built this site for a segment on the Doctor OZ show. Users were encouraged
to upload a photo or video and tell everyone how they were feeling.

The site is laid out on an infinite grid scrolling in every direction. I developed
a solution to allow a finite number of photos to cover an infinite grid. As the user
scrolls through the grid, each empty space is filled with a photo from a queue. As
the queue is emptied, we continue to fill it with more photos from the server,
eventually looping back through to the beginning of the queue.

We also integrated with Facebook and Instagram to allow users to select one of their
photos to upload.

I was the sole front-end developer who built this site.

Visit the site at [you.doctoroz.com](http://you.doctoroz.com).

Awards: [W3 Award](http://www.w3award.com/winners/gallery/), [Internet Advertising Competition](http://www.iacaward.org/iac/winners.asp), [WebAward](http://www.webaward.org/), [CommArts Webpick of the Day](http://www.commarts.com/webpicks), [Davey Award](http://www.daveyawards.com/), [MarCom Award](http://marcomawards.com/)

Tech Used: [Rosy](https://github.com/ff0000/rosy),
[Sass](http://sass-lang.com/), [Caboose](https://github.com/ff0000/caboose),
[Compass](http://compass-style.org/), [Grunt](http://gruntjs.com/),
[RED Boilerplate](https://github.com/ff0000/red-boilerplate),
[Django](https://www.djangoproject.com/),
[Facebook API](https://developers.facebook.com/), [Instagram API](http://developers.instagram.com/)

* * *






### [The Hunger Games Explorer](http://www.thehungergamesexplorer.com/us/)

[![Hunger Games Explorer](/images/red-interactive/hunger-games.jpg)](http://www.thehungergamesexplorer.com/us/)

We worked with Microsoft Internet Explorer's team and Lionsgate
to create this site as a portal for the Hunger Games franchise.

The site uses a social aggregator to pull related content from Twitter, Facebook,
YouTube, Instagram and Tumblr.

[![The Hunger Games Explorer](/images/red-interactive/hunger-games-community.jpg)](http://www.thehungergamesexplorer.com/us/)

One of the challenges we faced was building the grid of user generated content in
a tightly packed layout.

I wrote an efficient grid packing algorithm to stream in content. You can see
[a simplified example on codepen](http://codepen.io/timrwood/pen/ohpcf) and an even
faster version used in the [RED Canvas Logo](/labs/red-logo/#/grid)
experiment.

I worked with a team of 4 front-end developers to build this site.

Visit the site at [thehungergamesexplorer.com](http://www.thehungergamesexplorer.com/us/).

Awards: [W3 Award](http://www.w3award.com/winners/gallery/), [WebAward](http://www.webaward.org/), [Creativity International Award](http://www.creativityawards.com/Winners.php), [Internet Advertising Competition](http://www.iacaward.org/iac/winners.asp), [Davey Award](http://www.daveyawards.com/)

Tech Used: [Rosy](https://github.com/ff0000/rosy),
[Sass](http://sass-lang.com/), [Caboose](https://github.com/ff0000/caboose),
[Compass](http://compass-style.org/), [Grunt](http://gruntjs.com/),
[RED Boilerplate](https://github.com/ff0000/red-boilerplate),
[Django](https://www.djangoproject.com/)

* * *





### [UFC Social](http://social.ufc.com)

[![UFC Social](/images/red-interactive/ufc-map.jpg)](http://social.ufc.com)

UFC Social is a real-time platform that features the top-trending UFC content from
around the web. The home page features a unique visualizer for trending topics;
the bigger the circle, the more content you'll find on that topic.

There is also a "map" view that showcases the most popular topics in every region
of the world. Within each topic you'll find related articles, images, and videos.

Once you start exploring, you can share any piece of content with your friends,
give a thumbs up to what interests you the most, view the upcoming UFC fight card,
watch event videos and more.

[![UFC Social](/images/red-interactive/ufc.jpg)](http://social.ufc.com)

The site was designed with nested panels that open the deeper you navigate.

I built a JavaScript router that would rehydrate the stack of panels no matter how
you arrived there, whether by clicking an internal link, or by following a link on twitter,
or by clicking the back button.

The challenge was building an interface that behaved like a native tablet app, but
had full url support.

I worked with one other front-end developer to build this site.

Visit the site at [social.ufc.com](http://social.ufc.com).

Awards: [FWA Site of the Day](http://www.thefwa.com/profile/red-interactive-agency), [W3 Award](http://www.w3award.com/winners/gallery/), [WebAward](http://www.webaward.org/), [Creativity International Award](http://www.creativityawards.com/Winners.php)

Tech Used: [Rosy](https://github.com/ff0000/rosy), [Cannon.js](http://cannonjs.org/),
[Sass](http://sass-lang.com/), [Compass](http://compass-style.org/),
[RED Boilerplate](https://github.com/ff0000/red-boilerplate),
[Django](https://www.djangoproject.com/)

* * *




### [Turbo Fast: Savannah Slalom HTML5 Game](http://savannah.teamturbofast.com/en/)

[![Turbo Fast: Savannah Slalom HTML5 Game](/images/red-interactive/turbo.jpg)](http://savannah.teamturbofast.com/en/)

We had a 2 week turnaround time to develop this game. I built this with one other
front-end developer.

We used Ember.js for managing navigation between all the screens in the app. The game
engine uses a lightweight component-entity framework I built for structure. I wrote the
subsystems for the rendering loop, scene graph, collision detection, and spring dynamics.

Visit the site at [savannah.teamturbofast.com](http://savannah.teamturbofast.com/en/).

Tech Used: [Ember.js](http://emberjs.com/),
[Sass](http://sass-lang.com/), [RED Sass](https://github.com/ff0000/red-sass),
[Autoprefixer](https://github.com/ai/autoprefixer), [Grunt](http://gruntjs.com/),
[RED Static Yeoman Generator](https://github.com/ff0000/generator-red-static),
[Django](https://www.djangoproject.com/)
