import { useState } from 'react'
import { httpGetPixels } from '../utils/request';
import PhotoCard from './PhotoCard';

function SearchBar() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function onFormSubmit(e) {
        e.preventDefault()
        setIsLoading(true);
        const form     = new FormData(e.target);
        const query    = form.get('photoName');
        const response = await httpGetPixels(query);

        if(response?.photos) {
            setData([...response.photos]);
            setError("");
            setIsLoading(false);
        }else {
            setError('Something went wrong. please try again');
            setIsLoading(false);
        }
    }

    return(
        <div className="search-bar">
            <form onSubmit = {onFormSubmit} >
                <input type="text" name="photoName" placeholder="Search for Photos"/>
            </form>
            { isLoading ? <p>Loading Data</p> 
            : error     ? <p>{error}</p> 
            :  <div className="photo-card-list">
                   {data?.map((img, index) => (<PhotoCard key={index.toString()} img={img.src.medium} photographer={img.photographer} />))}
                </div>  }
        </div>

    )
}

export default SearchBar