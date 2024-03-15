/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

const ghpages = require('gh-pages');

module.exports = function(grunt) {
  grunt.registerTask('publishWebsite', 'Publish to GitHub Pages', function() {
    const done = this.async();

    // Configuration for the gh-pages module
    const options = {
      branch: 'gh-pages',  // Replace with the branch you want to deploy to
      //repo: 'https://github.com/your-username/your-repo.git',  // Replace with your GitHub repository URL
      dotfiles: true,
      message: 'Auto-generated commit by Grunt'
    };

    // Path to the directory you want to publish
    const sourceDir = 'build';  // Change 'dist' to your actual build directory

    // Publish to GitHub Pages
    ghpages.publish(sourceDir, options, function(err) {
      if (err) {
        grunt.log.error('Error publishing to GitHub Pages:', err);
        done(false);
      } else {
        grunt.log.ok('Published to GitHub Pages');
        done();
      }
    });
  });
};
