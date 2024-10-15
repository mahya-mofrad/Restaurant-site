import styled from "./sectiontitle.module.css";

export default function SectionTitle(props) {
  return (
    <div>
      <div className={`${styled.sectionTitle}`}>
        <h2> {props.title} </h2>
        <p>{props.subTitle}</p>
      </div>
    </div>
  );
}
