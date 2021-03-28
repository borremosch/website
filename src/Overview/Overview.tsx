import styles from "./Overview.module.css";
import firefliesFeatureGraphic from "../Images/feature-graphic-fireflies.jpg";
import mathsAppFeatureGraphic from "../Images/feature-graphic-mathsapp.jpg";

export function Overview() {
  return (
    <div className={styles["overview"]}>
      <div className={styles["app"]}>
        <img src={firefliesFeatureGraphic} alt="Fireflies" />
      </div>
      <div className={styles["app"]}>
        <img src={mathsAppFeatureGraphic} alt="MathsApp" />
      </div>
    </div>
  );
}
