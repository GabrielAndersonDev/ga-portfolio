import Link from "next/link";

export default function ProjectCard({ id, name, url }) {
    return (
        <section id={id} key={id}>
            <h2>{name}</h2>
            <h3>id: {id} project url: {url}</h3>
            <Link href={url}>URL</Link>
        </section>
    )
};