import User from './User';
import type { User as UserType } from '../page';

interface UsersProps {
  users: UserType[];
}

const Users = ({ users }: UsersProps) => {
  return (
    <div className="w-full max-w-2xl">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;