---
layout: post
title:  RED Logo Experiment
date:   2014-01-01 00:00:00
categories: work
image: /images/red-interactive/logo-2.jpg
---

This is an experiment I built for a Hack Day at RED Interactive.

<a href="/labs/red-logo" target="_blank">View Experiment</a>

We took the company logo and color palette and created generative canvas
artwork with it.

![RED Canvas Logo 1](/images/red-interactive/logo-1.jpg)

![RED Canvas Logo 6](/images/red-interactive/logo-6.jpg)

For one of the canvases, I created trees growing out from the logo's surface.

![RED Canvas Logo 3](/images/red-interactive/logo-3.jpg)

For another canvas, I drew thousands of increasingly smaller circles which pulled
their color from a source image and a gradient map.

The circles are weighted more heavily toward the center of the image. This way,
the image being represented can be recognizable while still keeping the rough
edges.

![RED Canvas Logo 4](/images/red-interactive/logo-4.jpg)

![RED Canvas Logo 5](/images/red-interactive/logo-5.jpg)

For this canvas, I used a highly optimized version of a grid packing algorithm.
Each row is stored as a 32 bit integer, and bitwise operators are used to check
for empty spaces and mark them as filled.

The result is incredibly fast and uses very little memory.

<a href="/labs/red-logo" target="_blank">View Experiment</a>

Click anywhere to cycle through canvases, or just wait for a few seconds to cycle automatically.
