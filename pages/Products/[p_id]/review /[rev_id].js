import { useRouter } from "next/router";

const Dynamic_nested_routing = () => {
    const router = useRouter();

    const {rev_id}=router.query
    return (
        <div>
            <h1>The product id is and the review id is {rev_id}</h1>
        </div>
    );
}

export default Dynamic_nested_routing;