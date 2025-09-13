import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
      setLoading(false);
    }
    fetchUser();
  }, []);
}
