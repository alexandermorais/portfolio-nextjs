import React from "react";
import ProjectItem from "./ProjectItem";
import gitHubImage from "./../public/assets/projects/github.png";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                Proyectos
            </p>
            <h2 className="py-4">Proyectos que he desarrollado</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {/*GitHub*/}
                <ProjectItem
                    title="GitHub"
                    technology="Tecnología"
                    backgroundImage={gitHubImage}
                    projectUrl="/"
                />
            </div>
        </div>
    );
};

export default Projects;
