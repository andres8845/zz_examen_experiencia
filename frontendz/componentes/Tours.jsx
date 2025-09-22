import React,{useState} from "react";

export function Tours(){
    const [limit,setLimit] = useState(10);
    const [offset,setOffset] = useState(0);
    const [tours,setTours] = useState([]);

    const listaTours = fetch(`http://localhost:3001/tours/${limit}/${offset}`);

    return(
        <div>
            <form>
                <label> Limit : </label>
                <input value={limit} onChange={(e) => setLimit(e.target.value)}/>

                <label>Offset : </label>
                <input value={offset} onChange={(e) => setOffset(e.target.value)}/>

            </form>        

            <div>
                {listaTours}
            </div>
        </div>
    );
}

export default Tours;