import type { Metadata } from 'next';
import { Counter} from "./counter";

export const metadata = {
    title: `Counter`
}

export default function CounterPage() {
    return <Counter />
}