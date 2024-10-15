import SectionTitle from "../Section title/SectionTitle";
import styles from "./Gallery.module.css";
import gallery1 from "../../assets/img/gallery/gallery1.jpg";
import gallery2 from "../../assets/img/gallery/gallery2.jpg";
import gallery3 from "../../assets/img/gallery/gallery3.jpg";
import gallery4 from "../../assets/img/gallery/gallery4.jpg";
import gallery5 from "../../assets/img/gallery/gallery5.jpg";
import gallery6 from "../../assets/img/gallery/gallery6.jpg";
import gallery7 from "../../assets/img/gallery/gallery7.jpg";
import gallery8 from "../../assets/img/gallery/gallery8.jpg";

export default function Gallery() {
  const galleryItems = [
    { id: 1, imgSrc: gallery1 },
    { id: 2, imgSrc: gallery2 },
    { id: 3, imgSrc: gallery3 },
    { id: 4, imgSrc: gallery4 },
    { id: 5, imgSrc: gallery5 },
    { id: 6, imgSrc: gallery6 },
    { id: 7, imgSrc: gallery7 },
    { id: 8, imgSrc: gallery8 },
  ];

  return (
    <>
      <div className="container">
        {" "}
        <SectionTitle
          title="gallery "
          subTitle="Some photos from Our Restaurant

"
        />
      </div>
      <div className={`${styles.gallery}`}>
        <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row g-0">
            {galleryItems.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4">
                <div className={`${styles.galleryItem}`}>
                  <a href={item.imgSrc} target="_blank">
                    <img
                      src={item.imgSrc}
                      alt="gallery-image"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
