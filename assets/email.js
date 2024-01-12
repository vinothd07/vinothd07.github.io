const messageBody = document.getElementById("message_content");
const fromMail = document.getElementById("contact_email");
const contactName = document.getElementById("contact_name");
const subject = document.getElementById("subject_in");
const contactForm = document.getElementById("submit-form");
contactForm.addEventListener("click", (event) => {
  (async () => {
    console.log(event);
    alertify.set("notifier", "position", "top-right");

    if (
      !fromMail.value &&
      !subject.value &&
      !messageBody.value &&
      !contactName.value
    ) {
      alertify.error("Please fill in all the details to send the message : )");
      return;
    }

    var form = document.getElementById("gform");
    event.preventDefault();
    var data = new FormData(form);
    console.log(data);
    fetch("https://formspree.io/f/xeqyoajg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        alertify.success("Form submited successfully. I will contact you soon");
        form.reset();
      })
      .catch((error) => {
        alertify.error(
          "Oops! There was a problem submitting your form. Try to contact me at P.afeesudheen@gmail.com",
          0
        );
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  })();
});
