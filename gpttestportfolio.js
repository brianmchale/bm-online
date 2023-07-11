// script.js
window.addEventListener('DOMContentLoaded', function() {
  var photographs = [
    { src: '86860006.JPG', title: 'Miami Beach Lifeguard', year: '2022' },
    { src: '86860007.JPG', title: 'Buzzard Rock, Asheville, NC', year: '2022' },
    { src: '86860009.JPG', title: 'Potty', year: '2022' },
    { src: '86860010.JPG', title: 'One Way Dead End', year: '2022' },
    { src: '86860017.JPG', title: 'edIT & ooah @ The Brooklyn Monarch', year: '2023' },
    { src: '86860023.JPG', title: 'technopagan @ Helltek', year: '2021' },
    { src: '86860027.JPG', title: 'FUCKTHEPHYCHS b2b Fortified Structures @ Helltek', year: '2022' },
    { src: '86860028.JPG', title: 'Untitled', year: '2023' },
    { src: '86860030.JPG', title: 'West Fourth', year: '2021' },
    { src: '86860031.JPG', title: 'Denim Tears Party', year: '2022' },
    { src: '86860034.JPG', title: 'djdt1', year: '2023' },
    { src: '86860035.JPG', title: 'djdt2', year: '2021' },
    { src: 'BIGGIE SMALLS.jpg', title: 'Portrait of Chris Smalls', year: '2022' },
    { src: 'IMG_0088.jpg', title: 'XR Drummer', year: '2021' },
    { src: 'IMG_1378.jpg', title: 'Brooklyn Summer', year: '2022' },
    { src: 'IMG_1389.jpg', title: 'Title 2', year: '2023' },
    { src: 'IMG_2563.jpg', title: 'Title 3', year: '2021' },
    { src: 'IMG_2577.jpg', title: 'Title 1', year: '2022' },
    { src: 'IMG_2797.jpg', title: 'Title 2', year: '2023' },
    { src: 'IMG_2850.jpg', title: 'Title 3', year: '2021' },
    { src: 'grafitti1.png', title: 'Title 3', year: '2021' },
    { src: '23/25', title: 'Title 3', year: '2021' },
    { src: '24/25', title: 'Title 3', year: '2021' },
    { src: '25/25', title: 'Title 3', year: '2021' },
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
