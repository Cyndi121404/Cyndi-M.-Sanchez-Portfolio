document.addEventListener('DOMContentLoaded', function() {
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelector('.nav-links');

    navMobile.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close hamburger menu when a nav link is clicked
    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});






let isNavActive = false;
let lastParticleTime = 0;
const particleThrottleDelay = 50; // milliseconds

document.addEventListener('mousemove', (e) => {
    if (isNavActive) return;

    const now = Date.now();
    if (now - lastParticleTime < particleThrottleDelay) return;
    lastParticleTime = now;

    const container = document.getElementById('particles-container');

    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    container.appendChild(particle);

    setTimeout(() => {
      particle.style.transition = 'all 1s ease-out';
      particle.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)`;
      particle.style.opacity = 0;
    }, 10);

    setTimeout(() => {
      particle.remove();
    }, 1100);
});

// Track nav menu state
const navLinks = document.querySelector('.nav-links');
const observer = new MutationObserver(() => {
    isNavActive = navLinks.classList.contains('active');
});







function generateStars(n) {
    let value = `${Math.floor(Math.random() * 3000)}px ${Math.floor(Math.random() * 3000)}px #FFF`;
    for (let i = 1; i < n; i++) {
      value += `, ${Math.floor(Math.random() * 3000)}px ${Math.floor(Math.random() * 3000)}px #FFF`;
    }
    return value;
  }
  
  // Reduced star counts for better performance
  document.documentElement.style.setProperty('--shadows-small', generateStars(500));
  document.documentElement.style.setProperty('--shadows-medium', generateStars(200));
  document.documentElement.style.setProperty('--shadows-big', generateStars(100));







  //Projects
  document.addEventListener('DOMContentLoaded', function () {
    // Select all filter buttons and project boxes
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectBoxes = document.querySelectorAll('.project-box');
    
    // Function to handle showing or hiding projects based on filter
    function filterProjects(filter) {
      projectBoxes.forEach(box => {
        const projectType = box.getAttribute('data-type');
        
        // Show or hide based on the selected filter
        if (filter === 'all' || projectType === filter) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    }

    // Loop through each filter button
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add the 'active' class to the clicked button
        button.classList.add('active');
        
        // Get the filter type from the clicked button's data-filter attribute
        const filter = button.getAttribute('data-filter');
        
        // Call the filter function to show/hide projects
        filterProjects(filter);
      });
    });

    // Initial filter - show all projects by default
    filterProjects('all');
  });