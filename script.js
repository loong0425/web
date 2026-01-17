document.addEventListener('DOMContentLoaded', function() {
    // =================首页滚动触发=================
    const triggerElement = document.querySelector('.scroll-trigger');
    
    if (triggerElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        observer.observe(triggerElement);
    }

    // ================= 鼠标悬停切换=================
    const navDots = document.querySelectorAll('.nav-dot');
    const contentBlocks = document.querySelectorAll('.content-block');

  
    navDots.forEach(dot => {
        dot.addEventListener('mouseenter', function() {
     
            navDots.forEach(d => d.classList.remove('active'));
        
            this.classList.add('active');

      
            const targetId = this.getAttribute('data-target');

       
            contentBlocks.forEach(block => {
                block.classList.remove('active');
            });
            
   
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

 
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const mainNav = document.querySelector('.main-nav');
    if (mobileNavBtn && mainNav) {
        mobileNavBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
})
window.addEventListener('scroll', () => {
    const intro = document.querySelector('.intro-section');
    if (!intro) return;
    
 
    const triggerPoint = window.innerHeight * 0.6;
    if (intro.getBoundingClientRect().top < triggerPoint) {
        intro.classList.add('visible');
    }
});