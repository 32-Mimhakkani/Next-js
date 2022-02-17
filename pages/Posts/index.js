import Link from "next/link";

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await res.json();

    return {
        props:{
            posts:data
        }
    }
}


const Post = ({posts}) => {
  
    return (
        <div>
               <h1>Posts is here  </h1>

            {
                posts.map(post =>
                    <div key={post.id}>
                    
                           <h5>{post.title}</h5>
                        
                          <p>{post.body}</p>
                        <Link href={`/Posts/${post.id}`} passHref> 
                        <button>Single Details{post.id}</button> 
                        </Link>
                        
                    
                   </div>
                    
                    )
            }
         
        </div>
    );
};

export default Post;