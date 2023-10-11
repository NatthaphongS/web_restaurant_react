import { useState } from "react";
import "./HeroSliderShow.css";
import { useEffect } from "react";

const image = ["/pic1.png", "/pic2.png", "/pic3.png"];
const delay = 2500;

export default function HeroSlideShow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  let style1;
  let style2;
  let style3;

  if (index == 0) {
    style1 = "imgslide center";
    style2 = "imgslide right1";
    style3 = "imgslide right2";
  } else if (index == 1) {
    style1 = "imgslide left";
    style2 = "imgslide center";
    style3 = "imgslide right1";
  } else if (index == 2) {
    style1 = "imgslide left";
    style2 = "imgslide left";
    style3 = "imgslide center";
  }

  return (
    <div className="bg-primary h-[600px] max-w-[900px] mx-auto">
      <div className="slideshow">
        <div className="slideshowSlider">
          <div className={style1}>
            <img src="/pic1.png" />
          </div>
          <div className={style2}>
            <img src="/pic2.png" />
          </div>
          <div className={style3}>
            <img src="/pic3.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
