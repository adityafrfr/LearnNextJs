"use client"

import {useState} from "react"
import {Card} from "../components/card"

interface DashboardProps {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    logIn: React.ReactNode
}

export default function ComplexDashboardLayout({children, users, revenue, notifications, logIn}: DashboardProps) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <div>{children}</div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: "flex", flex: 1}}>
                    {isLoggedIn ? notifications : (
                        <div>
                            {logIn}
                            <Card>
                                <button style={{border: "1px solid black"}} onClick={() => setIsLoggedIn(true)}>Log In</button>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
