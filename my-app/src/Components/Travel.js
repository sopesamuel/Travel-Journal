import locationImg from "/Users/mac/Documents/Travel Journal/my-app/src/Images/Fill 219.png"

export default function Travel(props){
    return(
        <div className="travel-ctn">
            <img src={props.list.imageUrl}></img>
          <span className="travel-itm"> <img src={locationImg} className="locationImg"></img><>{props.list.location}</>
<h2>{props.list.title}</h2>
<span>{props.list.startDate} - {props.list.endDate}</span>
</span>   </div>
    )
}