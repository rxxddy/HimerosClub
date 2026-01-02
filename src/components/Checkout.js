import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIntersection } from "react-use"; 
import gsap from "gsap";
import { Title } from "../styles/style";
import { loadStripe } from "@stripe/stripe-js";

// Images
import ticket from "../images/ticket.png";
import logo from "../images/logo.png";
import greek1 from "../images/greek1.png";
import banner from "../images/banner.png";
import bghex from "../images/bghex.png";
import arrow from "../images/arrow.png";
import disco from "../images/disco.png";
import fashion from "../images/fashion.png";

// Styles
import "../styles/styles.css";


// --- OPTIMIZATION 1: STRIPE OUTSIDE COMPONENT ---
const stripePromise = loadStripe("pk_test_51M0hAMK1PrYKJW73EuY6xenNHSTLuRoFN7CTDih18CE5swdGip9mrwXgaMwM7KX9tv0rXz3YX2ItlpI4kggZMsEi00ckAanGkb");


// --- STYLED COMPONENTS ---
const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: #0d0d0d;
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  box-sizing: border-box;
`;

const NavLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  opacity: 0.8;
  transition: 0.3s;
  &:hover { opacity: 1; color: #bf2d06; }
`;

const NavDisabled = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #666;
  cursor: default;
  display: flex;
  align-items: center;
  gap: 5px;
  
  span {
    font-size: 0.6rem;
    background: #333;
    padding: 2px 5px;
    border-radius: 4px;
    color: #bf2d06;
  }
`;

const Logo = styled.img`
  height: 35px;
  object-fit: contain;
`;

const HeroSection = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 7vw, 7rem); 
  font-weight: 900;
  line-height: 0.95;
  margin: 20px 0;
  z-index: 2;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #fff;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 10px;
  opacity: 0.8;
  max-width: 600px;
`;

const HeroBg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 500px;
  opacity: 0.4;
  z-index: 1;
  pointer-events: none;
`;

const BuyButton = styled.button`
  background: #bf2d06;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 30px;
  z-index: 5;
  transition: transform 0.2s;
  &:hover { transform: scale(1.05); }
`;

const CheckoutSection = styled.div`
  padding: 80px 20px;
  display: flex;
  justify-content: center;
`;

const CheckoutCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 60px;
  }
`;

const TicketImage = styled.img`
  width: 100%;
  max-width: 280px;
  transform: rotate(-5deg);
  filter: drop-shadow(0 15px 20px rgba(0,0,0,0.5));
  transition: 0.5s ease;
  &:hover { transform: rotate(0deg) scale(1.05); }
`;

const PassInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PriceTag = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  padding: 5px;
  gap: 5px;
  
  button {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    background: #eee; 
    color: #bf2d06;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    
    &:hover { 
      background: #bf2d06; 
      color: white; 
    }
    
    &:active { transform: scale(0.9); }
  }
  
  input {
    width: 40px;
    text-align: center;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    outline: none;
    background: transparent;
  }
