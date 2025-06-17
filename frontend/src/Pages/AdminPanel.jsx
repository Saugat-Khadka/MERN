import { useEffect, useState } from 'react';
import API from '../api';

export default function AdminPanel() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    API.get('/user/admin')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('Access Denied'));
  }, []);

  return <h2>{message}</h2>;
}
