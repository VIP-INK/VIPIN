document.addEventListener("DOMContentLoaded", () => {
    const professionElement = document.querySelector(".profession");
    // Animate profession text with a typewriter effect
    const text = professionElement.textContent;
    let index = 0;
    // Clear existing text for animation
    professionElement.textContent = "";
    // Typewriter animation
    const typeWriter = () => {
      if (index < text.length) {
        professionElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  });
  
  