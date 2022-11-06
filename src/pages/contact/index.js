import * as React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isValidated: false };
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...this.state,
			}),
		})
			.then(() => navigate(form.getAttribute('action')))
			.catch((error) => alert(error));
	};

	render() {
		return (
			<Layout>
				<Hero title={'İletişim'} background={contact} hasDarkBg />
<<<<<<< Updated upstream
{/* 				<section className='section'>
					<div className='container'>
						<div className='content'>
							<h1>İletişim</h1>
							<form
								className='test-class'
								name='contact'
								method='post'
								action='/contact/thanks/'
								data-netlify='true'
								data-netlify-honeypot='bot-field'
								onSubmit={this.handleSubmit}>
								{/* The `form-name` hidden field is required to support form submissions without JavaScript 
								<input type='hidden' name='form-name' value='contact' />
								<div hidden>
									<label>
										Don’t fill this out:{' '}
										<input name='bot-field' onChange={this.handleChange} />
									</label>
								</div>
								<div className='field'>
									<label className='label' htmlFor={'name'}>
										Adınız
									</label>
									<div className='control'>
										<input
											className='input'
											type={'text'}
											name={'name'}
											onChange={this.handleChange}
											id={'name'}
											required={true}
										/>
									</div>
								</div>
								<div className='field'>
									<label className='label' htmlFor={'email'}>
										Email
									</label>
									<div className='control'>
										<input
											className='input'
											type={'email'}
											name={'email'}
											onChange={this.handleChange}
											id={'email'}
											required={true}
										/>
									</div>
								</div>
								<div className='field'>
									<label className='label' htmlFor={'message'}>
										Mesaj
									</label>
									<div className='control'>
										<textarea
											className='textarea'
											name={'message'}
											onChange={this.handleChange}
											id={'message'}
											required={true}
										/>
=======
				<div className='hero-body'>
					<div className='container p-auto'>
						<div className='columns is-8 is-variable '>
							<div className='column is-half has-text-left'>
								<h1 className='title is-1'>İletişime Geçin</h1>
								<div className='social-media'>
									<a
										href='https://facebook.com'
										target='_blank'
										className='button is-light is-large'>
										<i className='fa fa-phone-square' aria-hidden='true'></i>
									</a>
									<a
										href='https://instagram.com'
										target='_blank'
										className='button is-light is-large'>
										<i className='fa fa-instagram' aria-hidden='true'></i>
									</a>
									<a
										href='https://twitter.com'
										target='_blank'
										className='button is-light is-large'>
										<i className='fa fa-whatsapp' aria-hidden='true'></i>
									</a>
								</div>
							</div>
							<div className='column is-half has-text-left'>
								<form
									name='contact'
									method='post'
									action='/contact/thanks/'
									data-netlify='true'
									data-netlify-honeypot='bot-field'
									data-netlify-recaptcha='true'
									onSubmit={this.handleSubmit}>
									{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
									<input type='hidden' name='form-name' value='contact' />
									<div hidden>
										<label>
											Don’t fill this out:{' '}
											<input name='bot-field' onChange={this.handleChange} />
										</label>
									</div>
									<div className='field'>
										<label className='label' htmlFor='name'>
											İsminiz
										</label>
										<div className='control'>
											<input
												className='input is-medium'
												type='text'
												required={true}
												onChange={this.handleChange}
												name='name'
												id={'name'}
											/>
										</div>
									</div>
									<div className='field'>
										<label className='label' htmlFor='email'>
											Email Adresiniz
										</label>
										<div className='control'>
											<input
												className='input is-medium'
												type='text'
												required={true}
												onChange={this.handleChange}
												name='email'
												id={'email'}
											/>
										</div>
									</div>
									<div className='field'>
										<label className='label' htmlFor='message'>
											Mesajınız
										</label>
										<div className='control'>
											<textarea
												className='textarea is-medium'
												required={true}
												onChange={this.handleChange}
												name='message'
												id={'message'}></textarea>
										</div>
									</div>
									<div data-netlify-recaptcha='true'></div>
									<div className='control'>
										<button
											type='submit'
											className='button is-link is-fullwidth has-text-weight-medium is-medium'>
											Mesaj Yolla
										</button>
>>>>>>> Stashed changes
									</div>
								</div>
								<div className='field'>
									<button className='button is-link is-full' type='submit'>
										Gönder
									</button>
								</div>
							</form>
						</div>
					</div>
				</section> */}
				<section class="hero is-fullheight">
		<div class="hero-body">
			<div class="container p-auto">
				<div class="columns is-8 is-variable ">
					<div class="column is-two-thirds has-text-left">
						<h1 class="title is-1">Contact Us</h1>
						<p class="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
							voluptate facere molestiae consequatur.</p>
						<div class="social-media">
							<a href="https://facebook.com" target="_blank" class="button is-light is-large"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
							<a href="https://instagram.com" target="_blank" class="button is-light is-large"><i class="fa fa-instagram" aria-hidden="true"></i></a>
							<a href="https://twitter.com" target="_blank" class="button is-light is-large"><i class="fa fa-twitter" aria-hidden="true"></i></a>
						</div>
					</div>
					<div class="column is-one-third has-text-left">
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input class="input is-medium" type="text" />
							</div>
						</div>
						<div class="field">
							<label class="label">Email</label>
							<div class="control">
								<input class="input is-medium" type="text" />
							</div>
						</div>
						<div class="field">
							<label class="label">Message</label>
							<div class="control">
								<textarea class="textarea is-medium"></textarea>
							</div>
						</div>
						<div class="control">
							<button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
			</Layout>
		);
	}
}
