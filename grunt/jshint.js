/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = {
    files: [
      'Gruntfile.js',
      'grunt/**/*.js',
      'grunt/**/*.json',
      'src/public/assets/js/**/*.js',
      'tasks/**/*.js',
      'test/**/*.js'
    ],
    options: {
      esversion: 6,
      globals: {
        jQuery: true
      }
    }
};
  