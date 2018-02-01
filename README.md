# offline-forum &middot; [![Build Status](https://travis-ci.org/milliampere/offline-forum.svg?branch=master)](https://travis-ci.org/milliampere/offline-forum) [![Coverage Status](https://coveralls.io/repos/github/milliampere/offline-forum/badge.svg?branch=master)](https://coveralls.io/github/milliampere/offline-forum?branch=master)

A React application tested with Jest and Enzyme. 

Travis for automation and Coveralls for coverage report, Cypress for E2E. 

## Installation

```bash
git clone https://github.com/milliampere/offline-forum.git
cd offline-forum
npm install
```

## Running tests

```bash
npm test
```

```bash
npm test -- --coverage
```


## Background

This project is the examination of a Javascript testing course. Originally from  https://github.com/FEND16/offline-forum.git.  

>Example app built with [`create-react-app`](https://github.com/facebookincubator/create-react-app) for integration and snapshot testing. The app is a forum with posts and comments that uses `localStorage`. It also has a bot that responds with delay. **CSS-framework is [Tailwind](https://tailwindcss.com/)**

The project is already set up with all packages to test react components: [**`enzyme`**](http://airbnb.io/enzyme/docs/api/), `enzyme-adapter-react-16`, `react-test-renderer` and `enzyme-to-json` for snapshot testing. You can read more about setting it up here: [**Running test @ create-react-app**](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)