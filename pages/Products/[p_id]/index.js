
import { useRouter } from "next/router";


const Details = () => {
       const router = useRouter();
       const detailsid =router.query.p_id


    return (
        <h2>
            dynamic routing the number is : {detailsid}

            
        </h2>
    );
}

export default Details;