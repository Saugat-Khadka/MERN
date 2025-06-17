export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Role: {user.role}</p>
      {user.role === 'admin' && <a href="/admin">Go to Admin Panel</a>}
    </div>
  );
}
