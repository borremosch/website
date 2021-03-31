import { Paper, Typography } from '@material-ui/core';
import { FunctionCategoryComponent } from './FunctionCategory';
import { FUNCTION_CATEGORIES } from './functions';
import styles from './Manual.module.css';

export function FunctionReference() {
  return (
    <Paper className={styles['manual']}>
      <Typography variant="h1">Function reference</Typography>

      {FUNCTION_CATEGORIES.map((category) => (
        <FunctionCategoryComponent {...category} />
      ))}
    </Paper>
  );
}
