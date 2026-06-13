import Link from 'next/link'
import {PageProps} from "./[articleId]/page";

export default async function NewsPage({params, searchParams}: PageProps) {

    const { articleId} = await params
    const { lang = 'en' } = await searchParams


}