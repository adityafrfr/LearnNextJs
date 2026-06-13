interface DashboardProps {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode
}

export default function ComplexDashboardLayout({children, users, revenue, notifications} : DashboardProps)  {
    return (
        <div>
            {/* Row 1: Sits at the very top of the page */}
            <div>{children}</div>

            {/* Row 2: A container that forces everything inside it side-by-side */}
            <div style={{ display: "flex" }}>

                {/* Left Column: Stacks items vertically */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>       {/* On top */}
                    <div>{revenue}</div>     {/* Directly underneath users */}
                </div>

                {/* Right Column: Takes up all remaining width on the right side */}
                <div style={{ display: "flex", flex: 1 }}>
                    {notifications}          {/* Inside the large right box */}
                </div>

            </div>
        </div>
    );
}