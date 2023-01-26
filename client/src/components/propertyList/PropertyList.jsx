import React from 'react';
import './propertyList.scss';
import { useFetch } from '../../hooks/useFetch';

import { propertyType } from '../../constant/properties';

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType?types=hotel,aparment")
    return (<>
        {
            loading ? "Loading please wait" : <section className='propList'>
          {propertyType.map((item, index) => (
              <article key={index}>
                  <img src={item.img} alt="" />
                  <div className="text">
                      <h1>{data.length > 0 ? data[index].type : "Loading"}</h1>
                      <p>{data.length > 0 ? data[index].count : "Loading"} properties</p>
                  </div>
              </article>
          ))}
            </section>
        }
    </>)
}

export default PropertyList