import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context';
import Post from '../Components/Post';
import '../Styles/PostsStyle.css';
import { data } from '../data';
const Posts = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        if (user) {
            for (let u of data) {
                if (u.email === user.email) setUserId(u.userId);
            }
        }
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPosts(res.data);
        });
    }, [setUserId, user]);
    return (
        <section className='posts'>
            {posts.map((post, index) => {
                if (post.userId === userId)
                    return (
                        <Post
                            className='post'
                            key={index}
                            title={post.title}
                            body={post.body}
                        />
                    );
                return null;
            })}
        </section>
    );
};
export default Posts;
