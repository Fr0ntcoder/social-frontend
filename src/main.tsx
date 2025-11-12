import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

import { store } from '@/store/store.ts'

import { AuthGuard } from '@/provider/auth.guard'
import { ThemeProvider } from '@/provider/theme-provider.tsx'

import { AppRouter } from '@/router/index.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider defaultTheme='dark'>
				<AuthGuard>
					<AppRouter />
				</AuthGuard>
				<Toaster position='top-center' />
			</ThemeProvider>
		</Provider>
	</StrictMode>
)
