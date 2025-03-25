import React from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { UserItem } from '../UserItem/UserItem';
import styles from './UserList.module.css';
import { User } from '../../types/types';

interface Props {
  users: [string, User][];
  onUserClick: React.Dispatch<React.SetStateAction<string>>;
}

export const UserList: React.FC<Props> = React.memo(({ users, onUserClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const userElement = target.closest('[data-id]');
    if (userElement) {
      const id = userElement.getAttribute('data-id');
      if (id) {
        onUserClick(id);
      }
    }
  };

  const RenderColumn = ({ index, style }: ListChildComponentProps) => {
    const [key, userData] = users[index];
    return (
      <div style={style}>
        <UserItem userId={key} userData={userData} />
      </div>
    );
  };

  return (
    <div onClick={handleClick} className={styles.list}>
      <List height={500} itemCount={users.length} itemSize={51} width={'100%'}>
        {RenderColumn}
      </List>
    </div>
  );
});
