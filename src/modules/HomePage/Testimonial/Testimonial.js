import TestimonialCard from "../Testimonial/components/TestimonialCard";
import TestimonialTemplate from "./TestimonialTemplate";
export default function Testimonial() {
  return (
    <>
      <TestimonialTemplate
        review1={<TestimonialCard />}
        review2={<TestimonialCard />}
        review3={<TestimonialCard />}
        review4={<TestimonialCard />}
        review5={<TestimonialCard />}
        review6={<TestimonialCard />}
      />
    </>
  );
}
