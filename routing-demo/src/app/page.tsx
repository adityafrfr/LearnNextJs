import Link from "next/link";

export default function Home()  {
    return (
        <>
            <h1>Hi welcome home</h1>
            <Link href="/blog">Blog</Link><br />
            <Link href="/products">Products</Link><br />
            <Link href="/articles/breaking-news-123?lang=en">Read in english</Link><br />
            <Link href="/articles/breaking-news-123?lang=fr">Read in french</Link><br />
        </>
    )
}