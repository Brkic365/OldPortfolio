import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

import Head from "next/head";

import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");

  // Checks if user got to success page which means he filled out all fields
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";

  // If user did not get to success page that means form is still visible
  const formVisible = !confirmationScreenVisible;

  // Confirmation message seen on success page after filling the contact form out
  const ConfirmationMessage = (
    <div className={styles.confirmed}>
      <p>
        Thank you for submitting this form. You should receive response within
        24-48 hours.
      </p>

      <button onClick={() => router.push("/contact", { shallow: true })}>
        Submit Another Response
      </button>
    </div>
  );

  const ContactForm = (
    <form
      className="container"
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${name}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className={styles.nameAndCompany}>
        <div className={styles.name}>
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.company}>
          <label htmlFor="company">
            Company <span>*</span>
          </label>
          <input id="company" name="company" required type="text" />
        </div>
      </div>

      <label htmlFor="email">
        E-mail Address <span>*</span>
      </label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">
        Message <span>*</span>
      </label>
      <textarea id="message" name="message" required />
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
      {formVisible ? ContactForm : ConfirmationMessage}
    </div>
  );
}
