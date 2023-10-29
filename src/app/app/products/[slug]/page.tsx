interface ProductProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }) {
    return {
        title: `Produto ${params.slug}`,
    }
}

export default function Product( {params}: ProductProps ){
    return <h1>Produto: {params.slug}</h1>
}