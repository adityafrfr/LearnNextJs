import {Metadata} from "next";

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
                <header
                    style={{
                        backgroundColor: "Lightblue",
                        padding: "1rem"
                    }}
                >
                    <h1>Routing Demo</h1>
                </header>
                {children}
                <footer
                    style={{
                        backgroundColor: "ghostwhite",
                        padding: "1rem"
                    }}
                >
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
