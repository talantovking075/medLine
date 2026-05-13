import './App.css'
import {
  FaHeartbeat, FaCapsules, FaUserMd, FaPhoneAlt, FaTruck, 
  FaClinicMedical, FaTimes, FaArrowUp, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', message: '' })

  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const doctorsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'services', ref: servicesRef },
        { id: 'doctors', ref: doctorsRef },
        { id: 'about', ref: aboutRef },
        { id: 'contact', ref: contactRef }
      ]

      const scrollPosition = window.scrollY + 150
      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 70,
      behavior: 'smooth'
    })
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Rahmat, ${formData.name}! Xabaringiz yuborildi.`)
    setIsModalOpen(false)
    setFormData({ name: '', phone: '', address: '', message: '' })
  }

  const doctors = [
    {
      name: "Dr. Alisher Ahmedov",
      role: "Terapevt",
      advice: "Kuniga kamida 2 litr suv ichish immunitetni mustahkamlaydi.",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Nigora Salimova",
      role: "Kardiolog",
      advice: "Yurak salomatligi uchun har kuni 30 daqiqa piyoda yuring.",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Jasur Umarov",
      role: "Farmatsevt",
      advice: "Dorilarni faqat shifokor ko'rsatmasi bo'yicha qabul qiling.",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"
    }
  ]

  const cards = [
    { icon: <FaCapsules />, title: 'Sifatli Dorilar', text: 'Eng sifatli va sertifikatlangan dorilar mavjud.' },
    { icon: <FaTruck />, title: 'Tez Yetkazib Berish', text: 'Buyurtmalar qisqa vaqt ichida yetkaziladi.' },
    { icon: <FaUserMd />, title: 'Professional Maslahat', text: 'Farmatsevtlardan bepul maslahat oling.' },
    { icon: <FaHeartbeat />, title: '24/7 Xizmat', text: 'Istalgan vaqtda xizmat ko‘rsatamiz.' },
    { icon: <FaClinicMedical />, title: 'Tibbiy Mahsulotlar', text: 'Vitaminlar va tibbiy vositalar mavjud.' },
    { icon: <FaPhoneAlt />, title: 'Online Buyurtma', text: 'Telefon orqali tez buyurtma bering.' }
  ]

  if (loading) {
    return (
      <div className="modern-loader">
        <div className="pulse-ring"></div>
        <div className="medical-cross">+</div>
        <h1>MEDILIFE</h1>
        <p>Yuklanmoqda...</p>
      </div>
    )
  }

  return (
    <div className="app">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
            <h2>Buyurtma / Bog'lanish</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Ismingiz" />
              </div>
              <div className="input-group">
                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Telefon raqamingiz" />
              </div>
              <button type="submit" className="submit-order-btn">Yuborish</button>
            </form>
          </div>
        </div>
      )}

      <nav className={`navbar_fixed ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav_container">
          <h1 onClick={() => scrollToSection(homeRef)}>MEDILIFE</h1>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection(homeRef)}>Bosh Sahifa</li>
            <li className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection(servicesRef)}>Xizmatlar</li>
            <li className={activeSection === 'doctors' ? 'active' : ''} onClick={() => scrollToSection(doctorsRef)}>Doktorlar</li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection(aboutRef)}>Biz Haqimizda</li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection(contactRef)}>Kontakt</li>
          </ul>
        </div>
      </nav>

      <header className="hero" ref={homeRef}>
        <div className="overlay">
          <div className="hero-content">
            <h2>Sog‘ligingiz Biz Uchun Muhim</h2>
            <p>Zamonaviy dorixona xizmati va sifatli mahsulotlar.</p>
            <button onClick={() => setIsModalOpen(true)}>Buyurtma Berish</button>
          </div>
        </div>
      </header>

      <section className="services" ref={servicesRef}>
        <h2 className="section-title">Bizning Xizmatlar</h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="doctors-section" ref={doctorsRef}>
        <h2 className="section-title">Mutaxassislar Maslahati</h2>
        <div className="doctor-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image-wrapper">
                <img src={doc.img} alt={doc.name} />
              </div>
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <span className="role">{doc.role}</span>
                <div className="advice-box">
                   <p><strong>Maslahat:</strong> {doc.advice}</p>
                </div>
                <button className="contact-doc-btn" onClick={() => setIsModalOpen(true)}>Bog'lanish</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" ref={aboutRef}>
        <div className="about-text">
          <h2>Biz Haqimizda</h2>
          <p>MEDILIFE dorixonasi original dorilar, professional xizmat va qulay narxlarni taqdim etadi.</p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop" alt="About" />
        </div>
      </section>

      <section className="stats">
        <div className="stat-box"><h2>10K+</h2><p>Mijozlar</p></div>
        <div className="stat-box"><h2>500+</h2><p>Dori Turlari</p></div>
        <div className="stat-box"><h2>24/7</h2><p>Xizmat</p></div>
        <div className="stat-box"><h2>99%</h2><p>Ishonch</p></div>
      </section>

      <section className="contact-section" ref={contactRef}>
        <h2 className="section-title">Biz bilan bog'laning</h2>
        <div className="contact-container">
          <div className="contact-info-cards">
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h4>Telefon</h4>
                <p>+998 90 123 45 67</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>info@medilife.uz</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Manzil</h4>
                <p>Toshkent sh, Chilonzor</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => {e.preventDefault(); alert('Xabar yuborildi!')}}>
            <input type="text" placeholder="To'liq ismingiz" required />
            <input type="tel" placeholder="Telefon raqamingiz" required />
            <textarea placeholder="Xabaringizni yozing..." rows="4" required></textarea>
            <button type="submit">Xabarni yuborish</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <h2>MEDILIFE Dorixonasi</h2>
        <p>Sog'ligingiz - bizning baxtimiz.</p>
        <p className="copyright">© 2026 Barcha huquqlar himoyalangan.</p>
      </footer>

      <button className={`back-to-top ${scrolled ? 'show' : ''}`} onClick={() => scrollToSection(homeRef)}>
        <FaArrowUp />
      </button>
    </div>
  )
}

export default App