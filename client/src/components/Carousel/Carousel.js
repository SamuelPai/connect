import React, { useState } from 'react';
import "./Carousel.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [
  {
    src:  '/images/explore.jpg',
    altText: 'Slide 1',
    caption: 'Plan an Event- There is a whole world to explore. Pack your backpack, your best friend and go',
    header: 'Create a Trip with us and ease your journey'
  },
  {
    src: '/images/join.jpg',
    altText: 'Slide 2',
    header: 'Reunite with Loved Ones',
    caption: 'Call your Colleagues, Friends and Family'
  },
  {
    src: '/images/star.jpg',
    altText: 'Slide 3',
    header: 'Plan an activity, Make a Memory',
    caption: 'Plan your Day'
  },
];
const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="image" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
export default Example;