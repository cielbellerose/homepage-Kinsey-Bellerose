// --- Badge Color Selector ---
function updateCustomizableColor(color) {
  const badges = document.querySelectorAll(".badge");
  for (let i = 0; i < badges.length; i++) {
    badges[i].style.backgroundColor = color;
  }
  const cards = document.querySelectorAll(".card");
  for (let x = 0; x < cards.length; x++) {
    cards[x].style.boxShadow = `0 10px 20px ${color}`;
  }

  document.querySelector(".image-title").style.color = color;
  document.querySelector(".intro-img").style.borderColor = color;

  const dividers = document.querySelectorAll("hr.special-border");
  for (let x = 0; x < dividers.length; x++) {
    dividers[x].style.borderColor = color;
  }

}

document
  .querySelector(".red-button-special")
  .addEventListener("click", () => updateCustomizableColor("#800000"));
document
  .querySelector(".orange-button-special")
  .addEventListener("click", () => updateCustomizableColor("#6f4e37"));
document
  .querySelector(".green-button-special")
  .addEventListener("click", () => updateCustomizableColor("#586f37"));
document
  .querySelector(".blue-button-special")
  .addEventListener("click", () => updateCustomizableColor("#37586f"));
document
  .querySelector(".purple-button-special")
  .addEventListener("click", () => updateCustomizableColor("#4e376f"));
document
  .querySelector(".pink-button-special")
  .addEventListener("click", () => updateCustomizableColor("#9F2B68"));

// --- Light/Dark Mode Selector ---

// Save current state
let isDark = false;

function setDarkMode() {
  isDark = !isDark; // switch state
  document.querySelector("body").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  document.querySelector(".navbar").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  document.querySelector(".footer").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.borderColor = isDark ? "#121212" : "#ffffff";
  });

  document.querySelector("body").style.color = isDark ? "#ffffff" : "#000000"; // Text color switch
  document.querySelector(".navbar-brand").style.color = isDark
    ? "#ffffff"
    : "#000000";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.style.color = isDark ? "#ffffff" : "#000000";
  });
  document.querySelector(".bi.bi-github").style.color = isDark
    ? "#ffffff"
    : "#000000";
  document.querySelector(".bi.bi-linkedin").style.color = isDark
    ? "#ffffff"
    : "#000000";
  document.querySelector(".btn.moon-button").style.color = isDark
    ? "#ffffff"
    : "#000000";
  document.querySelector(".border-x-axis").style.borderColor = isDark
    ? "#ffffff"
    : "#000000";
}

document
  .querySelector(".moon-button")
  .addEventListener("click", () => setDarkMode());

// AI Generated Scripts

// skills.js - JavaScript for Skills Page Interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initSkillLevelAnimations();
    initStackExplorer();
    initSkillCardInteractions();
    initTooltipEnhancements();
    
    // Add scroll animations for skill cards
    initScrollAnimations();
});

// Skill Level Animation
function initSkillLevelAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Create intersection observer to trigger animations when skills come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.querySelector('.skill-level');
                const skillWidth = skillLevel.getAttribute('data-level') + '%';
                
                // Animate the skill level bar
                setTimeout(() => {
                    skillLevel.style.width = skillWidth;
                }, 200);
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe each skill item
    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Stack Explorer Functionality
function initStackExplorer() {
    const stackButtons = document.querySelectorAll('.stack-btn');
    const stackContents = document.querySelectorAll('.stack-content');
    
    stackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetStack = this.getAttribute('data-stack');
            
            // Remove active class from all buttons and contents
            stackButtons.forEach(btn => btn.classList.remove('active'));
            stackContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetStack).classList.add('active');
            
            // Add a subtle animation effect
            const activeContent = document.getElementById(targetStack);
            activeContent.style.animation = 'none';
            setTimeout(() => {
                activeContent.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        });
    });
}

// Skill Card Interactions
function initSkillCardInteractions() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
        
        // Add keyboard navigation support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make cards focusable for accessibility
        card.setAttribute('tabindex', '0');
    });
}

// Enhanced Tooltips for Skill Items
function initTooltipEnhancements() {
    // Initialize Bootstrap tooltips if available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Add custom tooltips for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const skillName = item.querySelector('span').textContent;
        const skillLevel = item.querySelector('.skill-level').getAttribute('data-level');
        
        // Add custom tooltip on hover
        item.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = `${skillName}: ${skillLevel}% proficiency`;
            tooltip.style.position = 'absolute';
            tooltip.style.background = 'rgba(0,0,0,0.8)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '0.8rem';
            tooltip.style.zIndex = '1000';
            tooltip.style.top = '-40px';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
        });
        
        item.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.custom-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Scroll Animations for Skill Cards
function initScrollAnimations() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInFromRight 0.6s ease-out forwards';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(30px)';
        cardObserver.observe(card);
    });
}

// Additional utility functions for enhanced interactivity

// Function to shuffle skill items (for a dynamic presentation)
function shuffleSkillItems() {
    const skillItemsContainers = document.querySelectorAll('.skill-items');
    
    skillItemsContainers.forEach(container => {
        const items = Array.from(container.querySelectorAll('.skill-item'));
        
        // Shuffle the array
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            container.appendChild(items[j]);
        }
    });
}

// Function to highlight a specific skill
function highlightSkill(skillName) {
    const allSkills = document.querySelectorAll('.skill-item');
    
    // Remove highlight from all skills
    allSkills.forEach(skill => {
        skill.style.background = '';
        skill.style.boxShadow = '';
    });
    
    // Highlight the specified skill
    const targetSkill = Array.from(allSkills).find(skill => 
        skill.querySelector('span').textContent.toLowerCase().includes(skillName.toLowerCase())
    );
    
    if (targetSkill) {
        targetSkill.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))';
        targetSkill.style.boxShadow = '0 4px 8px rgba(102, 126, 234, 0.3)';
        
        // Scroll to the skill
        targetSkill.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Export functions for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initSkillLevelAnimations,
        initStackExplorer,
        initSkillCardInteractions,
        initTooltipEnhancements,
        shuffleSkillItems,
        highlightSkill
    };
}