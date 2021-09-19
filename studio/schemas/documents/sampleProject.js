import React from "react";
import { MdAspectRatio, MdReorder } from "react-icons/md";

export default {
  name: "sampleProject",
  title: "Sample project",
  type: "document",
  icon: MdAspectRatio,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "links",
      title: "Active Links",
      type: "array",
      of: [{ type: "link" }]
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "simplePortableText"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure"
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      icon: MdReorder,
      of: [{ type: "reference", to: { type: "technology" } }]
    },
    {
      name: "body",
      title: "Body",
      type: "projectPortableText"
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "sampleProject" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
      media: "mainImage",
      tech0: "tech0.logo",
      tech1: "tech1.logo",
      tech2: "tech2.logo",
      tech3: "tech3.logo"
    },
    prepare({ title = "No title", media, tech0, tech1, tech2, tech3, tech4, tech5 }) {
      const stackIcons = [tech0, tech1, tech2, tech3, tech4, tech5].filter(Boolean);
      return {
        title,
        media,
        stack: (
          <div style={{ display: "flex" }}>
            {stackIcons.map(icon => (
              <div styles={{ height: 30, width: 30 }}>{icon}</div>
            ))}
          </div>
        )
      };
    }
  }
};
