import { SideBar } from '../Wrapper/SideBar/SideBar'
import { MenuStyle } from './style'

export function Menu({ isOpen, setMenuIsOpen }) {
	return (
		<>
			<MenuStyle />
			<div>
				<button onClick={setMenuIsOpen}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='42'
						height='42'
						fill='var(--green-500)'
						viewBox='0 0 256 256'
					>
						<rect width='256' height='256' fill='none'></rect>
						<line
							x1='40'
							y1='128'
							x2='216'
							y2='128'
							stroke='var(--green-500)'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='16'
						></line>
						<line
							x1='40'
							y1='64'
							x2='216'
							y2='64'
							stroke='var(--green-500)'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='16'
						></line>
						<line
							x1='40'
							y1='192'
							x2='216'
							y2='192'
							stroke='var(--green-500)'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='16'
						></line>
					</svg>
				</button>
			</div>
			<div className={isOpen ? 'open' : 'closed'}>
				<div className='button-close'>
					<button onClick={setMenuIsOpen}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='42'
							height='42'
							fill='var(--green-500)'
							viewBox='0 0 256 256'
						>
							<rect width='256' height='256' fill='none'></rect>
							<line
								x1='200'
								y1='56'
								x2='56'
								y2='200'
								stroke='var(--green-500)'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='16'
							></line>
							<line
								x1='200'
								y1='200'
								x2='56'
								y2='56'
								stroke='var(--green-500)'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='16'
							></line>
						</svg>
					</button>
				</div>
				<SideBar />
			</div>
		</>
	)
}
