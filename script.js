//  // Get references to main elements
//  const menuToggle = document.getElementById('menuToggle');
//  const mobileMenu = document.getElementById('mobileMenu');
//  const menuButtons = document.querySelectorAll('.menu-item');
//  const subMenus = document.querySelectorAll('.submenu');
//  const submenuLinks = document.querySelectorAll('.submenu a');

//  // Function to close all submenus
//  function closeAllSubmenus() {
//      subMenus.forEach(subMenu => {
//          subMenu.classList.add('hidden');
//      });
//  }

//  // Function to toggle mobile menu visibility (3 dots button)
//  menuToggle?.addEventListener('click', () => {
//      mobileMenu.classList.toggle('hidden');
//      closeAllSubmenus(); // Close all submenus when toggling the main menu
//  });

//  // Function to open a specific submenu
//  function toggleSubmenu(submenuId) {
//      const submenu = document.getElementById(submenuId);
//      if (submenu) {
//          submenu.classList.toggle('hidden');
//      }
//  }

//  // Event listeners for top-level menu items
//  menuButtons.forEach(button => {
//      button.addEventListener('click', (event) => {
//          event.preventDefault();
//          const targetId = button.getAttribute('data-target');

//          // Close other submenus and open the clicked one
//          closeAllSubmenus();
//          toggleSubmenu(targetId);
//      });
//  });

//  // Close the sub-menu if clicking outside of it
//  document.addEventListener('click', function (event) {
//      if (!toggleButton.contains(event.target) && !subMenu.contains(event.target)) {
//          subMenu.classList.add('opacity-0', 'invisible');
//          subMenu.classList.remove('opacity-100', 'visible');
//      }
//  });

//  // Toggle for "Job Grids"
//  // Toggle for "Job Grids"
//  const jobGridsToggle = document.getElementById('job-grids-toggle');
//  const jobGridsMenu = document.getElementById('job-grids-menu');

//  jobGridsToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Grids menu
//      jobGridsMenu.classList.toggle('opacity-0');
//      jobGridsMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(jobGridsMenu);
//  });

//  // Toggle for "Job Lists"
//  const jobListsToggle = document.getElementById('job-lists-toggle');
//  const jobListsMenu = document.getElementById('job-lists-menu');

//  jobListsToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      jobListsMenu.classList.toggle('opacity-0');
//      jobListsMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(jobListsMenu);
//  });
//  // Toggle for "Job Lists"
//  const jobDetailToggle = document.getElementById('job-detail-toggle');
//  const jobDetailMenu = document.getElementById('job-detail-menu');

//  jobDetailToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      jobDetailMenu.classList.toggle('opacity-0');
//      jobDetailMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(jobDetailMenu);
//  });

//  const pagesemployeeToggle = document.getElementById('pages-employee-toggle');
//  const pagesemployeeMenu = document.getElementById('pages-employee-menu');

//  pagesemployeeToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagesemployeeMenu.classList.toggle('opacity-0');
//      pagesemployeeMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagesemployeeMenu);
//  });

//  const pagescandidateToggle = document.getElementById('pages-candidates-toggle');
//  const pagescandidateMenu = document.getElementById('pages-candidates-menu');

//  pagescandidateToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagescandidateMenu.classList.toggle('opacity-0');
//      pagescandidateMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagescandidateMenu);
//  });

//  const pageshelpcenterToggle = document.getElementById('pages-helpcenter-toggle');
//  const pageshelpcenterMenu = document.getElementById('pages-helpcenter-menu');

//  pageshelpcenterToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pageshelpcenterMenu.classList.toggle('opacity-0');
//      pageshelpcenterMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pageshelpcenterMenu);
//  });

//  const pagesblogToggle = document.getElementById('pages-blogs-toggle');
//  const pagesblogMenu = document.getElementById('pages-blogs-menu');

//  pagesblogToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagesblogMenu.classList.toggle('opacity-0');
//      pagesblogMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagesblogMenu);
//  });

//  const pagesauthToggle = document.getElementById('pages-auth-toggle');
//  const pagesauthMenu = document.getElementById('pages-auth-menu');

//  pagesauthToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagesauthMenu.classList.toggle('opacity-0');
//      pagesauthMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagesauthMenu);
//  });

//  const utilityToggle = document.getElementById('pages-utility-toggle');
//  const utilityMenu = document.getElementById('pages-utility-menu');

//  utilityToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      utilityMenu.classList.toggle('opacity-0');
//      utilityMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(utilityMenu);
//  });

//  const specialToggle = document.getElementById('pages-special-toggle');
//  const specialMenu = document.getElementById('pages-special-menu');

//  specialToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      specialMenu.classList.toggle('opacity-0');
//      specialMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(specialMenu);
//  });

//  // Toggle for Sub-Nested Menu inside Job Grids
//  const subToggles = document.querySelectorAll('.sub-toggle');
//  subToggles.forEach(toggle => {
//      toggle.addEventListener('click', function (e) {
//          e.preventDefault();

//          // Close all open submenus except the current one
//          const currentSubMenu = toggle.nextElementSibling;

//          // Close any open submenu before opening the current one
//          closeOtherSubmenus(currentSubMenu);

