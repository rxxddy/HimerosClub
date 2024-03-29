import React from 'react';
import { useState, useRef, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import ticket from '../images/ticket.png';
import logo from '../images/logo.png';
import greek1 from '../images/greek1.png';
import gsap from "gsap";
import banner from "../images/banner.png";
import bghex from "../images/bghex.png";
import arrow from "../images/arrow.png";
import fashion from "../images/fashion.png";
import disco from "../images/disco.png";
import {Link} from "react-router-dom";
import { useScroll, useTransform } from "framer-motion/dist/framer-motion";
import "../styles.css";
import "../../src/components/components/css/styles.css";
import { useIntersection } from 'react-use';
let stripePromise;
import { Title } from "./style";


const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const top = useRef(null);

  const handleTop = () => {
    top.current?.scrollIntoView({behavior: 'smooth'});
  };

  let [num, setNum]= useState(1);
  let incNum = () =>{
    if(num<99)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
//   const coupon = await stripe.coupons.create({percent_off: 20, duration: 'once'});

  const item = {

    price: "price_1MFZJ5K1PrYKJW736SkLpbx4",
    // adjustable_quantity: {enabled: true, minimum: 1, maximum: 99},
    quantity: num,

  };

  const total = num * 300;



  const checkoutOptions = {
    lineItems: [item],
    mode: "subscription",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
    shippingAddressCollection: {
        allowedCountries: ['IT'],
      },
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "December, 31, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  });

  // Animation for fading in
  const fadeIn = element1 => {
    gsap.to(element1, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1
      }
    });
  };
  // Animation for fading out
  const fadeOut = element1 => {
    gsap.to(element1, {
      duration: 1,
      opacity: 0,
      y: -40,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.1
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");


  const sectionRef2 = useRef(null);
  // All the ref to be observed
  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  });

  // Animation for fading in
  const fadeIn2 = element2 => {
    gsap.to(element2, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.6
      }
    });
  };
  // Animation for fading out
  const fadeOut2 = element2 => {
    gsap.to(element2, {
      duration: 1,
      opacity: 0,
      y: -80,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection2 && intersection2.intersectionRatio < 0.1
    ? fadeOut2(".fadeIn2")
    : fadeIn2(".fadeIn2");

  const sectionRef3 = useRef(null);
  // All the ref to be observed
  const intersection3 = useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  });

  // Animation for fading in
  const fadeIn3 = element3 => {
    gsap.to(element3, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1
      }
    });
  };
  // Animation for fading out
  const fadeOut3 = element3 => {
    gsap.to(element3, {
      duration: 1,
      opacity: 0,
      y: -80,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection3 && intersection3.intersectionRatio < 0.3
    ? fadeOut3(".fadeIn3")
    : fadeIn3(".fadeIn3");

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    
      <div className="main-container">



            <section className="section">
                    
                <div className="block mains">
                    <div className="container2 mains center">

                        <div className="section22 navbar vercent">


                                <div className="left1">
                                    <div className="left">
                                        <p className="navlink1 navlink2 ">MAIN</p>
                                    </div>


                                    <div className="left">
                                        <p className="navlink1 ">INFO</p>
                                    </div>
                                </div>
                           
                                <a className="nav_logo    center">
                                    <img src={logo} className="nav_logo-img"/>
                                </a>

                            <div className="right1">
                                <div className="right">
                                    <p className="navlink1 navlink2 "></p>
                                </div>


                                <Link  to="/Account" className="right">
                                    <p className="navlink1 ">Account</p>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="block section23">
                    <div className="container borderio">

                        <div className="section22">
                            <h1 className="naming">HIMEROS <br/> CLUB</h1>
                            <img src={bghex} className="bghex" />
                        </div>
                        <div className=" section22 section23-img1 ">
                 
                            <div className="title22">
                                <p>
                                  DISCO Capitolo 1: <span className="title23">La villa dello zio Nathaniel</span>
                                </p>
                            </div>
                            <button className="buyticket1  bgbutton buttonwidth" onClick={handleClick}>
                              
                                <p className="buyticket2 buybuttontop2">Acquista i biglietti </p>
                                <img src={arrow} className="buybuttontop"/>
                            </button>
                    
                        </div>
                        
                    </div>
                </div>
            </section>


            <img src={banner} loading="eager" width="514" sizes="90vw" alt="true" className="image-135"></img>

            
            <section className="section mt">
                <div className="block block2">
                    <div className="block31 cardtext" ref={sectionRef}>
                        <div className="block323">
                            <img src={disco} loading="lazy" alt="" className="block323-image fadeIn" />
                            <div>
                                <div className="block3231 fadeIn">
                                    <h2 className="block3232">Artistic</h2>
                                    <div className="block3233">P O N T E C H E L E G A
                                        L E C R E A T O R C O N I L O R O FA N
                                        M A N T E N E N D O SE R IE T à E F O R N E N D O a l L E PA R T I
                                        U N ’ E SP E R IE N Z A E SC L U SIV A
                                        E D IN IM IT A B IL E .
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block323">
                            <div>
                                <div className="block3231 fadeIn">
                                    <h2 className="block3232">Mission</h2>
                                    <div className="block3233">P O N T E C H E L E G A
                                        L E C R E A T O R C O N I L O R O FA N
                                        M A N T E N E N D O SE R IE T à E F O R N E N D O a l L E PA R T I
                                        U N ’ E SP E R IE N Z A E SC L U SIV A
                                        E D IN IM IT A B IL E .
                                    </div>
                                </div>
                            </div>
                            <img src={fashion} loading="lazy" alt="" className="block323-image fadeIn" />
                        </div>
                    </div>

                </div>
            </section>

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

            <section className="section" ref={sectionRef2}>
                <div className="block">
                    <div className="block4">
                        <div className="container block41">
                        
                            <div className="section22 block412 fadeIn2">
                                <h5>il prossimo evento inizierà in:</h5>
                                
                                
                            </div>
                            <div className="section22 block413 fadeIn2">
                                <a className="x-141 x-142" style={{fontFamily:"fantasy"}}>
                                    <h5 id="day">{days < 10 ? "0" + days : days}</h5>
                                    <p className="x-213">days</p>
                                </a>
                            </div>
                            <div className="section22 block413 fadeIn2">
                                <a className="x-141" style={{fontFamily:"fantasy"}}>
                                    <h5 id="hour">{hours < 10 ? "0" + hours : hours}</h5>
                                    <p className="x-213">hours</p>
                                </a>
                            </div>
                            <div className="section22 block413 fadeIn2">
                                <a className="x-141" style={{fontFamily:"fantasy"}}>
                                    <h5 id="minute">{minutes < 10 ? "0" + minutes : minutes}</h5>
                                    <p className="x-213">minutes</p>
                                </a>
                            </div>
                            <div className="section22 block413 fadeIn2">
                                <a className="x-141" style={{fontFamily:"fantasy"}}>
                                    <h5 id="second">{seconds < 10 ? "0" + seconds : seconds}</h5>
                                    <p className="x-213">seconds</p>
                                </a>
                            </div>
                        </div>

                        
                        <div className="container block42">

                        <div className="block323">
                            <div>
                                <div className="block3231 fadeIn2">
                                    <h2 className="block3232">perché abbiamo bisogno di un pass?</h2>
                                    <div className="block3233">P O N T E C H E L E G A
L E C R E A T O R C O N I L O R O FA N
M A N T E N E N D O SE R IE T à E F O R N E N D O a l L E PA R T I
U N ’ E SP E R IE N Z A E SC L U SIV A
E D IN IM IT A B IL E .</div>
                                    </div>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref} className="checkout mt">
                <div ref={sectionRef3} className="centerPass">   
                    <div className="checkoutLeft">
                        <img src={ticket} className="ticket fadeIn3"/>
                    </div>
                    <div className="checkoutRight">
                        <div className="style1">
                        <h1 className="tickets fadeIn3">PASS</h1>
                        <h1 className="checkout-price fadeIn3" style={{justifyContent: "center", display: "flex"}}>€{total}/year</h1>
                        <div className="quantity-input">

                            <button className="quantity-input__modifier quantity-input__modifier--left fadeIn3" onClick={decNum}>—</button>

                            <input type="text" className="quantity-input__screen fadeIn3" style={{ color: "wheat"}} value={num} onChange={handleChange}/>
                            
                            <button className="quantity-input__modifier quantity-input__modifier--right fadeIn3" onClick={incNum}>＋</button>

                        </div>
                        <button
                            className="checkout-button fadeIn3"
                            onClick={redirectToCheckout}
                            disabled={isLoading}
                            style={{justifyContent: "center"}}
                        >
                            <div className="text-block fadeIn3">
                            <div className="text">{isLoading ? "Carico..." : "paga"}</div>
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


  );
};

export default Checkout;