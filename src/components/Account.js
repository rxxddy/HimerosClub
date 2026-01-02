import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/logo.png';

// Мы используем инлайн-стили для карточки, чтобы не создавать новые CSS файлы,
// но сохраняем глобальные классы (navbar, main-container) для совместимости.

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Здесь была бы логика выхода из Firebase/Auth
    console.log("Logging out...");
    navigate("/"); // Перенаправляем на главную
  };

  return (
    <div className="main-container">
      
      {/* --- HEADER (такой же как везде) --- */}
      <section className="section">
        <div className="block mains">
          <div className="container2 mains center">
            <div className="section22 navbar vercent">
              
              <div className="left1">
                <Link to="/" className="left">
                  <p className="navlink1 navlink2">MAIN</p>
                </Link>
                <div className="left">
                  <p className="navlink1">INFO</p>
                </div>
              </div>

              <Link to="/" className="nav_logo center">
                <img src={logo} className="nav_logo-img" alt="Logo" />
              </Link>

              <div className="right1">
                <div className="right">
                   {/* Пустой блок для баланса */}
                </div>
                <div className="right">
                  {/* Подчеркиваем, что мы на странице аккаунта */}
                  <p className="navlink1" style={{ borderBottom: "1px solid #fff" }}>Account</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- PROFILE CARD AREA --- */}
      <div style={styles.pageContainer}>
        <div style={styles.card}>
          <h1 style={styles.title}>MY PROFILE</h1>
          
          <div style={styles.infoGroup}>
            <div style={styles.avatarPlaceholder}>U</div>
            <div style={styles.details}>
              <h2 style={styles.userName}>Univermondo User</h2>
              <p style={styles.userStatus}>Status: <span style={{color: '#4caf50'}}>Active Member</span></p>
            </div>
          </div>

          <div style={styles.divider}></div>

          <div style={styles.menu}>
            <div style={styles.menuItem}>My Tickets</div>
            <div style={styles.menuItem}>Subscription Settings</div>
            <div style={styles.menuItem}>Payment Methods</div>
          </div>

          <button 
            onClick={handleLogout} 
            style={styles.logoutButton}
            onMouseOver={(e) => {
                e.currentTarget.style.background = "#bf2d06";
                e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#bf2d06";
            }}
          >
            LOG OUT
          </button>
        </div>
      </div>

    </div>
  );
};

// --- Styles for Glassmorphism Card ---
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh', 
    paddingTop: '20px'
  },
  card: {
    // Эффект стекла
    background: "rgba(20, 20, 20, 0.75)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "24px",
    padding: "40px",
    width: "90%",
    maxWidth: "400px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
  },
  title: {
    color: 'white',
    fontSize: '1.8rem',
    marginBottom: '30px',
    fontFamily: 'fantasy', 
    letterSpacing: '2px',
    marginTop: 0
  },
  infoGroup: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '25px',
    justifyContent: 'flex-start'
  },
  avatarPlaceholder: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #bf2d06 0%, #d9381e 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginRight: '20px',
    boxShadow: "0 4px 12px rgba(191, 45, 6, 0.3)"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  userName: {
    color: 'white',
    fontSize: '1.2rem',
    margin: "0 0 5px 0",
    fontWeight: "500"
  },
  userStatus: {
    color: '#aaa',
    fontSize: '0.9rem',
    margin: 0
  },
  divider: {
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    margin: '10px 0 25px 0'
  },
  menu: {
    width: '100%',
    marginBottom: '35px'
  },
  menuItem: {
    color: '#e0e0e0',
    padding: '12px 10px',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
    transition: 'all 0.2s',
    textAlign: 'left',
    fontSize: '1rem'
  },
  logoutButton: {
    background: 'transparent',
    border: '1px solid #bf2d06',
    color: '#bf2d06',
    padding: '12px 40px',
    borderRadius: '50px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
    fontSize: '0.9rem'
  }
};

export default Account;