`;

const PayButton = styled.button`
  background: linear-gradient(135deg, #bf2d06 0%, #d9381e 100%);
  color: white;
  border: none;
  padding: 15px 50px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
  box-shadow: 0 10px 20px rgba(191, 45, 6, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(191, 45, 6, 0.5);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: wait;
    transform: scale(1);
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const TimerDigit = styled.div`
    font-family: 'Courier New', monospace;
    font-size: 2rem;
    background: rgba(255,255,255,0.05);
    padding: 5px 10px;
    border-radius: 5px;
`;

// --- MAIN COMPONENT ---

const Checkout = () => {
  
  // Timer
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const nextYear = new Date().getFullYear() + 1;
    const deadline = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const dist = deadline - now;
      if (dist < 0) clearInterval(timer);
      else {
        setTimeLeft({
          days: Math.floor(dist / (1000 * 60 * 60 * 24)),
          hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((dist % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const f = (n) => (n < 10 ? `0${n}` : n);

  // Parallax
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  // Counter
  const [num, setNum] = useState(1);
  const inc = () => setNum(n => (n < 99 ? n + 1 : n));
  const dec = () => setNum(n => (n > 1 ? n - 1 : n));

  // Animations
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, { root: null, rootMargin: "0px", threshold: 0.4 });
  const fadeIn = element => { gsap.to(element, { duration: 1, opacity: 1, y: 0, ease: "power4.out", stagger: 0.3 }); };
  const fadeOut = element => { gsap.to(element, { duration: 1, opacity: 0, y: -40, ease: "power4.out" }); };
  
  useEffect(() => {
    if (intersection && intersection.intersectionRatio < 0.1) fadeOut(".fadeIn");
    else fadeIn(".fadeIn");
  }, [intersection]);

  const sectionRef2 = useRef(null);
  const intersection2 = useIntersection(sectionRef2, { root: null, rootMargin: "0px", threshold: 0.4 });
  const fadeIn2 = element => { gsap.to(element, { duration: 1, opacity: 1, y: 0, ease: "power4.out", stagger: 0.2 }); };
  const fadeOut2 = element => { gsap.to(element, { duration: 1, opacity: 0, y: -40, ease: "power4.out" }); };
  
  useEffect(() => {
    if (intersection2 && intersection2.intersectionRatio < 0.1) fadeOut2(".fadeIn2");
    else fadeIn2(".fadeIn2");
  }, [intersection2]);

  const checkoutRef = useRef(null);
  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- STRIPE LOGIC (COMPONENT PART) ---
  const [isLoading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ 
        price: "price_1MFZJ5K1PrYKJW736SkLpbx4", 
        quantity: num 
      }],
      mode: "subscription",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
      shippingAddressCollection: { allowedCountries: ['IT'] },
    });

    if (error) console.error("Stripe Error:", error);
    setLoading(false);
  };

  return (
    <Wrapper>
      
      {/* 1. NAVBAR */}
      <NavContainer>
        <div style={{ display: 'flex', gap: 20 }}>
            <NavLink to="/">MAIN</NavLink>
            <NavDisabled style={{opacity: 0.5}}>INFO</NavDisabled>
        </div>
        
        <Logo src={logo} alt="Himeros" />

        <div style={{ display: 'flex', gap: 20 }}>
            <NavDisabled>
                ACCOUNT <span>SOON</span>
            </NavDisabled>
        </div>
      </NavContainer>

      {/* 2. HERO */}
      <HeroSection>
        <HeroBg src={bghex} alt="bg" />
        
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HIMEROS <br /> CLUB
        </HeroTitle>

        <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
          Disco Capitolo 1: La villa dello zio Nathaniel
        </HeroSubtitle>

        <BuyButton onClick={scrollToCheckout}>
          Acquista i biglietti 
          <img src={arrow} style={{ width: 15 }} alt="->" />
        </BuyButton>
      </HeroSection>

      {/* 3. BANNER - OPTIMIZATION 2: Removed eager loading */}
      <img src={banner} loading="lazy" width="514" sizes="90vw" alt="true" className="image-135"></img>

      {/* 4. BLOCKS */}
      <section className="section mt">
        <div className="block block2">
            <div className="block31 cardtext" ref={sectionRef}>
                <div className="block323">
                    <img src={disco} loading="lazy" alt="" className="block323-image fadeIn" />
                    <div>
                        <div className="block3231 fadeIn">
                            <h2 className="block3232">Artistic</h2>
                            <div className="block3233">
                                PONTE CHE LEGA LE CREATOR CON I LORO FAN MANTENENDO SERIETÀ E FORNENDO ALLE PARTI UN’ESPERIENZA ESCLUSIVA ED INIMITABILE.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block323">
                    <div>
                        <div className="block3231 fadeIn">
                            <h2 className="block3232">Mission</h2>
                            <div className="block3233">
                                PONTE CHE LEGA LE CREATOR CON I LORO FAN MANTENENDO SERIETÀ E FORNENDO ALLE PARTI UN’ESPERIENZA ESCLUSIVA ED INIMITABILE.
                            </div>
                        </div>
                    </div>
                    <img src={fashion} loading="lazy" alt="" className="block323-image fadeIn" />
                </div>
            </div>
        </div>
      </section>

      {/* 5. PARALLAX */}
      <section className="section mt">
          <div className="block">
              <div className="container container34">
                 
                  <a className="himerosclub1 himerosclub11 ">
                      <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                      <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                  </a>
                  <a className="himerosclub1 himerosclub12 ">
                      <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                      <Title className="display" style={{ x }}>HIMEROS CLUB</Title>
                  </a>
                  <div className="section22 container34">
                      <img src={greek1}  className="himerosclub-middle-img"/>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. TIMER & CHECKOUT */}
      <section className="section" ref={sectionRef2} style={{ paddingBottom: 100 }}>
        <div className="block">
          <div className="block4">
            <div className="container block41" style={{ flexDirection: 'column', alignItems: 'center' }}>
                <div className="section32 block413 fadeIn2" style={{ marginBottom: 20 }}>
                    <h5 style={{textAlign: 'center'}}>il prossimo evento inizierà in:</h5>
                </div>
                
                <div className="fadeIn2" style={{display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center'}}>
                    {["days", "hours", "minutes", "seconds"].map((unit) => (
                        <div key={unit} style={{textAlign: 'center'}}>
                            <TimerDigit>{f(timeLeft[unit])}</TimerDigit>
                            <p className="x-213" style={{ fontSize: 12, marginTop: 5 }}>{unit}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CHECKOUT CARD */}
            <div ref={checkoutRef} style={{ marginTop: 80, display: 'flex', justifyContent: 'center' }}>
                <CheckoutCard
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.8 }}
                >
                    <TicketImage src={ticket} alt="Pass" />
                    
                    <PassInfo>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>PASS</h2>
                        <PriceTag>€{num * 300}</PriceTag>
                        
                        <Counter>
                            <button onClick={dec}>-</button>
                            <input value={num} readOnly />
                            <button onClick={inc}>+</button>
                        </Counter>

                        <PayButton onClick={handleCheckout} disabled={isLoading}>
                           {isLoading ? "Processing..." : "Acquista ora"}
                        </PayButton>
                        
                        <p style={{ fontSize: 12, opacity: 0.5 }}>Secure payment via Stripe</p>
                    </PassInfo>
                </CheckoutCard>
            </div>

          </div>
        </div>
      </section>

    </Wrapper>
  );
};

export default Checkout;