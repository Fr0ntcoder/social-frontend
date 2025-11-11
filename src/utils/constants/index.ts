export const BASE_URL =
	process.env.NODE_ENV === 'production' ? 'none' : 'http://localhost:3000'

export const API_URL = {
	AUTH: {
		LOGIN: '/auth/login',
		REGISTER: '/auth/register'
	},
	USER: {
		CURRENT: '/users/current',
		ID: (id: string) => `/users/${id}`,
		UPDATE: (id: string) => `/users/${id}`
	},
	POST: {
		ID: (id: string) => `/posts/${id}`,
		CREATE: '/posts',
		ALL: '/posts',
		DELETE: (id: string) => `/posts/${id}`
	},
	COMMENT: {
		CREATE: '/comments',
		DELETE: (id: string) => `/comments/${id}`
	},
	LIKE: {
		CREATE: '/likes',
		DELETE: (id: string) => `/likes/${id}`
	},
	FOLLOW: {
		CREATE: '/follows',
		DELETE: (id: string) => `/likes/${id}`
	}
}

export const APP_URL = {
	HOME: '/',
	AUTH: '/auth',
	FOLLOWERS: '/followers',
	FOLLOWING: '/following',
	POSTS: '/posts',
	POST: '/posts/:id',
	USERS: '/users'
}
