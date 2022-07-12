import { PostStyle } from './style'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { CommentStyle } from '../Comment/styles'

interface PostProps {
	author: {
		name: string
		avatarUrl: string
		role: string
	}
	content: [
		{
			type: string
			content: string
		}
	]
	publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
	const [comments, setComments] = useState([])
	const [newCommentText, setNewCommentText] = useState('')

	const publishedDateFormated = format(
		publishedAt,
		"d 'de' LLLL 'ás' HH:mm 'h'",
		{
			locale: ptBR,
		}
	)
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})

	function handleCreateNewComment(event) {
		event.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}
	function handleNewCommentChange(event) {
		setNewCommentText(event.target.value)
		event.target.setCustomValidity('')
	}

	function handleNewCommentInvalid() {
		event.target.setCustomValidity('Este campo é obrigatório!')
	}

	function deleteComment(commentToDelete) {
		const commentsWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete
		})

		setComments(commentsWithoutDeletedOne)
	}

	const isNewCommentEmpty = newCommentText.length === 0

	return (
		<PostStyle>
			<header>
				<div className='author'>
					<Avatar url={author.avatarUrl} border={true} />
					<div className='author-info'>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					title={publishedDateFormated}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>
			<div className='content'>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>
					} else if (line.type === 'link') {
						return (
							<p key={line.content}>
								<a href=''>{line.content}</a>
							</p>
						)
					}
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className='comment-form'>
				<strong>Deixe seu Feedback</strong>
				<textarea
					placeholder='Deixe um comentario'
					name='comment'
					value={newCommentText}
					onChange={handleNewCommentChange}
					required
					onInvalid={handleNewCommentInvalid}
				/>
				<footer>
					<button type='submit' disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>
			<div className='comment-list'>
				{comments.map((comment) => {
					return (
						<Comment
							content={comment}
							key={comment}
							deleteCommentFunction={deleteComment}
						/>
					)
				})}
			</div>
		</PostStyle>
	)
}
