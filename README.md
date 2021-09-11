For Java please switch to the `Java` branch of this repository.

# Testing Infrastructure in TypeScript and Jest

This repository is set up for testing with _Jest_ (_ts-jest_ to be precise), automated through _npm_.

Note how _Jest_ is set up in `package.json`: It adds development dependencies for `jest`, `ts-jest` and `@types/jest` (all three needed for _Jest_ in _TypeScript_). It also adds a `test` script to tell npm what to execute with `npm test`.

Also in `.travis.yml` there is now an extra step to execute the tests.

Finally `jest.config.js` indicates to _Jest_ where to find the tests.

----

You will likely want to explore IDE integration for test execution and coverage in your IDE, but also ensure that tests still execute with *npm* in a Continuous Integration environment (e.g. Travis-CI).

The following commands might be useful:
* `npm install` install all dependencies, including TypeScript and Jest.
* `npm test` runs jest and prints a coverage report. It also creates a html report in `coverage/lcov-report/index.html`
* `npx jest --watch --collect-coverage` runs Jest from the command line with extra arguments, here to continue watching for changes (will rerun tests immediately when changes in files are detected) and reporting coverage

