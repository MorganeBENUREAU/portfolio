import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <main className="font-quicksand flex flex-col justify-around items-center text-left indent-4 flex-1-0-auto w-4/5 mt-28 mb-2 mx-auto sm:mt-20 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h1 className="font-cabin text-2xl uppercase mb-4">Contact</h1>

      <section className="p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-6 text-center">
          Formulaire de contact
        </h2>

        {message ? (
          <p className="font-cabin text-l mb-6 text-center">
            Votre message a bien été envoyé.
          </p>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            method="post"
            id="contactForm"
            name="contactForm"
            className="flex flex-col"
          >
            <div className="flex flex-col my-6">
              <label htmlFor="firstname">Prénom: </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Votre prénom"
                required
                className="border border-solid border-gray-400"
              />
              <label htmlFor="lastname">Nom: </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Votre nom"
                required
                className="border border-solid border-gray-400"
              />
              <label htmlFor="email">email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Votre email"
                required
                className="border border-solid border-gray-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                id="message"
                rows='8'
                placeholder="Votre message"
                required
                className="border border-solid border-gray-400 w-full"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Envoyer"
              className="border border-solid border-gray-500 px-2 rounded "
            />
          </form>
        )}
      </section>
    </main>
  );
}

export default Contact;
