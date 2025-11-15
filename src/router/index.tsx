import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/components/layouts/main-layout'

import { AuthPage } from '@/pages/auth'
import { FollowersPage } from '@/pages/followers'
import { FollowingPage } from '@/pages/following'
import { PostPage } from '@/pages/post'
import { PostsPage } from '@/pages/posts'
import { ProfilePage } from '@/pages/profile'

import { APP_URL } from '@/utils/constants'

export const router = createBrowserRouter([
	{
		path: APP_URL.AUTH,
		element: <AuthPage />
	},
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: APP_URL.HOME,
				element: <PostsPage />
			},
			{
				path: APP_URL.FOLLOWERS,
				element: <FollowersPage />
			},
			{
				path: APP_URL.FOLLOWING,
				element: <FollowingPage />
			},
			{
				path: APP_URL.POST,
				element: <PostPage />
			},
			{
				path: APP_URL.POSTS,
				element: <PostsPage />
			},
			{
				path: APP_URL.USERS,
				element: <ProfilePage />
			}
		]
	}
])

export const AppRouter = () => <RouterProvider router={router} />
