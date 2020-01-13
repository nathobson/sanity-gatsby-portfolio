export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1c51fd67c5d530aef152c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cn1pk2ow',
                  apiId: 'f62ae28a-1d9c-4013-aca1-7017927b8016'
                },
                {
                  buildHookId: '5e1c51fdf7e591c2daacf23d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h93w3ao3',
                  apiId: 'b79232c1-0412-4149-99dc-9ee00fae9818'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h93w3ao3.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
