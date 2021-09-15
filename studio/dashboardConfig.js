export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
      }
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "6140f252d1c7d226f2596781",
                  title: "Sanity Studio",
                  name: "portfolio-studio-55hogv1o",
                  apiId: "12388633-c41d-46d4-8801-15d04ea52dd8"
                },
                {
                  buildHookId: "6140f252161ce025d01f8648",
                  title: "Portfolio Website",
                  name: "portfolio-web-tanwzd5j",
                  apiId: "9c7d7507-f93a-4243-9345-a75d7517bd6c"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/ncaudill27/portfolio",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://portfolio-web-tanwzd5j.netlify.app",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" }
    }
  ]
};
