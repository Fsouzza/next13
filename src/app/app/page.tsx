import Link from "next/link";
import { Suspense } from "react";
import Repos from "../components/repo";

export default function Dashboard() {
	return (
		<div>
			<h1> Dashboard</h1>
			<Link href={"/"}>Voltar a Home</Link>
			<Suspense fallback={<p>Carregando repositorios...</p>}>
				<Repos />
			</Suspense>
		</div>
	)
}