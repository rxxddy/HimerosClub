import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

// Components
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Account from "./components/Account";

// Global Styles
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      {/* Routing Configuration */}
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </Router>

      {/* Global Cookie Consent Banner */}
      <CookieConsent
        disableStyles={true} // Отключаем дефолтные стили библиотеки, чтобы наши работали корректно
        buttonText="ACCEPT"
        expires={150}
        containerClasses="cookie-container" // Используем классы или инлайн-стили ниже
        style={cookieStyles.container}
        buttonStyle={cookieStyles.button}
        contentStyle={cookieStyles.content}
      >
        <div style={cookieStyles.textHeader}>We value your privacy</div>
        <div style={cookieStyles.textBody}>
          By visiting this site you agree to our terms, privacy policy, 
          confirm that you are 18+ years old and accept the use of cookies.
        </div>
      </CookieConsent>
    </div>
  );
}

// --- Modern Dark/Glass Design ---
const cookieStyles = {
  container: {
    // Позиционирование: парит внизу по центру
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)", // Центрирование
    width: "90%",
    maxWidth: "500px", // Не слишком широкий на десктопе
    
    // Визуал: темное стекло
    background: "rgba(20, 20, 20, 0.85)", 
    backdropFilter: "blur(12px)", // Эффект размытия фона
    WebkitBackdropFilter: "blur(12px)", // Для Safari
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.08)", // Тонкая обводка
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)", // Мягкая тень
    
    // Внутренние отступы
    padding: "20px",
    display: "flex",
    flexDirection: "column", // Вертикальное выравнивание контента
    alignItems: "center",
    zIndex: "9999",
    justifyContent: "center",
    gap: "15px"
  },
  
  content: {
    margin: "0",
    padding: "0",
    flex: "none",
    textAlign: "center",
    color: "#e0e0e0", // Светло-серый текст (лучше чем чисто белый)
  },

  button: {
    background: "linear-gradient(135deg, #bf2d06 0%, #d9381e 100%)", // Градиент для кнопки
    color: "#fff",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    padding: "10px 30px",
    borderRadius: "50px", // Круглая кнопка
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(191, 45, 6, 0.3)", // Свечение кнопки
    margin: "0", // Убираем лишние отступы
    transition: "transform 0.2s ease",
  },

  // Дополнительные стили для текста внутри
  textHeader: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "5px",
  },
  textBody: {
    fontSize: "13px",
    lineHeight: "1.5",
    opacity: "0.8",
  },
};