import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  base: '/docs/',
  site: 'https://darealsenor.github.io',
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'Senor Scripts',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Senor Scripts',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Scripts',
          items: [
            { label: 'Home', slug: '' },
            {
              label: 'Senor Airdrops',
              items: [
                { label: 'Overview', slug: 'scripts/airdrops' },
                { label: 'Installation', slug: 'scripts/airdrops/installation' },
                { label: 'Configuration', slug: 'scripts/airdrops/configuration' },
                {
                  label: 'API Reference',
                  items: [
                    { label: 'Client Exports', slug: 'scripts/airdrops/api/client-exports' },
                    { label: 'Server Exports', slug: 'scripts/airdrops/api/server-exports' },
                    { label: 'Client Events', slug: 'scripts/airdrops/api/client-events' },
                    { label: 'Server Events', slug: 'scripts/airdrops/api/server-events' },
                  ],
                },
              ],
            },
            {
              label: 'Senor Squads',
              items: [
                { label: 'Overview', slug: 'scripts/squads' },
                { label: 'Installation', slug: 'scripts/squads/installation' },
                { label: 'Configuration', slug: 'scripts/squads/configuration' },
                {
                  label: 'API Reference',
                  items: [
                    { label: 'Client Exports', slug: 'scripts/squads/api/client-exports' },
                    { label: 'Server Exports', slug: 'scripts/squads/api/server-exports' },
                    { label: 'Client Events', slug: 'scripts/squads/api/client-events' },
                    { label: 'Server Events', slug: 'scripts/squads/api/server-events' },
                  ],
                },
              ],
            },
            {
              label: 'Senor Chat',
              items: [
                { label: 'Overview', slug: 'scripts/chat' },
                { label: 'Installation', slug: 'scripts/senor-chat/installation' },
                { label: 'Configuration', slug: 'scripts/senor-chat/configuration' },
                {
                  label: 'API Reference',
                  items: [
                    { label: 'Client Exports', slug: 'scripts/senor-chat/api/client-exports' },
                    { label: 'Server Exports', slug: 'scripts/senor-chat/api/server-exports' },
                    { label: 'Client Events', slug: 'scripts/senor-chat/api/client-events' },
                    { label: 'Server Events', slug: 'scripts/senor-chat/api/server-events' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
