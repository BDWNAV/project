import { useState, useRef, useEffect } from "react";

export default function Templates() {
  const [imageIndex, setImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  const imageCollection = [
    "https://images.unsplash.com/photo-1714041691623-35d1b8c5e28b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1714139009590-e397d21023d8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1714224806668-9d8dc105f71e?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, 2500);
  }, [imageIndex]);

  function nextImage() {
    setImageIndex((index) => {
      if (index === imageCollection.length - 1) return 0;
      return index + 1;
    });
  }

  function prevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageCollection.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="template-div">
      <div className="template-animation" style={{ "--order": 1 }}>
        <h1 className="template-heading">Templates for you.</h1>
      </div>
      <div
        className="image-slider-div"
        style={{
          width: "80%",
          height: "80%",
          display: "flex",
          borderRadius: "15px",
          position: "relative",
        }}
      >
        {/** Next button for image slider */}
        <div onClick={prevImage} className="slider-buttons previous-button">
          <svg
            id="prev-arrow"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="prev-first-arrow"
              d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/** Actual image slider */}
        <div
          className="template-animation"
          style={{ display: "flex", "--order": 2 }}
        >
          {imageCollection.map((url) => {
            return (
              <img
                key={url}
                src={url}
                className="slider-img"
                style={{ translate: `${-100 * imageIndex}%` }}
              ></img>
            );
          })}
        </div>

        {/** The dot animation on the image slider */}
        <div
          className="slider-dot-div template-animation"
          style={{ "--order": 3 }}
        >
          {imageCollection.map((_, index) => {
            const opacityCreator = {
              backgroundColor:
                index === imageIndex
                  ? "var(--text-color)"
                  : "var(--disabled-color)",
            };

            return (
              <span
                onClick={() => setImageIndex(index)}
                key={index}
                className="slider-dots"
                style={opacityCreator}
              ></span>
            );
          })}
        </div>

        {/** Next button for image slider */}
        <div onClick={nextImage} className="slider-buttons next-button">
          <svg
            id="next-arrow"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="next-first-arrow"
              d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19"
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
