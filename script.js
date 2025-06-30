document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('intro').classList.add('fadeOut');
    }, 3000);
  
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.page-section');
  
    function showOnly(id) {
      sections.forEach(section => section.classList.remove('active'));
      const target = document.getElementById(id);
      if (target) target.classList.add('active');
    }
  
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showOnly(targetId);
      });
    });
  
    showOnly('about');
  });
  