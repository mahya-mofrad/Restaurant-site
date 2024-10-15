import { useState } from "react";
import styles from "./BookTable.module.css";
import SectionTitle from "../Section title/SectionTitle";

export default function BookTableForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate each field
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.date) {
      newErrors.date = "date is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Errors found:", newErrors);
      return;
    }

    console.log("Form data:", formData);

    // Start loading and reset sent status
    setLoading(true);
    setSent(false);

    setTimeout(() => {
      setLoading(false);
      setSent(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        message: "",
      });

      // Hide the sent message after 10 seconds
      setTimeout(() => {
        setSent(false);
      }, 10000);
    }, 3000); // Simulate async operation
  };

  return (
    <section className={`container ${styles.bookTable}`}>
      <SectionTitle title="RESERVATION" subTitle="Book a Table" />
      <form
        className={`${styles.emailForm}`}
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row">
          <div className={`col-lg-4 col-md-12 mt-md-3 ${styles.formGroup}`}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.error : ""}
            />
            {errors.name && (
              <div className={styles.validate}>{errors.name}</div>
            )}
          </div>
          <div className={`col-lg-4 col-md-6 mt-3 mt-md-3 ${styles.formGroup}`}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.error : ""}
            />
            {errors.email && (
              <div className={styles.validate}>{errors.email}</div>
            )}
          </div>
          <div className={`col-lg-4 col-md-6 mt-3 mt-md-3 ${styles.formGroup}`}>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? styles.error : ""}
            />
            {errors.phone && (
              <div className={styles.validate}>{errors.phone}</div>
            )}
          </div>
        </div>
        <div className="row">
          <div className={`col-lg-4 col-md-12 mt-3 ${styles.formGroup}`}>
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? styles.error : ""}
            />
            {errors.date && (
              <div className={styles.validate}>{errors.date}</div>
            )}
          </div>
          <div className={`col-lg-4 col-md-6 mt-3 ${styles.formGroup}`}>
            <input
              type="text"
              name="time"
              placeholder="Time"
              value={formData.time}
              onChange={handleChange}
              className={errors.time ? styles.error : ""}
            />
          </div>
          <div className={`col-lg-4 col-md-6 mt-3 ${styles.formGroup}`}>
            <input
              type="number"
              name="people"
              placeholder="# of people"
              value={formData.people}
              onChange={handleChange}
              className={errors.people ? styles.error : ""}
            />
          </div>
        </div>
        <div className={`mt-3 ${styles.formGroup}`}>
          <textarea
            name="message"
            rows="5"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? styles.error : ""}
          ></textarea>
        </div>
        <div className="mb-3">
          {loading && <div className={styles.loading}>Loading...</div>}
          {sent && (
            <div className={styles.sentMessage}>
              Your booking request was sent. We will call back or send an Email
              to confirm your reservation. Thank you!
            </div>
          )}
          <div className={styles.errorMessage}></div>
        </div>
        <div className="text-center">
          <button type="submit" className={styles.submitButton}>
            Book a Table
          </button>
        </div>
      </form>
    </section>
  );
}
