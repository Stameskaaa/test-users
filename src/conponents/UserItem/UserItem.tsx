import { imgSrc } from '../../mock/mockData';
import { User } from '../../types/types';
import styles from './UserItem.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  userData: User;
  userId: string;
}

export const UserItem: React.FC<Props> = ({ userData, userId, ...buttonProps }) => {
  return (
    <button data-id={userId} className={styles.user} {...buttonProps}>
      <img src={imgSrc} alt="userPhoto" /> <span>{userData.name}</span>
    </button>
  );
};
