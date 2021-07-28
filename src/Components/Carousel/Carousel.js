import React from 'react'
import { Carousel } from "react-bootstrap";
export default function Car() {
    return (
      <div className="shadow-xl">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-48 sm:h-96  "
              src="https://i.ibb.co/dPZnZDj/ex1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="">
              {/* <h3 className="text-green-300 ">
                CAT 320D3 GC Hydraulic Excavator
              </h3> */}
              <p className="text-white text-2xl ">
                CAT 320D3 GC Hydraulic Excavator
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-48 sm:h-96 "
              src="https://i.ibb.co/0VtHZR4/ex2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-48 sm:h-96 "
              src="https://i.ibb.co/bKs1qnD/ex3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}
