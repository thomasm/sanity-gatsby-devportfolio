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
                  buildHookId: '5e656e233ad1f4a9566e3174',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-devportfolio-studio',
                  apiId: 'd1ea8b92-436c-4ac4-a926-f568b92785d3'
                },
                {
                  buildHookId: '5e656e23e695dad4fda8a7e6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-devportfolio',
                  apiId: '8f7058f3-55a2-417a-a0dd-efd789ae3ddf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasm/sanity-gatsby-devportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-devportfolio.netlify.com',
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
