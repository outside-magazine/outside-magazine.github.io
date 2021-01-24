# About

Outside has historically had a core audience of well-seasoned outdoor enthusiasts, but the landscape of our reach is expanding. One audience segment we're focused on catering more towards and growing this upcoming year are novices—those that are just starting to explore specific sports, or outdoor recreation in general.

We’ve created a new series on our site called Outside 101. It’s a hub of beginner-related content; for example, the first collection in this series is [Winter 101](https://www.outsideonline.com/2418973/beginners-guide-winter). These curated landing pages are intended to give beginners a starting place in figuring out how to dive in, gear they need, what to expect, and where to go.

Currently, Winter 101 is using an existing site template. In this task, we would like you to:
1. Redesign and create an Outside 101-specific site template, using our "The Beginner's Guide to Winter" assets.
2. Create an overall Outside 101 logo to accompany each collection within the series.
3. Create 4 sections of content corresponding to the data model found in `src/json/data.json` using the React boilerplate found in `src/js/app.js`. Output 4 posts per section and create an action to trigger the loading of more posts. More posts can be found here - https://run.mocky.io/v3/6f58c901-cb5f-4544-834a-020be1349266. This should be intuitive and provide feedback to the user. 
4. Add Webpack configuration to output the lightest assets possible when running `npm run prod`.

## Requirements
* php
* npm >= 12.18

## Developing
* Clone this repo locally `git clone git@github.com:outside-magazine/candidate_test.git candidate_test`
* Run `php -S localhost:8000 -t candidate_test`, this will spin up a PHP server available at - http://localhost:8000/index.php.
* Run `npm i && npm run dev`. This will set up a node server for module bundling and asset preprocessing. Watch is running in the background and will refresh assets as they're updated.
* The code has been set up in a way where you only need to look at the `src/*`, `index.php` and `content.tpl.php` files.
You should be able to ignore the other files, they're just there to simulate outsideonline.com

## Insure your final code uses/is
* WCAG Level AAA
* ES6-11
* CSS latest Stable Specification(s)
