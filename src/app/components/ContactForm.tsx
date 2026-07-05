export default function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">

      <input
        type="hidden"
        name="access_key"
        value="38e0b390-6d79-4e7b-8753-a902507bfb90"
      />

      <input
        type="hidden"
        name="redirect"
        value="https://lepremier-group.com"
      />

      <h2>Contact Us</h2>

      <input type="text" name="name" placeholder="Your Name" required />
      <br /><br />

      <input type="email" name="email" placeholder="Your Email" required />
      <br /><br />

      <input type="text" name="subject" placeholder="Subject" />
      <br /><br />

      <textarea name="message" placeholder="Message" required></textarea>
      <br /><br />

      <button type="submit">Send Message</button>

    </form>
  );
}