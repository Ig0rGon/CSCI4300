"use client";
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup';

export type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

const USERS_INIT: User[] = [];

export default function Home() {
  const [users, setUsers] = useState<User[]>(USERS_INIT);

  const addUserHandler = (newUser: Omit<User, 'id'>) => {
    setUsers(prevUsers => [
      ...prevUsers,
      { ...newUser, id: prevUsers.length + 1 }
    ]);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <Users users={users} />
      </div>
      <Signup onAddUser={addUserHandler} />
    </div>
  );
}