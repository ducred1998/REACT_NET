const Student = (props) => {
  return (
    <div className="col-sm-12 md-6 lg-4 p-1">
      <div className="row border">
        <div className="col-2">
          <img src={props.headshot} className="w-100 py-2" alt="#"></img>
        </div>
        <div className="col-8 my-2">
          {props.name} <br />
          Programing Experience {props.experience} years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
};
export default Student;
