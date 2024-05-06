import React from "react";
import { DataType } from "./typeDataCard";
import { FaStar } from "react-icons/fa6";


interface DetailsType {
  data: DataType;
  setVisibleDetails: (value: boolean) => void;
}

export const defaultImg =
  "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png";

export default function Details({ data, setVisibleDetails }: DetailsType) {

  return (
    <>
          <li>
            <button
              type="button"
              className="underline"
              onClick={() => setVisibleDetails(false)}
            >
              Remove details
            </button>
          </li>
          <li className="expirience">
            <p>{data.experience}</p>
          </li>
        <ul className="reviews">
          {data.reviews.map((data) => (
            <li key={data.reviewer_name}>
              <div>
                <img src={defaultImg} alt={`Reviewer ${data.reviewer_name}`} />
                <div>
                  <h4>{data.reviewer_name}</h4>
                  <p>
                    <FaStar
                      size={16}
                      color="rgb(255, 197, 49)"
                      className="icon-star"
                    />
                    <span>{data.reviewer_rating}</span>
                  </p>
                </div>
              </div>
              <p>{data.comment}</p>
            </li>
          ))}
        </ul>
    </>
  );
}
