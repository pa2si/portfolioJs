'use client';

import { useState } from 'react';
import reasonsData from './_components/reasonsData';

const CustomWebBenefits = () => {
  const [visibleReasonsCount, setVisibleReasonsCount] = useState(3);

  const showMoreReasons = () => {
    setVisibleReasonsCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-white text-gray-800 p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Why Choose a Custom-Built Website?
      </h2>
      <div className="space-y-6">
        {reasonsData.slice(0, visibleReasonsCount).map((reason, index) => (
          <div key={index} className="card bordered">
            <div className="card-body">
              <h3 className="card-title">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          {visibleReasonsCount < reasonsData.length && (
            <button onClick={showMoreReasons} className="btn btn-primary mt-4">
              More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomWebBenefits;
