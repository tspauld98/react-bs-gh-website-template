/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = {
    server: {
      options: {
        port: 8888, // custom port
        base: 'build', // current directory for 'index.html' is root
        livereload: true, // watch for changes in 'build' directory
        open: {
          target: 'http://localhost:8888',
        }
      }
    }
};
  