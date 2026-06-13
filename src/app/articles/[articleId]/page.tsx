"use client"

import Link from 'next/link'
import { use } from 'react'
export interface PageProps {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: string }>;
}

export default function NewsArticle({params, searchParams}: PageProps) {

    const { articleId} = use(params)
    const { lang = 'en' } = use(searchParams)

    return (
        <div>
            <h1>News article id: {articleId}</h1>
            <p>Reading in language: {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    );
}