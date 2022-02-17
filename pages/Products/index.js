// import React from 'react';
import Link from "next/link";
const index = ({p_id=50}) => {
    return (
        <h1>
            Wellcome to our products

            <Link href="/Products/1">
                <a>Product 1</a>
            </Link>

            <Link href="/Products/2">
                <a>Product 2</a>
            </Link>
            <Link href="/Products/3">
                <a>Product 3</a>
            </Link>
            <Link href={`/Products/${p_id}`}>
                <a>Product 1</a>
            </Link>

        </h1>
    );
};

export default index;