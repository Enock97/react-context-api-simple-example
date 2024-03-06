import { createContext, useState } from 'react'
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'

const APP_NAME = 'Next-gen Social Media'

const MyContext = createContext()

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])

    return (
      <>
        <MyContext.Provider value = { {posts: posts, setPosts: setPosts, appName: APP_NAME}}>
          <Header />
          <CreatePost/>
          <Posts/>
        </MyContext.Provider>
      </>
    );
}

export { App, MyContext }
