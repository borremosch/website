import styles from './Overview.module.css';
import firefliesFeatureGraphic from '../Images/feature-graphic-fireflies.jpg';
import mathsAppFeatureGraphic from '../Images/feature-graphic-mathsapp.jpg';
import { Link } from 'react-router-dom';

export function Overview() {
  return (
    <div className={styles['overview']}>
      <div className={styles['app']}>
        <Link to="/Fireflies">
          <img src={firefliesFeatureGraphic} alt="Fireflies" />
        </Link>
      </div>
      <div className={styles['app']}>
        <Link to="/MathsApp">
          <img src={mathsAppFeatureGraphic} alt="MathsApp" />
        </Link>
      </div>
    </div>
  );
}
