import { useRouter } from "next/router";

const documents = () => {
    const router =useRouter();
    const {params}=router.query
    console.log(params);
    return (
        <div>
            <h1>catch all routes in our page that i have to wans ss </h1>
        </div>
    );
};

export default documents;