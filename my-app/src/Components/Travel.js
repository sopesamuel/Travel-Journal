import locationImg from "/Users/mac/Documents/Travel Journal/my-app/src/Images/Fill 219.png"

export default function Travel(props){
    return(
        <div className="travel-ctn">
            <img src={props.list.imageUrl} className="first-img"></img>
          <span className="travel-itm"> <div className="top-ctn"><img src={locationImg} className="locationImg"></img> <h3>{props.list.location}</h3>
          <a href={props.list.googleMapsUrl}> View on Google Maps</a></div>
<h2>{props.list.title}</h2>
<h3>{props.list.startDate} - {props.list.endDate}</h3>
<p>{props.list.description}</p>
</span>   </div>
    )
}