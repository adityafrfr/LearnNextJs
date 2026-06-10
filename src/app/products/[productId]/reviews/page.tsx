export default async function DummyReviews({ params } : {params: Promise<{productid : string}>})  {
    const { productid } = await params
    return(
        <>
            <h1>Reviews</h1>
            <p>first review for id {productid}</p>
            <p>second review for id  {productid}</p>
            <p>third review for id {productid}</p>
            <p>fourth review for id  {productid}</p>
        </>
    )
}