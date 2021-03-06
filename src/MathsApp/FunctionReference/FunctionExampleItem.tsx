import { FunctionExampleItem } from './functions';
import styles from '../MathsApp.module.css';

export function FunctionExampleItemComponent({ type, contents }: FunctionExampleItem) {
  return <span className={styles[type]}>{contents}</span>;
}
