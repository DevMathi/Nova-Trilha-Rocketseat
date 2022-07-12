import { AvatarStyle } from './style'

interface AvatarProps {
	url: string
	border: boolean
}

export function Avatar({ url, border = true }: AvatarProps) {
	return (
		<>
			<AvatarStyle />
			<img src={url} className={border ? 'avatar-border ' : 'avatar'} />
		</>
	)
}
