import Link from "next/link";
import { useRouter } from "next/router";


const details = () => {
       const router = useRouter();
       const detailsid =router.query.p_id
   details

    return (
        <h2>
            dynamic routing the number is : {detailsid}

            
        </h2>
    );
}

export default details;