
import User from "../Components/data/User";

export default function user() {
  return (
    <div>
      <h1>user</h1>
      {loading && <p>Loading...</p>}
      {!loading &&
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
    </div>
  );
}
