# Basic Bootstrap Website Project Template for Github Pages

This is a basic template for a static website project using Grunt as the build tool and Github Pages for hosting.  This template is the basis for several other front-end project templates in development.  The contents of this template are based on the [Bootstrap Sass and JS Template](https://github.com/twbs/examples/blob/main/sass-js/README.md).

## Getting Started

### Prerequisites

You will need to have the following installed on your machine:

* [Ruby](https://www.ruby-lang.org/en/) - This project uses sass to transpile scss into css and the grunt plugin for sass requires the Ruby runtime environment for Sass on the local development workstation that will be used to build your project.  You can find OS-specific installation instructions [here](https://www.ruby-lang.org/en/documentation/installation/).  Also, it is HIGHLY recommended to use a Ruby version manager such as [rbenv](https://github.com/rbenv/rbenv) to install Ruby.
* [Sass](https://sass-lang.com/) - This project uses sass to transpile scss into css.  You must use the Ruby Sass transpiler which is installed by running `gem install sass` in a terminal window once you have installed Ruby.
* (Optional, but HIGHLY Recommended) [Node Version Manager](https://github.com/nvm-sh/nvm) - This will allow you to easily install and switch between different versions of Node.js and npm.  You can find OS-specific installation instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating).
* [Node.js](https://nodejs.org/en/) - This is the runtime environment for Grunt on the local development workstation that will be used to build your project.  The best way to install Node.js is to use nvm [see these usage instructions](https://github.com/nvm-sh/nvm#usage).  If you are not using nvm, you can find OS-specific installation instructions [here](https://nodejs.org/en/download/). `npm` should be installed along with Node.js automatically.  If it is not, you can find instructions for installing `npm` [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
* [Grunt](https://gruntjs.com/) - This is the build tool that will be used to build your project.  You can install Grunt by running the following command in a terminal window:

```bash
npm install -g grunt-cli
```

### Usage

1. If you want to contribute to this template repository, clone this repository to your local development workstation.  If you want to build a project based on this template, you can either clone this repository, create your own repository using this template repository or download the source code as a zip file and extract it to your local development workstation.  The rest of these instructions assume you have used one of the preceding methods to establish a local copy of this repository on your local development workstation for active development.
2. Open a terminal window and navigate to the root directory of the project.
3. Run the following command to install the project dependencies:

```bash
npm install
```

4. Run the following command to build the project:

```bash
grunt
```

5. Run the following command to build and start the local web server hosting the built project:

```bash
grunt run
```

6. Grunt and the web content in this template project is configured to live reload the target browser whenever a change is made to files in the `src/public` directory.  After running the `grunt run` command, simply open your preferred editor to make changes and once you have saved your changes, the browser will automatically reload to display the changes.

#### Deploying to Github Pages

The following steps assume that you have created a personal Github repository from this project template and that you have cloned that repository to your local development workstation.  These instructions will NOT work if you have cloned this repository directly or if you have downloaded the source code as a zip file and extracted it to your local development workstation but have not created a Github repository from it.

7. After you have finished making changes and you want to publish them to Github Pages, commit all of your changes to your local Git repository and push them to your Github hosted repository.

8. Once your local repository and the Github repository are synchronized, run the following command to deploy the latest version of the project to Github Pages:

```bash
grunt deploy
```

9. You can now view the deployed project at the following URL: https://[your-github-username].github.io/[your-github-repository-name]

## Next Steps

1. [x] ~~Update the README.md with usage instructions for Grunt.~~
2. [x] ~~Add Bootstrap to the project.~~
3. [x] ~~Add tasks to deploy to Github Pages.~~
4. [ ] Add contribution instructions for this repository.
