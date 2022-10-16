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
				<Hero title={'İletişim'} background={contact} />
				<section className='section'>
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
								{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
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
				</section>
			</Layout>
		);
	}
}
