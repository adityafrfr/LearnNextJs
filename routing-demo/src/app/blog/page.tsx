import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
}

export default async function Blog() {
    await new Promise((resolve) => setTimeout(resolve, 2000)) // helps to test the loading screen we made in loading.tsx
    return (
        <h1>My blog</h1>
    )
}