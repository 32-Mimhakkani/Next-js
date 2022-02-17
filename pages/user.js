

//   export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const posts = await res.json()

import User from "../Componet/User";

   
//     console.log(posts);

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

export async function getStaticProps (){

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props:{
            data
        }
    }

}

const user = ({data}) => {
    console.log(data);
    return (
        <div>
             <h1>ami to user that i haeb want to know </h1>
             {
                 data.map(u=><User key={u.id} u={u}/>)
             }
        </div>
    );
};

//fetch data from json api 



export default user;