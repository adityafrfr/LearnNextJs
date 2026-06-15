import {Card} from "../../../components/card"
import Link from "next/link"

export default function ArchivedNotifications() {
    return (
        <Card>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                <div>Archieved</div>
                <div><Link href={"/complex-dashboard/"}>Notifications </Link></div>
            </div>
        </Card>
    )
}