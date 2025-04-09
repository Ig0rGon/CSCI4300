'use client';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Card from '../../../components/Card';


export default function UpdateItem() {
    const [item, setItem] = useState ({
      owner: 0,
      title: '',
      description: '',
      url: '',
    });

    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/items/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const itemData = data.item; 
        setItem({
            owner: itemData.owner || 0,
            title: itemData.title || '',
            description: itemData.description || '',
            url: itemData.url || '',
          });
        } catch (error) {
          console.error('Error from UpdateItemInfo:', error);
        }
    };

    if (id) {
      fetchItem();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Create a new object from the existing item (prev) with the update to the field 
    // that changed.  If the owner field changed, convert the string input to a number.
    setItem(prev => ({
      ...prev,
      [name]: name === 'owner' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch(`/api/items/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        router.push(`/show-item/${id}`);
      } catch (error) {
        console.log('Error in UpdateItemInfo!', error);
      }
    };

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <h2 className="text-lg font-semibold mt-2">Edit Item</h2>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4  p-4 rounded">
         <input
        name="owner"
        type="number"
        value={item.owner}
        onChange={handleChange}
        placeholder="Owner ID"
        required
        className="w-full p-2 border rounded"
         />
         <input
        name="title"
        type="text"
        value={item.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="w-full p-2 border rounded"
        />
        <textarea
        name="description"
        value={item.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="w-full p-2 border rounded"
        />
       <input
        name="url"
        type="url"
        value={item.url}
        onChange={handleChange}
        placeholder="Image URL"
        required
        className="w-full p-2 border rounded"
       />
        <button
        type="submit"
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
       > Update Item
       </button>
    </form>
    </Card>
    </div>
  );
}