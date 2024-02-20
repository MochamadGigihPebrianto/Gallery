import "./styles.css";
import datas from "./data";
import { useState } from "react";
const Gallery = () => {
  const [image, setImage] = useState(0);
  function handleImage(getDataId) {
    setImage(getDataId);
  }
  return (
    <>
      <div className="gallery">
        <div className="main-image">
          {datas.map(
            (data, index) =>
              data.id === image && <img src={data.img} alt="" key={index} />
          )}
        </div>
        <div className="option">
          {datas.map((data, index) => (
            <div className="option-image" key={index}>
              <img
                src={data.img}
                alt=""
                onClick={() => handleImage(data.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
