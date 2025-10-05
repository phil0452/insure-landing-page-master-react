//import './card_styling.css'
//Quality component for the insure-landing-page
function FooterLinks(props) {
  return (
    <>          
      {props.footerInfo.map((row) => (
        <li><a className="text_dark_violet fontweight_700" href="#">{row}</a></li>
      ))} 
    </>
  );
}

export default FooterLinks;