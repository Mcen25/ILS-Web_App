function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}  

console.log('Client-side code running');

const button = document.getElementById('button1');
button.addEventListener('click', () => {
  const section = document.getElementById('section1');

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
});