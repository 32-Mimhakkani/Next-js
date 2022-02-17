
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

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data =await res.json();
    
    const paths =data.map(post =>{
        return{
            params :{
                postId:`${post.id}`
            }
        }
    })
    

    return {
      paths,
      fallback: false // false or 'blocking'
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