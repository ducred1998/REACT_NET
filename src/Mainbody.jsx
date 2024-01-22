import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

const MainBody = () => {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOpedia!
        <br />
        Total Lecture - {lectureCount}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div className="container row">Students Enrolled</div>
      <Student
        experience={1}
        name="Lê Hoàng Anh Tuấn"
        headshot="https://api.lorem.space/image/face?w=150&h=153">
        <StudentReview />
      </Student>
      <Student
        experience={3}
        name="Nguyễn Sĩ An"
        headshot="https://api.lorem.space/image/face?w=150&h=150">
        <StudentReview />
      </Student>
      <Student
        experience={2}
        name="Nguyễn Văn Đức"
        headshot="https://api.lorem.space/image/face?w=150&h=151">
        <StudentReview />
      </Student>
    </div>
  );
};
export default MainBody;
