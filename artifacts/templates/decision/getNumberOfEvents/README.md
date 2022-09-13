The decision templates contains two files that will get packaged together in a `deploy` serializer command.

- config.json/yaml
- file.js

The config file contains the minimum configuration for creation of the template in your tenant. This is picked up during the `deploy` command, hydrated with the required properties and passed to your tenant.

The `file.js` file contains the code for our decision template. You can write this without worrying about white space etc. Also pair this with a linting or prettier tool to write highly robust and consist javascript code for your tenant.

## Unit Testing

In addition to the files mentioned above, you can add any number of files to facilitate in unit testing, in this example repository, we have configured `Mocha` tests which use the `file.spec.js` file.
