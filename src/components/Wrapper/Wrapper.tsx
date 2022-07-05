import { useState } from 'react'
import { Post } from '../Post/Post'
import { SideBar } from './SideBar/SideBar'
import { WrapperStyle } from './style'

export function Wrapper() {
	const windowWidth = window.screen.width
	const isMobile = windowWidth < 1023 ? true : false
	return (
		<WrapperStyle>
			{isMobile ? null : <SideBar />}
			<main>
				<Post />
				<Post />
			</main>
		</WrapperStyle>
	)
}
