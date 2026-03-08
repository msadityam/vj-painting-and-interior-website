"use client";

export const ContactForm = () => {
  return (
    <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="form-input"
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          className="form-input"
          placeholder="Your WhatsApp / mobile number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Requirements
        </label>
        <textarea
          id="message"
          rows={4}
          className="form-input"
          placeholder="Tell us about your painting or interior needs..."
        />
      </div>
      <button type="submit" className="form-submit">
        Submit (Preview Only)
      </button>
    </form>
  );
};
