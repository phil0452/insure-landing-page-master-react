import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main_styling.css'
import './navigation_styling.css'
import './footer_styling.css'

import logo from './images/logo.svg'
import hamburgerImage from './images/icon-hamburger.svg'
import closeImage from './images/icon-close.svg'
import bgPatternMobile from './images/bg-pattern-mobile-nav.svg'
import introMobile from './images/image-intro-mobile.jpg'
import bgPatternIntroLeftMobile from './images/bg-pattern-intro-left-mobile.svg'
import bgPatternIntroRightMobile from './images/bg-pattern-intro-right-mobile.svg'
import bgPatternIntroLeftDesktop from './images/bg-pattern-intro-left-desktop.svg'
import introDesktop from './images/image-intro-desktop.jpg'
import bgPatternIntroRightDesktop from './images/bg-pattern-intro-right-desktop.svg'
import bgPatternHowWeWorkDesktop from './images/bg-pattern-how-we-work-desktop.svg'
import bgPatternHowWeWorkMobile from './images/bg-pattern-how-we-work-mobile.svg'
import bgPatternFooterMobile from './images/bg-pattern-footer-mobile.svg'
import bgPatternFooterDesktop from './images/bg-pattern-footer-desktop.svg'

import Quality from './components/quality/quality.jsx'
import SocialMediaLinks from './components/socialMedia/socialMedia.jsx'
import FooterLinks from './components/footerLinks/FooterLinks.jsx'
import App from './App.jsx'

const qualityContent = [
  { 
    image: "icon-snappy-process.svg",
    heading: "Snappy Process",
    content: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
  },
  { image: "icon-affordable-prices.svg",
    heading: "Affordable Prices",
    content: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
  },
  { image: "icon-people-first.svg",
    heading: "People First",
    content: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
  }
];

const socialMediaInfo = [
  {
    image: "icon-facebook.svg",
    alt: "facebook",
    id: "facebook-logo"
  },
{
    image: "icon-twitter.svg",
    alt: "twitter",
    id: "twitter-logo"
  },
{
    image: "icon-pinterest.svg",
    alt: "pinterest",
    id: "pinterest-logo"
}
  ,
{
    image: "icon-instagram.svg",
    alt: "instagram",
    id: "instagram-logo"
  }
];

const ourCompanyFooterLinks = [ "How we work", "Why Insure?", "View plans", "Reviews"];
const helpMeFooterLinks = [ "FAQ", "Terms of use", "Privacy policy", "Cookies"];
const contactFooterLinks = ["Sales", "Support", "Live chat"];
const otherFooterLinks = ["Careers", "Press", "Licenses"];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <div className="desktop_nav container">
        <img src={logo} alt="logo" id="header-logo" />
            
        <div className="nav_links">
          <nav className="flex fontweight_700 font_family_karla">
            <a href="#">How we work</a>
            <a href="#">Blog</a>
            <a href="#">Account</a>
          </nav>	
          
          <a href="#" className="button nav_button_colors">View plans</a>
        </div>
        
        <img src={hamburgerImage} alt="hamburger" id="hambuger" />
        <img src={closeImage} alt="close" id="close" />			
      </div>

      <div id="mobile_nav" className="bg_dark_violet container">
        <nav className="fontweight_700 font_family_karla">
          <a href="#" className=" text_very_light_gray">How we work</a>
          <a href="#" className=" text_very_light_gray">Blog</a>
          <a href="#" className=" text_very_light_gray">Account</a>
          <a href="#" id="plans-mobile" className="button purple-background-white-text">View plans</a>			
        </nav>
        
        <img src={bgPatternMobile} alt="mobile-nav" />
      </div>
    </header>	
    
    <img src={introMobile} alt="intro-mobile" id="intro-mobile" />
    
    <section id="mobile-first-section" className="container bg_dark_violet">
      <img src={bgPatternIntroLeftMobile} id="mobile-left-pattern" />
      <h1 className="text_very_light_gray fontweight_400">Humanizing <br />your insurance.</h1>
      
      <p className="hero_content fontweight_400">
        Get your life insurance coverage easier and faster. We blend our expertise 
        and technology to help you find the plan that’s right for you. Ensure you 
        and your loved ones are protected.
      </p>
      
      <a href="#" id="plans" className="button purple-background-white-text fontweight_400">View plans</a>
      <img src={bgPatternIntroRightMobile} id="mobile-right-pattern" />
    </section>
    
    <section id="desktop-first-section" className="bg_dark_violet">		
      {/* use pseudo elements to layer images? */}
      <img src={bgPatternIntroLeftDesktop} id="left-pattern" />
      <div className="desktop_hero container">			
        <div>
          <hr />
          <h1 className="text_very_light_gray fontweight_400">Humanizing <br />your insurance.</h1>
          
          <p className="hero_content fontweight_400">
            Get your life insurance coverage easier and faster. We blend our expertise 
            and technology to help you find the plan that’s right for you. Ensure you 
            and your loved ones are protected.
          </p>
          
          <a href="#" id="plans" className="button purple-background-white-text fontweight_400">View plans</a>
        </div>
        <div>
          <div id="picture">
            <img src={introDesktop} alt="intro-mobile" />
          </div>
        </div>
      </div>	

       {/* use pseudo elements to layer images?  */}
      <img src={bgPatternIntroRightDesktop} id="right-pattern" />
    </section>
    
    <div className="clearfix"></div>

    <section id="qualities">
      <div className="container">	
        <hr />
        <h1 className="heading fontweight_400">We’re different</h1>
        
        <div id="qualities-container">          
          {qualityContent.map((item) => (<Quality qualityContent={item} />))}
        </div>
      </div>
    </section>

    <div id="find-out-container" className="container">	
      <div id="find-out-more" className="bg_dark_violet ">
        <div>
          <h1 className="fontweight_400 text_very_light_gray find_out_heading">Find out more<br/>about how we work</h1>
          
          <a href="#" id="plans" className="button purple-background-white-text" style={{marginBottom: "unset"}}>How we work</a>
        </div>
      
        <img src={bgPatternHowWeWorkDesktop} id="desktop-bg-pattern" />
        <img src={bgPatternHowWeWorkMobile} id="mobile-bg-pattern" />
      </div>
      
      
    </div>

    <footer>
      <div className="container">	
        <img src={bgPatternFooterMobile} id="mobile-footer-bg-pattern" />
        <img src={bgPatternFooterDesktop} id="desktop-footer-bg-pattern" />
        
        <div id="icon-flex-container">
          <img src={logo} alt="logo" id="footer-logo"/>
          
            <div id="social-media-flex">
              {socialMediaInfo.map((item) =>( <SocialMediaLinks socialMediaInfo={item} />))}
            </div>
          
        </div>
        
        <hr className="bg_very_light_gray"/>
        <div id="dl-list-flex">
          
          <ul>
            <li className="text_dark_grayish_violet fontweight_700">Our company</li>
            <FooterLinks footerInfo={ourCompanyFooterLinks} />
          </ul>
        
          <ul>
            <li className="text_dark_grayish_violet fontweight_700">Help me</li>
            <FooterLinks footerInfo={helpMeFooterLinks} />
          </ul>
          
          <ul>
            <li className="text_dark_grayish_violet fontweight_700">Contact</li>
            <FooterLinks footerInfo={contactFooterLinks} />
          </ul>
          
          <ul>
            <li className="text_dark_grayish_violet fontweight_700">Others</li>
            <FooterLinks footerInfo={otherFooterLinks} />
          </ul>
        </div>
      </div>
    </footer>

    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </StrictMode>,
)
