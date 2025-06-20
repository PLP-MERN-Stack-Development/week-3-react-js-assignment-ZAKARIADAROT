import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';

export default function APIPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-2xl mb-4">API Posts</h1>
      <Input
        placeholder="Search posts..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="mb-4"
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <Card key={item.id}>
            <h2 className="font-bold mb-2">{item.title}</h2>
            <p>{item.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
