import { FaLaptopCode } from "react-icons/fa";
import styles from "./SavedSearch.module.scss";

function SavedSearch() {
  return (
    <div style={{ width: "70%", background: "#f7f8fa" }}>
      <div className={`${styles.grid}`}>
        <span>Course</span>
        <span>University</span>
        <span>Country</span>
        <span>View</span>
      </div>
      <ul>
        {["1", "2", "3", "4", "5", "6", "7"].map((item) => (
          <li className={`${styles.grid1}`}>
            <span>
              <FaLaptopCode className={`${styles.savedSearchIcon}`} />{" "}
              <p>Bachelor Of Science In Computer Science</p>
            </span>
            <span>York University</span>
            <span>Canada</span>
            <div className={`${styles.button}`}>
              <button>View More</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedSearch;
