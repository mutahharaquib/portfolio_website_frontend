 // Navigation active state
 const sections = document.querySelectorAll('section');
 const navLinks = document.querySelectorAll('nav a');
 
 window.addEventListener('scroll', () => {
     let current = '';
     
     sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         
         if (pageYOffset >= (sectionTop - 300)) {
             current = section.getAttribute('id');
         }
     });
     
     navLinks.forEach(link => {
         link.classList.remove('text-blue-500');
         if (link.getAttribute('href') === `#${current}`) {
             link.classList.add('text-blue-500');
         }
     });
     
     // Back to top button
     const backToTop = document.getElementById('backToTop');
     if (window.pageYOffset > 300) {
         backToTop.classList.remove('opacity-0', 'invisible');
         backToTop.classList.add('opacity-100', 'visible');
     } else {
         backToTop.classList.remove('opacity-100', 'visible');
         backToTop.classList.add('opacity-0', 'invisible');
     }
 });
 
 // Back to top functionality
 document.getElementById('backToTop').addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
 
 // Scroll reveal animation
 const fadeElements = document.querySelectorAll('.fade-in');
 
 const fadeInObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, {
     threshold: 0.1
 });
 
 fadeElements.forEach(element => {
     fadeInObserver.observe(element);
 });