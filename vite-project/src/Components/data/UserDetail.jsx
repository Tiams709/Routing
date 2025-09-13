import { useParams } from "react-router-dom"
import User from "./User"

export default function UserDetail() {
    const {userId} = useParams()
    
    const user = User.find(user => user.Id ===
        parseInt(userId)
    )
  return (
      <div>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <h2>{user.name}</h2>
    </div>
  )
}
