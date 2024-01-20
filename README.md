# [TDD MOOC](https://tdd.mooc.fi/): Legacy code

This is an exercise to practice dealing with legacy code. There are three things you need to do:

1. **Write test for the code [src/gilded_rose.mjs](src/gilded_rose.mjs), until it has 100% mutation test coverage.**
2. **Refactor the code to make it understandable.**
3. **Add the "conjured items" feature described in [Gilded Rose requirements](GildedRoseRequirements.txt).**

When writing the tests, at first use just line coverage (`npm run coverage`) to find non-tested lines. After all lines
are tested, switch to using mutation coverage (`npm run mutation`) and improve your tests. Both commands write their
reports in html format under the `coverage` directory.

(In real projects, mutation coverage typically takes many minutes to run, so for faster feedback it can be practical to
first focus on just the line coverage.)

When refactoring, first try to see how far you can get without understanding the problem domain (i.e. use mechanical,
provably correct refactorings). Then read the [Gilded Rose requirements](GildedRoseRequirements.txt) document to
understand the problem domain and get a new perspective for improving the design.

---

_This exercise is part of the [TDD MOOC](https://tdd.mooc.fi) at the University of Helsinki, brought to you
by [Esko Luontola](https://twitter.com/EskoLuontola) and [Nitor](https://nitor.com/). This exercise is based on
the [Gilded Rose Refactoring Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata)
by [Emily Bache](https://twitter.com/emilybache) and [Terry Hughes](https://twitter.com/TerryHughes)._

## Prerequisites

You'll need a recent [Node.js](https://nodejs.org/) version. Then download this project's dependencies with:

    npm install

## Developing

Run tests once

    npm run test

Run tests continuously

    npm run autotest

Calculate line coverage, writes results to `coverage/lcov-report/index.html`

    npm run coverage

Calculate mutation coverage, writes results to `coverage/mutation-report/index.html`

    npm run mutation

Code reformat

    npm run format
