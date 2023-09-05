import React from "react";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	
	const onSubmit = (data, e) => {
		e.preventDefault();
		
		emailjs.sendForm('gmail', 'anmolwebsitemailtemplate', e.target, 'YBm4_Zdo_8kauNW2Y').then((result) => {
			e.target.reset();
		}, (error) => {
			console.log(error.text);
		});
	};
	
	return (
		<>
		<form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
			<div className="first">
				<ul>
					<li>
						<input {...register("user_name", { required: true })} type="text" placeholder="Name" />
						{errors.name && errors.name.type === "required" && (
							<span>Name is required</span>
						)}
					</li>
					{/* End first name field */}
					
					<li>
						<input
							{...register(
								"user_email",
								{
									required: "Email is Required",
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Entered value does not match email format",
									},
								},
								{ required: true }
							)}
							type="email"
							placeholder="Email"
						/>
						{errors.email && <span role="alert">{errors.email.message}</span>}
					</li>
					{/* End email name field */}
					
					<li>
						<textarea {...register("message", { required: true })} placeholder="Message"></textarea>
						{errors.subject && <span>Subject is required.</span>}
					</li>
					{/* End subject  field */}
				</ul>
			</div>
			
			<div className="tokyo_tm_button">
				<button type="submit" className="white-fill-bg fill-black">
					Send Message
				</button>
			</div>
			{/* End tokyo_tm_button */}
		</form>
		{/* End contact */}
		</>
	);
};

export default Contact;