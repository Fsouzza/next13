import Link from "next/link";

export default function SigIn(){
    return(
        <div>
            <h1> Login</h1>
            <Link href={"/app"}>Dashboard</Link>
        </div>
    )
}