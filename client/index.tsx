import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { createPlayer, PlayerProvider } from './player.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()
const player = createPlayer()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="piwakawaka-2024-finlay.au.auth0.com"
      clientId="FXbIRAWKZM1u4u6XV3WDJw9MGtYNeaUB"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://snapJam/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <PlayerProvider player={player}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
        </PlayerProvider>
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
