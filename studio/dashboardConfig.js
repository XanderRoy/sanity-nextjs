export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5daacd5a9033c45cf99bcb63',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-n2q8hhhd',
                  apiId: '12c16527-fb6d-4c4d-aa0d-e785fb4ecf7f'
                },
                {
                  buildHookId: '5daacd5a389e5c93a5aa3a2b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-bxpwji1e',
                  apiId: 'efc83d1f-4e5b-4ea5-b213-9eb9fc9bd73f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/XanderRoy/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-bxpwji1e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
