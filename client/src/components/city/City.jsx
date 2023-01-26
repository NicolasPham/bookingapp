import { useFetch } from "../../hooks/useFetch.js";
import { properties } from "../../constant/properties.js";


const City = () => {

    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=Toronto,Vancouver,Calgary"
    );


    return (<>
        {loading ? "Loading, please wait" : <div className="flex list">
            {properties.map((item, index) => (
                <article key={index}>
                    <img src={item.img} alt="" />
                    <div className="text">
                        <h1>{item.name}</h1>
                        <h3>{data[index]} properties</h3>
                    </div>
                </article>
            ))}
        </div>}
    </>)
}

export default City
