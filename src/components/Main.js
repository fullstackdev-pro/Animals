import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dataClicked } from "../redux/actions";

function Main(props) {
  let allInfo = useSelector((state) => state.allInfo);
  const dispatch = useDispatch();
  return (
    <section className="py-4 bg-green-500 ">
      <div className="text-center text-white font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem]">
        Animals
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 xl:px-16 pt-4">
        {allInfo.length > 0 &&
          allInfo.map(function (data, index) {
            const { name, image_link } = data;

            return (
              <Link to="/animal"
              key={index}
              onClick={() => {
                dispatch(dataClicked(data))
              }}>
                <ul
                  
                  className="mx-4 pt-2 cursor-pointer"
                  onClick={() => {}}
                >
                  <img
                    className="w-full h-[full]"
                    src={image_link}
                    alt={name}
                  ></img>
                  <li className="mt-2 text-[1.2rem] text-white font-bold">
                    {name}
                  </li>
                </ul>
              </Link>
            );
          })}
      </div>
    </section>
  );
}

export default Main;
