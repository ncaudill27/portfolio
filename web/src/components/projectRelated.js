import React from "react";
import Link from "./typography/navLink";

const RelatedProjects = ({ list }) => (
  <>
    {list.map(project => (
      <li key={`related_${project._id}`}>
        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
      </li>
    ))}
  </>
);

export default RelatedProjects;
