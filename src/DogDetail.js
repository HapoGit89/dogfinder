import "./DogDetail.css"

function DogDetail({ data }) {
    return (
        <div className="DogDetail">

            
                <p><b>Name:</b> {data.name}</p>
                <p><b>Age:</b>  {data.age}</p>
                <p><b>Facts:</b>  
                    <ul>{data.facts.map(el=>(<li>{el}</li>))}</ul>
                </p>
             
            
        </div>


    )
}

export default DogDetail