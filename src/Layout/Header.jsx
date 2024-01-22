import logo from "../images/react.png";
const MainHeader = () => {
  return (
    <div className="pt-2 pl-2 py-1" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4 text-white-50">React Course - TaskOpedia</span>
    </div>
  );
};
const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};
const SubHeader = () => {
  return (
    <p style={subHeaderStyle} className="text-center">
      This will be an exciting course.
    </p>
  );
};
const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};
export default Header;
