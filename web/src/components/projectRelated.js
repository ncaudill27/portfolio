import React from 'react'
import Link from './typography/navLink'

import Heading from "./typography/headingTertiary";

const RelatedProjects = ({relatedProjects}) => (
  <div>
    <Heading>Related projects</Heading>
    <ul>
      {relatedProjects.map(project => (
        <li key={`related_${project._id}`}>
          <Link to={`/project/${project.slug.current}`}>
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default RelatedProjects