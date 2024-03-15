/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = {
    srcPublic: {
        expand: true,
        cwd: 'src/public',
        src: [ '**/*', '**/.*' ],
        dest: 'build'
    },
    bootstrapJs: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/js',
        src: '**/bootstrap.bundle.min.js',
        dest: 'build/assets/dist/bootstrap/js'
    },
    bootstrapIcons: {
        expand: true,
        cwd: 'node_modules/bootstrap-icons/icons',
        src: '**/bootstrap-fill.svg',
        dest: 'build/assets/dist/bootstrap-icons/icons'
    }
};
  