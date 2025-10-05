import './quality.css'
//Quality component for the insure-landing-page
function Quality(props) {
    const image = "http://localhost:5173/src/components/quality/" + props.qualityContent.image;
  return (
    <>
      <div className="quality">
        <img src={image} className="mobile-left-pattern" />
        
        <h3 className="fontweight_400">{props.qualityContent.heading}</h3>
        <p className="other_content">{props.qualityContent.content}</p>
    </div>
    </>
  );
}

export default Quality;