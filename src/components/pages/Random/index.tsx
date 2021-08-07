import { useEffect, useState } from "react";
import postReducer from "../Favourites/redux/reducer";

import "./style.css";

export default function Random() {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);

  const onClickSkip = () => {
    const res = skip === 0 ? 1 : 0;
    setSkip(res);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setPosts(data.meals));
  }, [skip]);
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.idMeal} className="container">
          <div className="container__content">
            <div className="placeholder">
              <span className="placeholder__text">PLACEHOLDER</span>
            </div>
            <div className="content">
              <h2 className="content__head">{post.strMeal}</h2>
              <p className="content__text">{post.strInstructions}</p>
            </div>
          </div>
          <div className="btns">
            <div className="btn">
              <span
                className="skip"
                onClick={() => {
                  onClickSkip();
                }}
              >
                Skip
              </span>
            </div>
            <div className="btn">
              <span className="like" onClick={() => {}}>
                Like
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
