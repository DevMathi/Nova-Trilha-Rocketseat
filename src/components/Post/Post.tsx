import { PostStyle } from './style'
import { Comment } from '../Comment/Comment'

export function Post() {
	return (
		<PostStyle>
			<header>
				<div className='author'>
					<img src='https://github.com/DevMathi.png' />
					<div className='author-info'>
						<strong>Matheus Oliveira</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time>Publicado há 1h</time>
			</header>
			<div className='content'>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					<a href='#'>jane.design/doctorcare</a>
				</p>
				<p>
					<a href='#'>#novoprojeto</a>
					<a href=''>#rocketseat</a>
					<a href=''>#nlw</a>
				</p>
			</div>
			<form className='comment-form'>
				<strong>Deixe seu Feedback</strong>
				<textarea placeholder='Deixe um comentario' />
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>
			<div className='comment-list'>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</PostStyle>
	)
}
