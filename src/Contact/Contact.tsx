import { Link, Paper, Typography } from '@material-ui/core';
import styles from '../App.module.css';

export function Contact() {
  return (
    <Paper className={styles['page']}>
      <div className={styles['page-content']}>
        <Typography variant="h1">Contact</Typography>

        <Typography variant="body1">
          Should you have any suggestions, feedback or other comments, please do not hesitate to contact us by sending
          an e-mail to <Link href="mailto:contact@4073labs.com">contact@4073labs.com</Link>.
        </Typography>
      </div>
    </Paper>
  );
}
