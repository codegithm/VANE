import emailjs from "emailjs-com";

export const sendEmail = async (templateParams) => {
  try {
    const result = await emailjs.send(
      "service_iz6t988", // Replace with your service ID
      "template_gfd4o2z", // Replace with your template ID
      templateParams,
      "6KiQB5SL_rMZaujzX" // Replace with your user ID (Public key from EmailJS)
    );
    console.log("Email successfully sent!", result.status, result.text);
    return result;
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
    throw new Error();
  }
};
