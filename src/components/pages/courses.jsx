import CourseCard from "../components/CourseCard";

const courseData = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and React.",
  },
  {
    title: "Data Science",
    description: "Master Python, statistics, and machine learning.",
  },
  {
    title: "Graphic Design",
    description: "Learn Photoshop, Illustrator, and UI/UX design.",
  },
];

const Courses = () => (
  <section className="p-10">
    <h2 className="text-2xl font-bold mb-6">Our Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courseData.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  </section>
);

export default Courses;
