import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import beauty from "../../assets/banner/beauty.jpg";
import tech from "../../assets/banner/tech.jpg";
import toy from "../../assets/banner/toy.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  const cubeAnimationOptions = {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  };

  return (
    <AutoplaySlider
      animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      animationOptions={cubeAnimationOptions}
    >
      <div data-src={beauty} />
      <div data-src={tech} />
      <div data-src={toy} />
    </AutoplaySlider>
  );
};

export default Banner;
