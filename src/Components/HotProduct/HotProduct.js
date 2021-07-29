import React from 'react';

const HotProduct = () => {
    return (
      <div className="text-center">
        <h1 className="text-yellow-700">Hot Product</h1>
        <div class="grid grid-rows-3 sm:grid-flow-col grid-flow-row gap-4 ">
          <div class="row-span-3 sm:border-none border-2 p-3 ml-2 gap-2 ">
            <img
              className="d-block w-100 hover: w-80 h-48 sm:h-96 mb-2 "
              src="https://i.ibb.co/0VtHZR4/ex2.jpg"
              alt="Second slide"
            />
            <p>
              49.5 Tons Hydraulic Crawler Excavator Sy485h for Heavy Duty{" "}
            </p>
            <img
              className="d-block w-100  h-48 sm:h-96 "
              src="https://i.ibb.co/0VtHZR4/ex2.jpg"
              alt="Second slide"
            />
            <p>
              49.5 Tons Hydraulic Crawler Excavator Sy485h for Heavy Duty{" "}
            </p>
          </div>
          <div class="col-span-2 sm:pt-4">
            <img
              className="d-block w-100 h-48 sm:h-96 "
              src="https://i.ibb.co/0VtHZR4/ex2.jpg"
              alt="Second slide"
            />
            <p>
              49.5 Tons Hydraulic Crawler Excavator Sy485h for Heavy Duty{" "}
            </p>
          </div>
          <div class="row-span-2 col-span-2 ...">
            <img
              className="d-block w-100 h-48 sm:h-96 "
              src="https://i.ibb.co/0VtHZR4/ex2.jpg"
              alt="Second slide"
            />
            <p>
              49.5 Tons Hydraulic Crawler Excavator Sy485h for Heavy Duty{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default HotProduct;