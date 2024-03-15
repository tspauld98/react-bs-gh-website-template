/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

module.exports = {
    dist: {
        options: {
            debugInfo: true,
            loadPath: ['node_modules']
        },
        files: [{
            expand: true,
            cwd: 'src/scss',
            src: ['**/*.scss'],
            dest: 'build/assets/css',
            ext: '.css'
        }]
    }
};