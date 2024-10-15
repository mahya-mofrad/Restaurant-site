import SectionTitle from "../Section title/SectionTitle";
import Box from "./Box";

export default function WhyUsSection() {
  return (
    <section className="container">
      <SectionTitle title="Why Us" subTitle="Why Choose Our Restaurant" />
      <div className={` row `}>
        <Box
          className={`col-lg-3 col-md-6 mt-4 mt-lg-0 col-12`}
          number="01"
          title="lorem ipsum"
          text="Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
        />
        <Box
          className={`col-lg-3 col-md-6 col-12 mt-4 mt-lg-0`}
          number="02"
          title="lorem ipsum"
          text="Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
        />
        <Box
          className={`col-lg-3 col-md-6 col-12 mt-4 mt-lg-0`}
          number="03"
          title="lorem ipsum"
          text="Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
        />
        <Box
          className={`col-lg-3 col-md-6 col-12 mt-4 mt-lg-0`}
          number="04"
          title="lorem ipsum"
          text="Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
        />
      </div>
    </section>
  );
}
