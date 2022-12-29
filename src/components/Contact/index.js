import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import Lottie from "react-lottie";
import lottieData from "../../assets/email.json"
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const form = useRef()
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_925hkjo', 'template_uwxvvek', form.current, 'GwS1Tixtjmkq_5NQZ')
      .then(
        () => {
          alert('Message successfully sent!')
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <label className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleOnchange}
                    required />
                </label>
                <label className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnchange}
                    required
                  />
                </label>
                <label>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleOnchange}
                    required
                  />
                </label>
                <label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleOnchange}
                  ></textarea>
                </label>
                <label>
                  <input type="submit" className="flat-button" value="SEND" />
                </label>
            </form>
          </div>
        </div>
      </div>
      <div className='lottie'>
        <Lottie
          options={defaultOptions}
          height='100%'
          width='100%'
          isStopped={false}
          isPaused={false}
        />
      </div>
    </>
  )
}

export default Contact;
