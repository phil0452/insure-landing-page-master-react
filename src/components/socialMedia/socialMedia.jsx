//import './card_styling.css'
//Quality component for the insure-landing-page
function SocialMedia(props) {
    const image = "http://localhost:5173/src/components/socialMedia/" + props.socialMediaInfo.image;
    
  return (
    <> 
        <a href="#"><img src={image} alt={props.socialMediaInfo.alt} id={props.socialMediaInfo.id} /></a>
    </>
  );
}

export default SocialMedia;