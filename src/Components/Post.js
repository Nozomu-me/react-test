import '../Styles/PostsStyle.css';
const Post = ({ className, title, body }) => {
    return (
        <div className={className}>
            <div className='title'>{title}</div>
            <div className='body'>{body}</div>
        </div>
    );
};

export default Post;
