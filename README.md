# Angular Unit Testing with Karma and Jasmine

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Firstly, unit testing is important because:
* It improves the design of implementations:
Planning is a very important key factor when developing implantations, this is often overlooked by developers.
Using unit tests will enforce developers to think and rethink the design more thoroughly.
* Allows for refactoring:
You can with certainty as a dev add code and functionality without the fear of adding bugs, 
as you can ensure that functionality is working as expected with existing unit tests.
* Tests are good documentation.
* Tests make developers and QAs more confident about functionality and changes going forward.

Secondly some info on:
* [Jasmine](https://jasmine.github.io/) is the framework used to create our tests.
It has a lot of functionality to allow us to write various kinds of tests.
* [Karma](https://karma-runner.github.io/1.0/index.html) is the task runner for our tests.
It has configurations (karma.conf.js) for the startup, 
reporters (progress and kjhtml in this case), 
testing framework (Jasmine in this case) 
and the browser (Chrome in this case).

Reporters in more detail:
* **Progress** will show the number of tests executed, skipped and total.
* **Dots** will print a dot for each test executed.
* **Growl** will use the growl tool to report the progress of the testing. (plugin for this)
* **Coverage** works together with the coverage pre-processor to generate an HTML coverage report of your Javascript files.
