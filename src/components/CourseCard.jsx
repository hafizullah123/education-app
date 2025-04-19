const CourseCard = ({ title, description }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default CourseCard;
