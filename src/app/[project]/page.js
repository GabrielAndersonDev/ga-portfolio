'use client';

import Link from "next/link";
import projectInfo from "../projectInfo"
import { usePathname } from "next/navigation"
import urlFix from "@/lib/helpers";

export default function Project() {

    const pathname = urlFix(usePathname());

    const project = projectInfo.filter(function(pro){
        return pro.url == pathname;
    });

    return (
        <section id={project[0].id}>
            <h1>{project[0].name} Page</h1>
            <h2>{project[0].id} and {project[0].url}</h2>
            <Link href="/">Back</Link>
        </section>
    );
};