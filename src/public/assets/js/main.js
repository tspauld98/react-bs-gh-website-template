/*******************************************************************************
 * Copyright (c) 2023 Battle Road Consulting. All rights reserved.
 *******************************************************************************/

import "../dist/bootstrap/js/bootstrap.bundle.min.js";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover);
  });
