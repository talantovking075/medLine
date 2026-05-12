import './App.css'

import {
  FaHeartbeat,
  FaCapsules,
  FaUserMd,
  FaPhoneAlt,
  FaTruck,
  FaClinicMedical
} from 'react-icons/fa'

import { useEffect, useState } from 'react'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2500)

  }, [])

  if (loading) {
    return (

      <div className="modern-loader">

        <div className="pulse-ring"></div>

        <div className="medical-cross">
          +
        </div>

        <h1>MEDILIFE</h1>

        <p>Yuklanmoqda...</p>

      </div>

    )
  }

  const cards = [
    {
      icon: <FaCapsules />,
      title: 'Sifatli Dorilar',
      text: 'Eng sifatli va sertifikatlangan dorilar mavjud.'
    },

    {
      icon: <FaTruck />,
      title: 'Tez Yetkazib Berish',
      text: 'Buyurtmalar qisqa vaqt ichida yetkaziladi.'
    },

    {
      icon: <FaUserMd />,
      title: 'Professional Maslahat',
      text: 'Farmatsevtlardan bepul maslahat oling.'
    },

    {
      icon: <FaHeartbeat />,
      title: '24/7 Xizmat',
      text: 'Istalgan vaqtda xizmat ko‘rsatamiz.'
    },

    {
      icon: <FaClinicMedical />,
      title: 'Tibbiy Mahsulotlar',
      text: 'Vitaminlar va tibbiy vositalar mavjud.'
    },

    {
      icon: <FaPhoneAlt />,
      title: 'Online Buyurtma',
      text: 'Telefon orqali tez buyurtma bering.'
    }
  ]

  return (
    <div className="app">

      <header className="hero">

        <div className="overlay">

          <nav className="navbar">

            <h1>MEDILIFE</h1>

            <ul>
              <li>Bosh Sahifa</li>
              <li>Xizmatlar</li>
              <li>Mahsulotlar</li>
              <li>Kontakt</li>
            </ul>

          </nav>

          <div className="hero-content">

            <h2>Sog‘ligingiz Biz Uchun Muhim</h2>

            <p>
              Zamonaviy dorixona xizmati va sifatli mahsulotlar.
            </p>

            <button>Buyurtma Berish</button>

          </div>

        </div>

      </header>

      <section className="about">

        <div className="about-text">

          <h2>Biz Haqimizda</h2>

          <p>
            MEDILIFE dorixonasi original dorilar,
            professional xizmat va qulay narxlarni taqdim etadi.
          </p>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

        </div>

      </section>

      <section className="services">

        <h2 className="section-title">
          Bizning Xizmatlar
        </h2>

        <div className="cards">

          {cards.map((card, index) => (

            <div className="card" key={index}>

              <div className="icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </div>

          ))}

        </div>

      </section>

      <section className="stats">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Mijozlar</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Dori Turlari</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Xizmat</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Ishonch</p>
        </div>

      </section>

      <footer className="footer">

        <h2>MEDILIFE Dorixonasi</h2>

        <p>📍 Toshkent shahri</p>

        <p>📞 +998 90 123 45 67</p>

        <p>© 2026 Barcha huquqlar himoyalangan.</p>

      </footer>

    </div>
  )
}

export default App