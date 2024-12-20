// scripts.js

function openTab(event, tabName) {
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Remove active class from all tabs
    const allTabLinks = document.querySelectorAll('.tab');
    allTabLinks.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Show the clicked tab's content
    const activeTabContent = document.getElementById(tabName);
    activeTabContent.classList.add('active');
  
    // Add active class to the clicked tab
    event.currentTarget.classList.add('active');
  }
  
  // Optionally, make the first tab active by default
  document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tab');
    if (firstTab) firstTab.click(); // Trigger click to activate the first tab
  });
  