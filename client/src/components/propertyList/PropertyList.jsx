import React from 'react';
import './propertyList.scss';

import { propertyType } from '../../constant/properties';

const PropertyList = () => {
  return (
      <section className='propList'>
          {propertyType.map((item, index) => (
              <article key={index}>
                  <img src={item.img} alt="" />
                  <div className="text">
                      <h1>{item.name}</h1>
                      <p>{item.number} properties</p>
                  </div>
              </article>
          ))}
    </section>
  )
}

export default PropertyList