// script.js
window.addEventListener('DOMContentLoaded', function() {
  var photographs = [
    { src: '/Users/brianmchale/Pictures/2023/2023/2023-05-28/Edited/IMG_3098.jpg', title: 'Title 1', year: '2022' },
    { src: '/Users/brianmchale/Pictures/2023/2023/2023-01-16/Edited/IMG_2577.jpg', title: 'Title 2', year: '2023' },
    { src: 'path/to/image3.jpg', title: 'Title 3', year: '2021' },
    // Add more photographs as needed
  ];

  var sidebarTitle = document.querySelector('.sidebar h1');
  var photographInfo = document.getElementById('photograph-info');
  var portfolioImage = document.getElementById('portfolio-image');

  // Randomly select a photograph
  var randomIndex = Math.floor(Math.random() * photographs.length);
  var randomPhotograph = photographs[randomIndex];

  // Update sidebar title
  sidebarTitle.textContent = randomPhotograph.title;

  // Update photograph info
  photographInfo.textContent = randomPhotograph.title + ', ' + randomPhotograph.year;

  // Update portfolio image source
  portfolioImage.src = randomPhotograph.src;

  // Update sidebar title
  sidebarTitle.textContent = 'Brian McHale'; // Update the sidebar title to 'Brian McHale'

  // Update sidebar title
  var fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Courier', 'Verdana'];
  var randomFontIndex = Math.floor(Math.random() * fontFamilies.length);
  sidebarTitle.style.fontFamily = fontFamilies[randomFontIndex];

});
