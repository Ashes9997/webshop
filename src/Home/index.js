import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  Spinner,
  ButtonGroup,
} from "reactstrap";
import { SliderItems, NewArrivalData, BestSellingData } from "../Data";
import { addToCart } from "../slice/cart";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [SelectedTab, setSelectedTab] = useState(1);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === SliderItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? SliderItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

    }, 1500)

  }, [])


// Function to render items on webpage according to the selected tab of new arrival and best selling 
  const renderItems = (data) => {
    return data.map((item, index) => (
      <Col key={`${index}`} xs={12} sm={4}>
        {/* code for card to show products */}
        <Card>
          <img alt="Sample" src={item.images[0]} />
          <CardBody>
            <CardTitle tag="h5"> {item.name} </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {item.price}
            </CardSubtitle>
            <CardText>
              {item.Description}
            </CardText>
            <Button onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>
          </CardBody>
        </Card>
      </Col>
    ));

  }

  return (
    <Container>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={SliderItems}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {SliderItems.map((item) => {
          return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption
                captionText={item.caption}
                captionHeader={item.caption}
              />
            </CarouselItem>
          );
        })}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      {/* Radio Button for two tabs */}
      <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setSelectedTab(1)}
          active={SelectedTab === 1}
        >
          NewArrival
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setSelectedTab(2)}
          active={SelectedTab === 2}
        >
          Best Selling
        </Button>
      </ButtonGroup>
      {Loading ? <Spinner>Loading....</Spinner> : (
        <Row>
         {SelectedTab === 1
          ? renderItems(NewArrivalData) 
          : renderItems.BestSellingData
          }
       </Row>
      )} 
     
    </Container>
  );
}
