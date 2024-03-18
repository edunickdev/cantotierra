/* eslint-disable react/prop-types */
const Section = ({childrens, heightvh = "80vh",  name}) => {
  return (
    <div
      aria-label={name}
      className="relative flex flex-wrap md:grid md:grid-cols-12"
      style={{ height: heightvh }}
    >
      {childrens}
    </div>
  );
};
export default Section;
