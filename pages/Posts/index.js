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
                        <Link href={`/Posts/${post.id}`} passHref> 
                           <h5>{post.title}</h5>
                         </Link>
                        <p>{post.body}</p>
                        
                    
                   </div>
                    
                    )
            }
         
        </div>
    );
};

export default Post;