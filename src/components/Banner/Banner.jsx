import "./BannerModule.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from "../../assets/Headder.jpg";

function Banner() {
  return (
    <section className="banner " id="home">
      <Container >
        <Row className="align-items-center bg">
          {/* Image First on Mobile, Last on Laptop */}
          <Col
            xs={12}
            md={{ span: 6, order: 1 }}
            xl={{ span: 7, order: 2 }}
            className="d-flex justify-content-center "
          >
            <div className="bg">
              <Image
                src={HeaderImage}
                alt="Header img"
                className="img-fluid rounded-circle img"
                />
                </div>
          </Col>

          {/* Text First on Laptop, Last on Mobile */}
          <Col
            xs={12}
            md={{ span: 6, order: 2 }}
            xl={{ span: 5, order: 1 }}
            className="text-md-start text-center "
          >
            <div className="tagline-wrapper ">
              <span className=" tagline">Welcome to my Portfolio</span>
            </div>
            <h1>
              {`Hi, I am `}
              <br />
              {"Sam Sundar "}
            </h1>

            <h2 className="wrap">I'm a Web Developer</h2>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              aliquid nulla ipsa consequatur? Id in ipsum quasi! Tempore, error
              minus? Aut magnam harum reiciendis cumque maxime fugit possimus
              cum blanditiis.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={() => console.log("clicked")}
            >
              Resume
              <ArrowRightCircle size={20} className="ms-1" />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
