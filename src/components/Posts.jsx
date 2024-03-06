import { createContext } from "react"
import { MyContext } from "../App"

export default function Posts() {

    const context = createContext(MyContext)

    return (
        <>
            {context.posts.map(post => {
                return (
                    <div className="card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </>
    )
}
