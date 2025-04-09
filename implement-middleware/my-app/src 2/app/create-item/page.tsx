'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';

export default function ItemAddForm() {
  const [formData, setFormData] = useState({
    owner: 0,
    title: '',
    description: '',
    url: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'owner' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormData({ owner: 0, title: '', description: '', url: '' });
      router.push('/show-items');
    } catch (error) {
      console.error('Error in CreateItem!', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
         <h2 className="text-lg font-semibold mt-2">Create a new Item</h2>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="owner"
            type="number"
            value={formData.owner}
            onChange={handleChange}
            placeholder="Owner ID"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            name="url"
            type="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mt-4"
            >
              Add Item
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
