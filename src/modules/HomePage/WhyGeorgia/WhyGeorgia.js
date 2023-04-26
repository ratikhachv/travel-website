import React, { useState } from 'react';
import './WhyGeorgia.css'
export default function WhyGeorgia() {
  const SliderWithCaptions = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slides = [
      { imageUrl: 'https://travelshelper.com/wp-content/uploads/2021/09/Georgia-travel-guide-Travel-S-helper.jpg', caption: 'Slide 1' },
      { imageUrl: 'https://www.thoughtco.com/thmb/3eZM7zyK8lRpRE6huWVVDpZf5ng=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-945768824-5c1146e446e0fb0001533b0a.jpg', caption: 'Slide 2' },
      { imageUrl: 'https://www.georgianholidays.com/storage/tKSxFFrAvPzxoRAyq6CM8az01xax4AMxDogDUsXY.jpg', caption: 'Slide 3' },
    ];

    const nextSlide = () => {
      setCurrentSlideIndex(
        currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1
      );
    };

    const previousSlide = () => {
      setCurrentSlideIndex(
        currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1
      );
    };

    return (
      <div className="slider">
        <img
          src={slides[currentSlideIndex].imageUrl}
          alt={slides[currentSlideIndex].caption}
        />
        <div className="caption">{slides[currentSlideIndex].caption}</div>
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  };

  return <SliderWithCaptions />;
}