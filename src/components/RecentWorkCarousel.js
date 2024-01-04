import Carousel from "react-bootstrap/Carousel";

function RecentWorkCarousel() {
  return (
    <>
      <h1 className="text-center pb-3">Some of my latest work...</h1>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="w-100 pb-5"
            src="../../images/screenshot-of-pacific-site.png"
            alt="First slide"
          />
          <div className="pt-3">
            <Carousel.Caption>
              <h3>Website for Pacific Supergym</h3>
              <p className="pb-4">
                I recently designed and built a website for a local 24 hour
                fitness supercentre. Check it out at www.pacificfitness.co.uk
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100 pb-5"
            src="../../images/gigsweep-homepage-screenshot.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              My biggest project to date. GigSweep is a revolutionary concept
              merging multiple aspects of live music booking, searching and
              connections all into one place. Check it out at www.gigsweep.com
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default RecentWorkCarousel;
