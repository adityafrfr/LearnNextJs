import { notFound, redirect} from "next/navigation";

function getRandomint(count: number)    {
    return Math.floor(Math.random() * count)
}

export default async function ProductReview({params} : {params: Promise<{productId: string, reviewId: string}>})    {

    const random = getRandomint(2)
    if (random === 1)   {
        throw new Error("error loading review")
    }
    const { productId, reviewId } = await params
    if (parseInt(reviewId) > 1000) {
        redirect('/')
    }
    return <h1>review {reviewId} for product {productId}</h1>
}