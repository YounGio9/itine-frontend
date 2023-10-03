document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Retrieves values from form fields
      const senderName = document.getElementById("name").value;
      const senderEmail = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const body = document.getElementById("message").value;
  
      // Builds the query body in JSON format
      const requestBody = JSON.stringify({
        senderMail: senderEmail,
        senderName: senderName,
        subject: subject,
        body: body,
      });
      // https://backend-dev-itine.onrender.com/cities

      fetch("https://backend-dev-itine.onrender.com/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
        .then((response) => {
          if (response.ok) {
            alert("Message sent successfully!");
            contactForm.reset();
          } else {
            alert("An error occurred. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    });
  });
  