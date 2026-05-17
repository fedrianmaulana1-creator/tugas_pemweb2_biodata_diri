import React, { useState, useEffect } from 'react';
import './App.css';
import fotoProfil from './assets/foto-fedrian.jpg';

const posters = {
  AttackOnTitan: 'https://thumbor.prod.vidiocdn.com/RL91LW9lG17ymoppUDjb71P4jOc=/filters:quality(70)/vidio-media-production/uploads/image/source/20306/551f4c.jpg', 
  PeakyBlinders: 'https://m.media-amazon.com/images/M/MV5BNTdlNTNjNjctYTg2MC00NTFlLTliNTctODFiZjZmNWRkYTVlXkEyXkFqcGc@._V1_.jpg', 
  venom: 'https://play-lh.googleusercontent.com/1VHYGu1ANxPKgD6dC26YapS96aZuX9O3KH4xhhgrTtUPRfUjEWphhM_Lvve0zQr0eTE9XX60u9wHOvMjbb0=w240-h480-rw' 
};

function App() {
  const [modal, setModal] = useState({ isOpen: false, zodiacName: '', emoji: '' });
  const [activeSection, setActiveSection] = useState('home');

  const biodata = {
    nama: "Fedrian Maulana",
    pendidikan: "Universitas Teknologi Bandung",
    jurusan: "Mahasiswa Teknik Informatika",
    nim: "23552011344",
    tanggalLahir: "2005-02-17" 
  };

  const favoriteMovies = [
    { 
      id: 1, 
      title: "Attack on Titan (The Last Attack)", 
      genre: "Anime - Action", 
      poster: posters.AttackOnTitan,
      watchUrl: "https://www.vidio.com/premier/11295/attack-on-titan-the-last-attack" 
    },
    { 
      id: 2, 
      title: "Peaky Blinders (The Immortal Man)", 
      genre: "Action - Drama", 
      poster: posters.PeakyBlinders,
      watchUrl: "https://www.netflix.com/id/title/80002479" 
    },
    { 
      id: 3, 
      title: "Venom 3 (The Last Dance)", 
      genre: "Fantasy - Action", 
      poster: posters.venom,
      watchUrl: "https://www.netflix.com/title/81680567" 
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

 const checkZodiac = () => {
  const date = new Date(biodata.tanggalLahir);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  let zodiac = "";
  let iconUrl = ""; 

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) { 
    zodiac = "Aries"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/2978/2978613.png"; 
  }
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) { 
    zodiac = "Taurus"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/8062/8062756.png"; 
  }
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) { 
    zodiac = "Gemini"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/10350/10350956.png"; 
  }
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) { 
    zodiac = "Cancer"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/8062/8062830.png"; 
  }
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) { 
    zodiac = "Leo"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/8062/8062835.png"; 
  }
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) { 
    zodiac = "Virgo"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/3184/3184944.png"; 
  }
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) { 
    zodiac = "Libra"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/1885/1885332.png"; 
  }
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) { 
    zodiac = "Scorpio"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/8062/8062843.png"; 
  }
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) { 
    zodiac = "Sagittarius"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/3184/3184966.png"; 
  }
  else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) { 
    zodiac = "Capricorn"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/3184/3184956.png"; 
  }
  else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) { 
    zodiac = "Aquarius"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/3184/3184948.png"; 
  }
  else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) { 
    zodiac = "Pisces"; 
    iconUrl = "https://cdn-icons-png.flaticon.com/128/1885/1885417.png"; 
  }

  setModal({ isOpen: true, zodiacName: zodiac, emoji: iconUrl });
};

  const closeModal = () => setModal({ ...modal, isOpen: false });
  const formattedDate = new Date(biodata.tanggalLahir).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="inner-layout">
      
      <nav className="navbar-clean">
        <a href="#home" className="nav-logo">{biodata.nama}</a>
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</a>
          <a href="#movies" className={activeSection === 'movies' ? 'active' : ''}>FILM FAVORIT</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>TENTANG SAYA</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>KONTAK</a>
        </div>
      </nav>

      <section className="hero-clean" id="home">
        <div className="hero-left">
          <h1 className="hero-title">Halo, Saya Fedrian Maulana</h1>
          <p className="hero-subtitle">{biodata.pendidikan} - {biodata.jurusan}</p>
          <p className="hero-desc">
            Selamat datang di halaman profil pribadi saya. Mari berkolaborasi!
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-dark-link">Hubungi Saya</a>
            <a href="#movies" className="btn-outline-link">Lihat Film Favorit</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-box">
            <div className="portrait-placeholder">
              <img src={fotoProfil} alt="Fedrian Maulana" className="hero-portrait-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="movies-clean" id="movies">
        <h2 className="section-title">Film Favorit</h2>
        <div className="movies-grid">
          {favoriteMovies.map((movie) => (
            <a 
              key={movie.id} 
              href={movie.watchUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="movie-card"
            >
              <div className="image-box">
                <img src={movie.poster} alt={movie.title} />
              </div>
              <div className="card-meta">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <h2 className="about-title">Tentang Saya</h2>
        <div className="about-container">
          <div className="biodata-card">
            <h3>Biodata</h3>
            <table className="biodata-table">
              <tbody>
                <tr>
                  <td><strong>Nama</strong></td>
                  <td>: {biodata.nama}</td>
                </tr>
                <tr>
                  <td><strong>NIM</strong></td>
                  <td>: {biodata.nim}</td>
                </tr>
                <tr>
                  <td><strong>Pendidikan</strong></td>
                  <td>: {biodata.pendidikan}</td>
                </tr>
                <tr>
                  <td><strong>Tempat</strong></td>
                  <td>: Bandung</td>
                </tr>
                <tr>
                  <td><strong>Tanggal Lahir</strong></td>
                  <td>: {formattedDate}</td>
                </tr>
                <tr>
                  <td><strong>Jurusan</strong></td>
                  <td>: {biodata.jurusan} (CID)</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>: fedrianmaulana1@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>No Telepon</strong></td>
                  <td>: 088901345700</td>
                </tr>
                <tr>
                  <td><strong>Keahlian</strong></td>
                  <td>: Development Web dan Mobile</td>
                </tr>
              </tbody>
            </table>
            <button className="btn-dark-zodiac" onClick={checkZodiac}>
              Cek Rahasia Zodiak Saya
            </button>
          </div>
        </div>
      </section>

    
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Mari Terhubung</h2>
        <p className="contact-subtitle">Silakan pilih platform di bawah ini untuk menghubungi atau melihat profil saya.</p>
        
        <div className="contact-grid">
          <a href="https://instagram.com/fenrys17" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon"><i className="bi bi-instagram"></i></div>
            <h4>Instagram</h4>
            <p>@fenrys17</p>
          </a>

          <a href="https://wa.me/6288901345700?text=Halo%20Fedrian" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon"><i className="bi bi-whatsapp"></i></div>
            <h4>WhatsApp</h4>
            <p>Kirim Pesan Langsung</p>
          </a>

          <a href="https://tiktok.com/@fenrys17" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon"><i className="bi bi-tiktok"></i></div>
            <h4>TikTok</h4>
            <p>Tonton Konten Kreatif</p>
          </a>

          <a href="https://facebook.com/Fenrys" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon"><i className="bi bi-facebook"></i></div>
            <h4>Facebook</h4>
            <p>Hubungkan Pertemanan</p>
          </a>
        </div>
      </section>

      {modal.isOpen && (
        <div id="noir-overlay" onClick={closeModal}>
          <div id="noir-modal" onClick={(e) => e.stopPropagation()}>   
            <div className="modal-zodiac-icon">
              <img src={modal.emoji} alt={modal.zodiacName} className="flaticon-zodiac-img" />
            </div>
            <h2>ZODIAC FOUND</h2>
            <p>Berdasarkan tanggal lahirku, zodiakku adalah:</p>
            <div className="zodiac-box">{modal.zodiacName}</div>
            <button className="btn-modal-close" onClick={closeModal}>CLOSE</button>
          </div>
        </div>
      )}

          </div>
        );
      }

export default App;