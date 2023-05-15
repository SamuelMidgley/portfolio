import { useState } from 'preact/hooks'
import './Contact.css'
import './Contact.scss'

export default function Contact() {
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  return (
    <section className="contact">
      <div className="contact-side">Contact</div>
      <div className="container">
        <h2 id="contact">Contact me.</h2>
        <label className="contact-label">Subject</label>
        <input
          className="contact-input"
          value={subject}
          onChange={(e) =>
            setSubject((e.currentTarget as HTMLInputElement).value)
          }
          placeholder="Enter your subject here..."
        />

        <label className="contact-label">Message</label>
        <textarea
          className="contact-input"
          value={message}
          onChange={(e) =>
            setMessage((e.currentTarget as HTMLTextAreaElement).value)
          }
          rows={10}
          placeholder="Enter your message here..."
        />
        <a
          href={`mailto:midgley.sam@gmail.com?subject=${subject}&body=${message}`}
          className="contact-button"
        >
          Send
        </a>
      </div>
    </section>
  )
}
