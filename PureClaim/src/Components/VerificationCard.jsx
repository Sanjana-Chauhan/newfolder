import { Link } from "react-router-dom";
import styles from "./VerificationCard.module.css";
function VerificationCard({ val }) {
  return (
    <Link to={val.path} className={styles.Card}>
      <div >
        <img src={val.img} className={styles.CardImg}></img>
      </div>
      
        <span className={styles.cardContent}>{val.text}</span>
      
    </Link>
  );
}
export default VerificationCard;