interface ProductProps {
    params: {
        slug: string
    }
}

export default function Product( {params}: ProductProps ){
    return <h1>Produto: {params.slug}</h1>
}