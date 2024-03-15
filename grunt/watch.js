/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = {
    watch: {
        files: ['src/**/*'],
        tasks: ['sass', 'jshint', 'copy'],
        options: {
            livereload: true
        }
    }
};
  