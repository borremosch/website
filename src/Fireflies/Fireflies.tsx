import { Link, Typography } from '@material-ui/core';
import styles from './Fireflies.module.css';
import playStoreBadge from '../Images/play-store-badge.svg';

export function Fireflies() {
  return (
    <div className={styles['container']}>
      <Typography variant="h1" className={styles['heading']}>
        Fireflies
      </Typography>

      <div className={styles['description-container']}>
        <Typography variant="body1" className={styles['description']}>
          Fireflies is a variant of the Japanese game known as Hashiwokakero, or Hashi. In English, the game is commonly
          known as Bridges.
        </Typography>

        <Typography variant="body1" className={styles['description']}>
          Fireflies was explicitly designed to be a relaxing game. We feel that many modern games are too much designed
          to make you addicted. Instead, we hope the puzzles in this game will give you a sense of satisfaction and
          accomplishment rather than an urge to play the next level.
        </Typography>

        <Typography variant="body1" className={styles['description']}>
          Fireflies contains thousands of puzzles of several sizes and levels of difficulty. For each puzzle that you
          complete, you are rewarded a firefly. These fireflies do not serve a specific purpose other than for you to
          look at and enjoy them.
        </Typography>
      </div>

      <Link href="https://play.google.com/store/apps/details?id=com.labs4073.fireflies" target="_blank">
        <img src={playStoreBadge} alt="Get is on Google Play" width="200" className={styles['play-store-badge']} />
      </Link>

      <div className={styles['video-container']}>
        <div className={styles['video-container-inner']}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/pNfAgoahAQc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className={styles['video']}
          ></iframe>
        </div>
      </div>

      <div className={styles['attribution']}>
        <Link href="https://unsplash.com/photos/y1fcIQhSu7Q" target="_blank">
          Photo
        </Link>{' '}
        by{' '}
        <Link href="https://unsplash.com/@evondeveloper" target="_blank">
          Trần Anh Tuấn
        </Link>{' '}
        on{' '}
        <Link href="https://unsplash.com/" target="_blank">
          Unsplash
        </Link>
      </div>
    </div>
  );
}
