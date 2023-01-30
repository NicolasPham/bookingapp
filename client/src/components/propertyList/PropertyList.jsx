import React, { useState } from 'react';
import './propertyList.scss';
import { useFetch } from '../../hooks/useFetch';

import { propertyType } from '../../constant/properties';

const PropertyList = () => {
    const { data, loading } = useFetch("/hotels/countByType?types=hotel,aparment")

    const [showError, setShowError] = useState(false);

    const browseType = (type) => {
        setShowError(!showError);
    }

    return (<>
        {
            loading ? "Loading please wait" : <section className='propList'>
          {propertyType.map((item, index) => (
              <article key={index} onClick={() => browseType(data[index].type)}>
                  <img src={item.img} alt="" />
                  <div className="text">
                      <h1>{data.length > 0 ? data[index].type : "Loading"}</h1>
                      <p>{data.length > 0 ? data[index].count : "Loading"} properties</p>
                  </div>
              </article>
          ))}
            </section>
        }
        {showError && <span style={{ color: "red" }}>NOT FUNCTIONING AT THE MOMENT! </span>}
    </>)
}

export default PropertyList