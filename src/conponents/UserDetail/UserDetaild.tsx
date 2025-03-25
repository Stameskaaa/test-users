import React, { useState, useEffect } from 'react';
import { imgSrc, mockUsersObj } from '../../mock/mockData';
import styles from './UserDetail.module.css';
import { User } from '../../types/types';

interface Props {
  selectedUserData: User;
  selectedUserId: string;
  onSave: (userId: string, newUserData: User) => void;
}

export const UserDetail: React.FC<Props> = ({ selectedUserId, onSave }) => {
  const findedUser = mockUsersObj[selectedUserId];
  const [userData, setUserData] = useState({
    name: '',
    jobTitle: '',
    department: '',
    company: '',
  });

  useEffect(() => {
    if (findedUser) {
      setUserData({
        name: findedUser.name || '',
        jobTitle: findedUser.jobTitle || '',
        department: findedUser.department || '',
        company: findedUser.company || '',
      });
    }
  }, [findedUser]);

  if (!selectedUserId || !findedUser) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.user}>
      <input type="text" name="name" value={userData.name} onChange={handleChange} />
      <div className={styles.userInfo}>
        <img className={styles.userPhoto} src={imgSrc} alt="userPhoto" />
        <div className={styles.userDetailList}>
          <div className={styles.userDetailItem}>
            <span className={styles.userDetailLabel}>Должность</span>
            <input
              className={styles.userDetailInput}
              type="text"
              name="jobTitle"
              value={userData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className={styles.userDetailItem}>
            <span className={styles.userDetailLabel}>Отдел</span>
            <input
              className={styles.userDetailInput}
              type="text"
              name="department"
              value={userData.department}
              onChange={handleChange}
            />
          </div>
          <div className={styles.userDetailItem}>
            <span className={styles.userDetailLabel}>Компания</span>
            <input
              className={styles.userDetailInput}
              type="text"
              name="company"
              value={userData.company}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button onClick={() => onSave(selectedUserId, userData)}>Сохранить</button>
    </div>
  );
};
