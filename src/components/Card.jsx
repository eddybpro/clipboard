import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt={props.title} className="CardImg" />
      <h2 className="CardTitle">{props.title}</h2>
      <p className="CardDesc">{props.desc}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Card;
