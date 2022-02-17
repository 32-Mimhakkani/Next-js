
export async function getStaticProps(context){
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data =await res.json();

    return{
        props:{
            posts:data
        }
    }
}

export async function getStaticPaths({posts}) {

    console.log(posts);

    return {
      paths: [
        {
             params: {postId:'1'}
        }
      ],
      fallback: true // false or 'blocking'
    };
  }

const postId = ({posts}) => {
    return (
      <>
        <h2>{posts.id} {posts.title}</h2>
        <p>{posts.body}</p>
      </>
    );
}

export default postId;