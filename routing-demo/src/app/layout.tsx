import {Metadata} from "next";
import './globals.css'
import {ErrorWrapper} from "./error-wrapper";

export const metadata: Metadata = {
    title: {
        default: "NextJs Learn",
        template: "%s | NextJs",                //absolute too
    },
    description: "Next.js routing demo",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header className="header">
                    <h1>Routing Demo</h1>
                </header>
                <ErrorWrapper>{children}</ErrorWrapper>
                <footer className="footer">
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
