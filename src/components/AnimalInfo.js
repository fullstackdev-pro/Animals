import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AnimalInfo(props) {
  let data = useSelector((state) => state.data);
  console.log(data);
  const {
    name,
    latin_name,
    animal_type,
    active_time,
    length_min,
    length_max,
    weight_min,
    weight_max,
    lifespan,
    habitat,
    diet,
    geo_range,
    image_link,
    id,
  } = data
  return (
    <section>
      <div className="text-[1.2rem] py-3 pl-4 flex justify-start text-green-400 font-bold bg-black
      lg:text-[1.5rem]">
        <Link to="/" className="cursor-pointer mt-2">Animals /</Link>
        <p className="pl-1 mt-2">{animal_type}</p>
      </div>
      <p className="my-4 text-center text-black font-bold text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem]">
        {name}
      </p>

      <div key={id} className="md:flex md:justify-between lg:px-12">
        <div className="w-full h-full lg:w-[60%] xl:w-[50%]">
          <img src={image_link} alt={name} />
        </div>
        <div>
          <ul className="pl-4 pr-2 py-4 border-8 border-green-300 ">
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Name:</span> {name}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Scientific name:</span>{" "}
              {latin_name}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Type:</span> {animal_type}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Active Time:</span> {active_time}{" "}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Min-length:</span> {length_min}{" "}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Max-length:</span> {length_max}{" "}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Min-weight:</span> {weight_min}{" "}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Min-weight:</span> {weight_max}{" "}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Life Span:</span> {lifespan}{" "}
              years
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Habitat:</span> {habitat}
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Diet:</span> {diet} years
            </li>
            <li className="font-bold text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem]">
              <span className="text-green-500">Geographic Range:</span>{" "}
              {geo_range}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AnimalInfo;
