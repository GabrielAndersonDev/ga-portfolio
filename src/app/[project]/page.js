'use client';

import projectInfo from "../projectInfo"
import { usePathname } from "next/navigation"
import urlFix from "@/utils/helpers";

export default function Project() {

    const pathname = urlFix(usePathname());

    const project = projectInfo.filter(function(pro){
        return pro.url == pathname;
    });

    return (
        <section id={project[0].id}>
            <h1>{project[0].name} Page</h1>
            <h2>{project[0].id} and {project[0].url}</h2>
        </section>
    );
};