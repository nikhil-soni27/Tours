import React from 'react';
import Tour from './Tour';
const Tours = ({ tourist, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tourist.map((tour) => {
          return <Tour key={tour.id} {...tour} remove={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
