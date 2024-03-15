/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

// If in development mode, load the livereload.js script and set the href of the <a> tag to the root of the site.
if (window.location.hostname === "localhost") {
    var devReloaderScript = document.createElement("script");
    devReloaderScript.src = "http://localhost:35729/livereload.js";
    document.body.appendChild(devReloaderScript);
}