//          // Toggle the visibility of the current submenu
//          currentSubMenu.classList.toggle('opacity-0');
//          currentSubMenu.classList.toggle('invisible');
//      });
//  });

//  // Function to close all submenus except the current one
//  function closeOtherSubmenus(currentSubmenu) {
//      const subMenus = document.querySelectorAll('.sub-menu');
//      subMenus.forEach(subMenu => {
//          if (subMenu !== currentSubmenu) {
//              // Hide the other submenus
//              subMenu.classList.add('opacity-0');
//              subMenu.classList.add('invisible');
//          }
//      });
//  }
//  // Toggle for "Job Grids"
//  // Toggle for "Job Grids"
//  const jobsGridsToggle = document.getElementById('jobs-grids-toggle');
//  const jobsGridsMenu = document.getElementById('jobs-grids-menu');

//  jobsGridsToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Grids menu
//      jobsGridsMenu.classList.toggle('opacity-0');
//      jobsGridsMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(jobsGridsMenu);
//  });

//  // Toggle for "Job Lists"
//  const jobsListsToggle = document.getElementById('jobs-lists-toggle');
//  const jobsListsMenu = document.getElementById('jobs-lists-menu');

//  jobsListsToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      jobsListsMenu.classList.toggle('opacity-0');
//      jobsListsMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(jobsListsMenu);
//  });
//  // Toggle for "Job Lists"
//  const jobsDetailToggle = document.getElementById('jobs-detail-toggle');
//  const jobsDetailMenu = document.getElementById('jobs-detail-menu');

//  jobsDetailToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      jobsDetailMenu.classList.toggle('opacity-0');
//      jobsDetailMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(jobsDetailMenu);
//  });

//  const pagessemployeeToggle = document.getElementById('pagess-employee-toggle');
//  const pagessemployeeMenu = document.getElementById('pagess-employee-menu');

//  pagessemployeeToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagessemployeeMenu.classList.toggle('opacity-0');
//      pagessemployeeMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagesssemployeeMenu);
//  });

//  const pagesscandidateToggle = document.getElementById('pagess-candidates-toggle');
//  const pagesscandidateMenu = document.getElementById('pagess-candidates-menu');

//  pagesscandidateToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagesscandidateMenu.classList.toggle('opacity-0');
//      pagesscandidateMenu.classList.toggle('invisible');
//      // Close other submenus if opens
//      closeOtherSubmenus(pagesscandidateMenu);
//  });

//  const pagesshelpcenterToggle = document.getElementById('pagess-helpcenter-toggle');
//  const pagesshelpcenterMenu = document.getElementById('pagess-helpcenter-menu');

//  pagesshelpcenterToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagesshelpcenterMenu.classList.toggle('opacity-0');
//      pagesshelpcenterMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagesshelpcenterMenu);
//  });

//  const pagessblogToggle = document.getElementById('pagess-blogs-toggle');
//  const pagessblogMenu = document.getElementById('pagess-blogs-menu');

//  pagessblogToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagessblogMenu.classList.toggle('opacity-0');
//      pagessblogMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagessblogMenu);
//  });

//  const pagessauthToggle = document.getElementById('pagess-auth-toggle');
//  const pagessauthMenu = document.getElementById('pagess-auth-menu');

//  pagessauthToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      pagessauthMenu.classList.toggle('opacity-0');
//      pagessauthMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(pagessauthMenu);
//  });

//  const utilitysToggle = document.getElementById('pagess-utility-toggle');
//  const utilitysMenu = document.getElementById('pagess-utility-menu');

//  utilitysToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      utilitysMenu.classList.toggle('opacity-0');
//      utilitysMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(utilitysMenu);
//  });

//  const specialsToggle = document.getElementById('pagess-special-toggle');
//  const specialsMenu = document.getElementById('pagess-special-menu');

//  specialsToggle.addEventListener('click', function (e) {
//      e.preventDefault();
//      // Toggle visibility of the Job Lists menu
//      specialsMenu.classList.toggle('opacity-0');
//      specialsMenu.classList.toggle('invisible');
//      // Close other submenus if open
//      closeOtherSubmenus(specialsMenu);
//  });

//  // Toggle for Sub-Nested Menu inside Job Grids
//  const subToggless = document.querySelectorAll('.sub-toggle');
//  subToggles.forEach(toggle => {
//      toggle.addEventListener('click', function (e) {
//          e.preventDefault();

//          // Close all open submenus except the current one
//          const currentSubMenu = toggle.nextElementSibling;

//          // Close any open submenu before opening the current one
//          closeOtherSubmenus(currentSubMenu);

//          // Toggle the visibility of the current submenu
//          currentSubMenu.classList.toggle('opacity-0');
//          currentSubMenu.classList.toggle('invisible');
//      });
//  });

//  // Function to close all submenus except the current one
//  function closeOtherSubmenus(currentSubmenu) {
//      const subMenus = document.querySelectorAll('.sub-menu');
//      subMenus.forEach(subMenu => {
//          if (subMenu !== currentSubmenu) {
//              // Hide the other submenus
//              subMenu.classList.add('opacity-0');
//              subMenu.classList.add('invisible');
//          }
//      });
//  }
