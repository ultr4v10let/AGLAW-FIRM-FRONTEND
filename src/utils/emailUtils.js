import emailjs from "@emailjs/browser";

export const sendEmail = () => {
  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
      publicKey: "FB5W43K1EhcwU2HRw",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
