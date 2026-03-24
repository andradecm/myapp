import { useParams } from "react-router";

export default function Repository() {
    const { username , project } = useParams()

    return (
        <section className="p-6">
            <h1 className="text-2xl font-bold mb-2">Repositório:</h1>
            <p><b>Usuário:</b> {username}</p>
            <p><b>Projeto recebido da URL:</b> {project}</p>
        </section>
    )
}