import { Link, Paper, Typography } from '@material-ui/core';
import styles from '../App.module.css';

export function PrivacyStatement() {
  return (
    <div className={styles['page-container']}>
      <Paper className={styles['page']}>
        <div className={styles['page-content']}>
          <Typography variant="h1">Privacy Statement</Typography>

          <Typography variant="h2">MathsApp</Typography>

          <Typography variant="body1">
            MathsApp does not collect any personal data, or any data at all for that matter.
          </Typography>

          <Typography variant="h2">Fireflies</Typography>

          <Typography variant="body1">
            Fireflies uses Unity Ads and Unity Analytics. You can view details in{' '}
            <Link href="https://unity3d.com/legal/privacy-policy" target="_blank">
              Unity's privacy policy
            </Link>
            .
          </Typography>

          <Typography variant="h2">The 4073Labs website</Typography>

          <Typography variant="body1">
            The 4073Labs website does not collect any personal data, and does not use any cookies.
          </Typography>

          <Typography variant="h2">Contact form messages and e-mail</Typography>

          <Typography variant="body1">
            Questions and other comments sent to us by e-mail are saved for future reference, but only for the purpose
            of improving future correspondence.
          </Typography>

          <Typography variant="h1">Questions</Typography>

          <Typography variant="body1">
            Should you have any questions regarding this privacy statement, or any other inquiries, please do not
            hesitate to <Link href="/Contact">contact us</Link>.
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
