import {Card} from "../../components/card";
import Link from "next/link"

export default function Notifications() {
    return (
        <Card>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                <div>Notifications</div>
                <div><Link href={"/complex-dashboard/archived"}>Archived </Link></div>
            </div>
            {/*<Link href={"/complex-dashboard/archived"}>Archived </Link>*/}
        </Card>
    )
}