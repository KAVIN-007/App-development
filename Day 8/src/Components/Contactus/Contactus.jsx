import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./Contactus.css";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_b0kmoin",
    //     "template_mlrp5oe",
    //     form.current,
    //     "wbA_n0BCZd4WpyuS8"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("Message has been sent");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Message has not been sent");
    //     }
    //   );
  };

  const [questions] = useState([
    {
      id: 1,
      question: "How can I contact your customer support?",
      answer: "You can contact our customer support team by sending an email to support@example.com."
    },
    {
      id: 2,
      question: "What are your office hours?",
      answer: "Our office hours are from 9:00 AM to 5:00 PM, Monday to Friday."
    },
    {
      id: 3,
      question: "Do you offer refunds for your products?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our products."
    }
  ]);

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleViewAnswer = (id) => {
    setSelectedQuestion(id);
  };

  return (
    <>
    <div className="main-contact">
      <div className="contact-container1">
        <div className="TitleContact">
          <h1>Contact Us</h1>
        </div>
            <div className="contact-img1"><img
          src="https://res.cloudinary.com/dnngdn8ev/image/upload/v1695534347/wired-lineal-177-envelope-mail-send_cs1pis.gif"
          alt="Description of the image"
        /></div>
      </div>
    <div className="contact-container2">
      
      <div className="contact-container">

      <h2>Send me a message</h2>
      <p>
        Feel free to get in touch with me with anything related to Web Development or you can just say hi. I will get back to you as soon as possible.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="wrapper">
          <input type="text" name="name" placeholder="Your name" />
          <div className="gradient-bg"></div>
        </div>
        <div className="wrapper">
          <input type="email" name="user_email" placeholder="Email address" />
          <div className="gradient-bg"></div>
        </div>
        
        <div className="wrapper wrapper-big">
          <textarea name="message" placeholder="Message"></textarea>
          <div className="gradient-bg"></div>
            
        </div>
        <button className="submitcontact" type="submit">Send</button>
      </form>

       
     
      <Link className='homebtnn' to="/home">Go back to Home</Link>

    </div>
      </div>
    </div>
    <div className="contact-us">
    <ul className="question-list">
      {questions.map((question) => (
        <li key={question.id}>
          <div className="question">
            {question.question}
          </div>
          {selectedQuestion === question.id ? (
            <div className="answer">
              {question.answer}
            </div>
          ) : (
            <button
              className="view-answer-button"
              onClick={() => handleViewAnswer(question.id)}
            >
              View Answer
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
  </>
  );
};

export default Contactus