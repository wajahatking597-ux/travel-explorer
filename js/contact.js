
// EmailJS start 
(function() {
  emailjs.init("xTJias16hS1rZxGCC");
})();

//  page load 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm"); 

  // Form submit 
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    emailjs.sendForm("service_slcsufw", "template_u64eznb", form)
      .then(() => {
        alert(" Message sent!");
        form.reset(); 
      })
      .catch((err) => alert(" Error!: " + JSON.stringify(err)));
  });
});
