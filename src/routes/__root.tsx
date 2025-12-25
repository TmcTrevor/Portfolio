import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'

// import Header from '../components/Header'

// import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

// import StoreDevtools from '../lib/demo-store-devtools'

import type { QueryClient } from '@tanstack/react-query'
import Navbar from '@/components/NavBar'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div className="bg-background-dark text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden relative bg-subtle-noise">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-200 h-200 rounded-full bg-primary/5 blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 rounded-full bg-indigo-900/10 blur-[100px] opacity-40"></div>
      </div>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
      {/* <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
          StoreDevtools,
        ]}
      /> */}
    </div>
  ),
})
