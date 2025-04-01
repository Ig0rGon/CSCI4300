import Image from 'next/image';
import Card from './Card';
import type { User } from '../page';

interface UserProps {
  user: User;
}

export default function User({ user }: UserProps) {
  return (
    <Card className="mb-4 p-4">
      <div className="flex items-center">
      <Image
        className="rounded-full mr-4"
        src={user.imageUrl}
        alt={`${user.name}'s profile`}
        width={80}
        height={80}
        style={{
          objectFit: 'cover', // Ensures image fills container
        }}
      />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </Card>
  );
}