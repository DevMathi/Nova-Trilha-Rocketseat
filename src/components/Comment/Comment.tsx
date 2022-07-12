import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { CommentStyle } from './styles'

interface commentProps {
	content: []
	deleteCommentFunction: () => void
}

export function Comment({ content, deleteCommentFunction }: commentProps) {
	const [likeCount, setLikeCount] = useState(0)

	function handleLikeComment() {
		setLikeCount(likeCount + 1)
	}

	function handleDeleteComment() {
		setLikeCount((state) => {
			return state + 1
		})
	}

	return (
		<CommentStyle>
			<Avatar border={false} url='https://github.com/DevMathi.png' />
			<div className='comment-box'>
				<div className='comment-content'>
					<header>
						<div className='author-and-time'>
							<strong>Matheus Oliveira</strong>
							<time>Cerca de 1h atrás</time>
						</div>
						<button title='Deletar comentário' onClick={handleDeleteComment}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M20.25 5.25H3.75'
									stroke='#8D8D99'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M9.75 9.75V15.75'
									stroke='#8D8D99'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M14.25 9.75V15.75'
									stroke='#8D8D99'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25'
									stroke='#8D8D99'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25'
									stroke='#8D8D99'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</header>
					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.875 15.625H1.125H1.875ZM9.375 1.875V1.125C9.09092 1.125 8.83122 1.2855 8.70418 1.53959L9.375 1.875ZM11.875 6.25H11.125C11.125 6.66421 11.4608 7 11.875 7V6.25ZM16.7109 6.25V7L16.7128 7L16.7109 6.25ZM17.9453 7.65625L17.2019 7.55719L17.2011 7.56322L17.9453 7.65625ZM17.0078 15.1562L17.7519 15.25L17.752 15.2493L17.0078 15.1562ZM15.7734 16.25V17L15.7769 17L15.7734 16.25ZM2.5 8.875H6.25V7.375H2.5V8.875ZM5.5 8.125V16.25H7V8.125H5.5ZM6.25 15.5H2.5V17H6.25V15.5ZM2.5 15.5C2.53315 15.5 2.56495 15.5132 2.58839 15.5366L1.52773 16.5973C1.78559 16.8551 2.13533 17 2.5 17V15.5ZM2.58839 15.5366C2.61183 15.5601 2.625 15.5918 2.625 15.625H1.125C1.125 15.9897 1.26987 16.3394 1.52773 16.5973L2.58839 15.5366ZM2.625 15.625V8.75H1.125V15.625H2.625ZM2.625 8.75C2.625 8.78315 2.61183 8.81495 2.58839 8.83839L1.52773 7.77773C1.26987 8.03559 1.125 8.38533 1.125 8.75H2.625ZM2.58839 8.83839C2.56495 8.86183 2.53315 8.875 2.5 8.875V7.375C2.13533 7.375 1.78559 7.51987 1.52773 7.77773L2.58839 8.83839ZM6.92082 8.46041L10.0458 2.21041L8.70418 1.53959L5.57918 7.78959L6.92082 8.46041ZM9.375 2.625C9.83913 2.625 10.2842 2.80937 10.6124 3.13756L11.6731 2.0769C11.0636 1.46741 10.237 1.125 9.375 1.125V2.625ZM10.6124 3.13756C10.9406 3.46575 11.125 3.91087 11.125 4.375H12.625C12.625 3.51305 12.2826 2.6864 11.6731 2.0769L10.6124 3.13756ZM11.125 4.375V6.25H12.625V4.375H11.125ZM11.875 7H16.7109V5.5H11.875V7ZM16.7128 7C16.783 6.99982 16.8525 7.01468 16.9165 7.04357L17.5335 5.67637C17.2745 5.55944 16.9933 5.4993 16.7091 5.5L16.7128 7ZM16.9165 7.04357C16.9805 7.07246 17.0376 7.11472 17.0839 7.16749L18.2112 6.17797C18.0237 5.96434 17.7926 5.79331 17.5335 5.67637L16.9165 7.04357ZM17.0839 7.16749C17.1302 7.22027 17.1647 7.28236 17.1851 7.34957L18.6207 6.91494C18.5384 6.64288 18.3987 6.39159 18.2112 6.17797L17.0839 7.16749ZM17.1851 7.34957C17.2054 7.41678 17.2112 7.48758 17.2019 7.55719L18.6887 7.75531C18.7263 7.47355 18.7031 7.18701 18.6207 6.91494L17.1851 7.34957ZM17.2011 7.56322L16.2636 15.0632L17.752 15.2493L18.6895 7.74928L17.2011 7.56322ZM16.2637 15.0625C16.2485 15.1829 16.1901 15.2937 16.0992 15.3742L17.094 16.4969C17.4574 16.1749 17.6912 15.7317 17.7519 15.25L16.2637 15.0625ZM16.0992 15.3742C16.0084 15.4547 15.8913 15.4994 15.7699 15.5L15.7769 17C16.2625 16.9977 16.7306 16.8189 17.094 16.4969L16.0992 15.3742ZM15.7734 15.5H6.25V17H15.7734V15.5Z'
								fill='var(--gray-400)'
							/>
						</svg>
						Curtir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</CommentStyle>
	)
}
