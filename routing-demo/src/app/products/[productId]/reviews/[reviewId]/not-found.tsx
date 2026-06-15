"use client"
import { usePathname } from "next/navigation";

export default function NotFound()  {

    const pathname = usePathname()
    const productId = pathname.split("/")[2]
    const reviewID = pathname.split("/")[4]

    return(
        <div>
            <h1>review {reviewID} not found for product {productId}</h1>
            <h2>could not find the requested resource</h2>
        </div>
    )
}