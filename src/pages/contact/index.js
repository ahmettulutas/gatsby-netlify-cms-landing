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
				<div className='hero-body'>
					<div className='container p-auto'>
						<div className='columns is-8 is-variable '>
							<div className='column is-half has-text-left'>
								<h1 className='title is-1'>İletişime Geçin</h1>
								<div className='social-media'>
									<a
										href='https://facebook.com'
										rel='noreferrer'
										target='_blank'
										className='button is-light is-large'>
										<i className='fa fa-phone-square' aria-hidden='true'></i>
									</a>
									<a
										href='https://instagram.com'
										rel='noreferrer'
										target='_blank'
										className='button is-light is-large'>
										<i className='fa fa-instagram' aria-hidden='true'></i>
									</a>
									<a
										href='https://twitter.com'
										rel='noreferrer'
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

									<div className='control'>
										<button
											type='submit'
											className='button is-link is-fullwidth has-text-weight-medium is-medium'>
											Mesaj Yolla
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
