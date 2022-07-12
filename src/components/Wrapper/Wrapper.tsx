import { useState } from 'react'
import { Post } from '../Post/Post'
import { SideBar } from './SideBar/SideBar'
import { WrapperStyle } from './style'

const posts = [
	{
		id: 1,
		author: {
			name: 'Matheus de Oliveira',
			avatarUrl: 'https://github.com/DevMathi.png',
			role: 'Front-End Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2022-07-06 20:00:00'),
	},
	{
		id: 2,
		author: {
			name: 'Mayk Brito',
			avatarUrl: 'https://github.com/maykbrito.png',
			role: 'Educator at Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2022-07-02 20:00:00'),
	},
	{
		id: 3,
		author: {
			name: 'Matheus de Oliveira',
			avatarUrl: 'https://github.com/DevMathi.png',
			role: 'Front-End Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2022-07-06 20:00:00'),
	},
]

console.log(posts)
export function Wrapper() {
	const windowWidth = window.screen.width
	const isMobile = windowWidth < 1023 ? true : false
	return (
		<WrapperStyle>
			{isMobile ? null : <SideBar />}
			<main>
				{posts.map((post) => {
					return (
						<Post
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
							key={post.id}
						/>
					)
				})}
			</main>
		</WrapperStyle>
	)
}
