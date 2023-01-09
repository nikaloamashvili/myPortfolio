import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti'

export default function ContactMe(){

    function addClass() {
        document.body.classList.add("sent");
      }
      
      const [sub,setSub]=React.useState(false);
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
        addClass();
        setSub(true);
        emailjs.sendForm('service_de6mw7i', 'template_cjggtiw', form.current, 'UUbH33sVvjrgRedps')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      
    return (
       <form className="contact-me-body" id='contact' ref={form}>

        <small className="small">Enter message (optional) and click button "Send"</small>
<div className="wrapper centered">
{sub &&  <div  className="Confetti"><Confetti 
              width={1500}
              height={500}
              /></div>}
  <article className="letter">
    <div className="side">
      <h1 className="ch1">Contact me</h1>
      <p className="cp">
        <textarea placeholder="Your message" className="Ctextarea" name="message"></textarea>
      </p>
    </div>
    <div className="side">
      <p className="cp">
        <input type="text" placeholder="Your name" className="cinput" name="user_name"></input>
      </p>
      <p className="cp">
        <input type="email" placeholder="Your email" className="cinput" name="user_email"></input>
      </p>
      <p className="cp">
        <button id="sendLetter" onClick={sendEmail}>Send</button>
      </p>
    </div>
  </article>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
</div>
<small className="small"> .This website was made by me using React, CSS3 with multiple React libraries and toolkits, such as: Bootstrap, vertical timeline etc. You can check out the code...
                    <a href="https://github.com/nikaloamashvili" target="_blank" rel="noreferrer nofollow" >here</a>.
                     Icons were used on this website and on my cv, license
                    <a href="https://fontawesome.com/license/free" target="_blank" rel="noreferrer nofollow">here</a>.</small>
<p className="result-message centered">Thank you for your message</p></form>

    )
};

