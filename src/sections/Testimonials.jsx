import { TestimonialItem } from "../components";
import { testimonials } from "../constants";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      {/* Container */}
      <div className="container block lg:flex">
        {/* Heading container */}
        <div className="testimonials_head-res relative   z-2 mr-20 flex-300 ">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Word from our fans</h3>
        </div>
        {/* Testimonials Container */}
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials
              .slice(0, halfLength)
              .map(({ id, name, role, avatarUrl, comment }) => (
                <TestimonialItem
                  key={id}
                  id={id}
                  name={name}
                  role={role}
                  avatarUrl={avatarUrl}
                  comment={comment}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              ))}
          </div>

          <div className="flex-50">
            {testimonials
              .slice(halfLength)
              .map(({ id, name, role, avatarUrl, comment }) => (
                <TestimonialItem
                  key={id}
                  id={id}
                  name={name}
                  role={role}
                  avatarUrl={avatarUrl}
                  comment={comment}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
