import { FunctionExampleItemComponent } from './FunctionExampleItem';
import { FunctionExample } from './functions';
import styles from './Manual.module.css';

export function FunctionExampleComponent({ description, items }: FunctionExample) {
  return (
    <div className={styles['example']}>
      <div className={styles['description']}>{description}</div>
      <div className={styles['screen']}>
        {items.map((item, i) => (
          <FunctionExampleItemComponent key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
