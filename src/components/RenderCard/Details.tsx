import React from "react";
import { DataType } from "./typeDataCard";
import { StyledCardRender } from "./RenderCard.styled";
import { IoBookOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface DetailsType {
  data: DataType;
  setVisibleDetails: (id: string) => void;
}

export const defaultImg =
  "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png";

export default function Details({ data, setVisibleDetails }: DetailsType) {
  const obJectIncluded = (id_: string) => {
    return false;
    // return favoriteList.some(({ id }) => id === id_)
  };

  const handleAddFavorite = (id_: string) => {
    // const [data] = catalogList.filter(({ id }) => id === id_);
    // dispatch(createFavorite(data));
  };

  const handleDeleteFavorite = (id: string) => {
    // dispatch(deleteFavorit(id))
  };

  const isOnline = () => {
    return Math.random() < 0.5;
  };

  return (
    <StyledCardRender>
      <div className="container-avatar">
        <img
          className="avatar"
          src={data.avatar_url ? data.avatar_url : defaultImg}
          alt={`Teacher ${data.name}`}
        />
        <span className={`status ${isOnline() ? "online" : ""}`}></span>
      </div>
      <div className="container-content">
        <div className="list-info">
          <p>Languages</p>
          <ul>
            <li>
              <IoBookOutline
                size={16}
                color="rgb(0, 0, 0)"
                className="icon-book"
              />
              <p>Lessons online</p>
            </li>
            <span></span>
            <li>
              <p>Lessons done: {data.lessons_done}</p>
            </li>
            <span></span>
            <li>
              <FaStar
                size={16}
                color="rgb(255, 197, 49)"
                className="icon-star"
              />
              <p>Rating: {data.rating}</p>
            </li>
            <span></span>
            <li>
              Price / 1 hour:<span>&nbsp;{data.price_per_hour}$</span>
            </li>
          </ul>
          {!obJectIncluded(data.id) ? (
                <button
                  className="favorite-button"
                  onClick={() => {
                    handleAddFavorite(data.id);
                  }}
                  type="button"
                >
                  <FaRegHeart size={26} color="rgb(18, 20, 23)" />
                </button>
              ) : (
                <button
                  className="favorite-button"
                  onClick={() => {
                    handleDeleteFavorite(data.id);
                  }}
                  type="button"
                >
                  <FaHeart size={26} color="rgb(244, 197, 80)" />
                </button>
              )}
        </div>
        <ul className="description-list">
          <li>
            <h3>
              {data.name}&nbsp;{data.surname}
            </h3>
          </li>
          <li>
            <p>
              Speaks:&nbsp;
              {data.languages.map((data, index) => (
                <span key={data.slice(0, 3)} className="underline">
                  {index > 0 && ", "}
                  {data}
                </span>
              ))}
            </p>
          </li>
          <li>
            <p>
              Lesson Info: <span>{data.lesson_info}</span>
            </p>
          </li>
          <li>
            <p>
              Conditions:{" "}
              {data.conditions.map((data) => (
                <span key={data.slice(0, 3)}>&nbsp;{data}</span>
              ))}
            </p>
          </li>
          <li>
            <button
              type="button"
              className="underline"
              onClick={() => setVisibleDetails("")}
            >
              Remove details
            </button>
          </li>
          <li className="expirience">
            <p>{data.experience}</p>
          </li>
        </ul>
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
        <ul className="list-level">
          {data.levels.map((data) => (
            <li key={data.slice(0, 3)}>
              <p>{data}</p>
            </li>
          ))}
        </ul>
        <button>Book trial lesson</button>
      </div>
    </StyledCardRender>
  );
}
