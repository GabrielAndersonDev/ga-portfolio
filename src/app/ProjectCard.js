import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ id, name, url }) {

    return (
        <section 
            id={id} 
            key={id} 
            className="project-card w-500 h-400 group"
        >
            <Image
                src="/sample-image.png"
                width={400}
                height={300}
                alt="Pic of kitten (replace)"
            />
            <div className={"full-display collapse group-hover:visible"}>
                <h2>{name}</h2>
                <h3>id: {id} project url: {url}</h3>
                <Link href={url}>URL</Link>
            </div>
            
        </section>
    )
};