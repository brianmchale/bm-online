// script.js
window.addEventListener('DOMContentLoaded', function() {
  var photographs = [
    { src: '18160003.JPG', title: 'Middleground #7', year: '2022' },
    { src: '18160004.JPG', title: '', year: '2022' },
    { src: '18160006.JPG', title: 'Middleground #8', year: '2022' },
    { src: '18160007.JPG', title: 'Middleground #9', year: '2022' },
    { src: '53020001.JPG', title: '', year: '2022' },
    { src: '53020003.JPG', title: '', year: '2022' },
    { src: '53020006.JPG', title: '', year: '2022' },
    { src: '53020014.JPG', title: 'Middleground #2', year: '2022' },
    { src: '53020019.JPG', title: 'Middleground #1', year: '2022' },
    { src: '53020027.JPG', title: 'Middleground #3', year: '2022' },
    { src: '53030011.JPG', title: '', year: '2022' },
    { src: '53030014.JPG', title: '', year: '2022' },
    { src: '53030015.JPG', title: 'Middleground #4', year: '2022' },
    { src: '53030016.JPG', title: 'Middleground #5', year: '2022' },
    { src: '53030034.jpg', title: 'Middleground #6', year: '2022' },
    { src: '86840007.JPG', title: '', year: '2022' },
    { src: '86840023.JPG', title: '', year: '2022' },
    { src: '86850021.JPG', title: '', year: '2022' },
    { src: '86860006.JPG', title: 'Miami Beach Lifeguard', year: '2022' },
    { src: '86860007.JPG', title: 'Buzzard Rock, Asheville, NC', year: '2022' },
    { src: '86860009.JPG', title: 'Potty', year: '2022' },
    { src: '86860010.JPG', title: 'One Way Dead End', year: '2022' },
    { src: '86860017.JPG', title: 'edIT & ooah @ The Brooklyn Monarch', year: '2022' },
    { src: '86860023.JPG', title: 'technopagan @ Helltek', year: '2022' },
    { src: '86860027.JPG', title: 'FUCKTHEPHYCHS b2b Fortified Structures @ Helltek', year: '2022' },
    { src: '86860028.JPG', title: 'Untitled', year: '2022' },
    { src: '86860030.JPG', title: 'West Fourth', year: '2022' },
    { src: '86860031.JPG', title: 'Denim Tears Party', year: '2022' },
    { src: '86860034.JPG', title: 'djdt1', year: '2022' },
    { src: '86860035.JPG', title: 'djdt2', year: '2022' },
    { src: 'BIGGIE SMALLS.jpg', title: 'Portrait of Chris Smalls', year: '2022' },
    { src: 'IMG_0088.jpg', title: 'XR Drummer', year: '2022' },
    { src: 'IMG_1378.jpg', title: 'Brooklyn Summer', year: '2022' },
    { src: 'IMG_1389.jpg', title: 'Chris Smalls, ALU Labor Day', year: '2022' },
    { src: 'IMG_2563.jpg', title: 'Untitled', year: '2023' },
    { src: 'IMG_2577.jpg', title: 'Billboard 0', year: '2023' },
    { src: 'IMG_2797.jpg', title: 'GSB', year: '2023' },
    { src: 'IMG_2850.jpg', title: 'Untitled', year: '2023' },
    { src: 'Static Neuron #1.jpg', title: 'Static Neuron #1', year: '2022' },
    { src: 'Static Neuron #2.jpg', title: 'Static Neuron #2', year: '2022' },
    { src: 'Static Neuron #3.jpg', title: 'Static Neuron #3', year: '2022' },
    { src: 'Static Neuron #4.jpg', title: 'Static Neuron #4', year: '2022' },
    { src: 'Static Neuron #5.jpg', title: 'Static Neuron #5', year: '2022' },
    { src: 'Static Neuron #6.jpg', title: 'Static Neuron #6', year: '2022' },
    { src: 'Static Neuron #7.jpg', title: 'Static Neuron #7', year: '2022' },
    { src: 'Static Neuron #8.jpg', title: 'Static Neuron #8', year: '2022' },
    { src: 'Static Neuron #9.jpg', title: 'Static Neuron #9', year: '2022' },
    { src: 'Static Neuron #10.jpg', title: 'Static Neuron #10', year: '2022' },
    { src: 'alleyway.png', title: '', year: '2023' },
    { src: 'annasharon2_edit.png', title: '', year: '2023' },
    { src: 'dtla2.png', title: '', year: '2023' },
    { src: 'grafitti1.png', title: 'Digital Deadstock Zine pg. 15-16', year: '2023' },

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
