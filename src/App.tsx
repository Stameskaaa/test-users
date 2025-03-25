import './App.css';
import { UserDetail } from './conponents/UserDetail/UserDetaild';
import { UserList } from './conponents/UserList/UserList';
import { mockUsersObj } from './mock/mockData';
import { useState, useMemo } from 'react';

function App() {
  const [users, setUsers] = useState(mockUsersObj);
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleSaveUserData = (
    userId: string,
    newUserData: { name: string; jobTitle: string; department: string; company: string },
  ) => {
    setUsers((prevUsers) => ({
      ...prevUsers,
      [userId]: { ...prevUsers[userId], ...newUserData },
    }));
  };

  const usersArray = useMemo(() => Object.entries(users), [users]);

  return (
    <div className="container">
      <UserList onUserClick={setSelectedUser} users={usersArray} />
      {selectedUser && users[selectedUser] && (
        <UserDetail
          selectedUserData={users[selectedUser]}
          selectedUserId={selectedUser}
          onSave={handleSaveUserData}
        />
      )}
    </div>
  );
}

export default App;
