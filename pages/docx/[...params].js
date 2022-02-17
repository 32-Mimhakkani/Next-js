import { useRouter } from "next/router";

const Documents = () => {

    const router = useRouter();
    const {params}=router.query
    
    return (
        <div>
            <h1>catch all routes in our page that i have to wans ss </h1>
        </div>
    );
};

export default Documents;