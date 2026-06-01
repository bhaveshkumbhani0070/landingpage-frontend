import React, { useEffect, useMemo, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactUs = () => {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (submitSuccess) {
      const timer = window.setTimeout(() => setSubmitSuccess(false), 5000);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [submitSuccess]);

  const validate = useMemo(() => {
    const validation = {};
    if (!formValues.name.trim()) validation.name = 'Name is required.';
    if (!formValues.email.trim()) {
      validation.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      validation.email = 'Please enter a valid email address.';
    }
    if (!formValues.message.trim()) validation.message = 'Message is required.';
    return validation;
  }, [formValues]);

  const isFormValid = useMemo(() => Object.keys(validate).length === 0, [validate]);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    if (submitSuccess) setSubmitSuccess(false);
    if (errors[event.target.name]) {
      setErrors({ ...errors, [event.target.name]: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate);

    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormValues(initialForm);
    }, 1000);
  };

  return (
    <div id='contact' className='container mx-auto'>
      <div className='lg:flex lg:px-32 gap-x-10'>
        <div className='flex-grow'>
          <section className='w-full bg-gradient-to-l from-[#110D2E]/30 to-[#fc466a4a]/10 rounded-md shadow-md p-12 sm:p-16'>
            <div className='flex flex-col mb-10 justify-center items-center'>
              <h2 className='text-2xl font-semibold capitalize text-white'>Drop Us Your Message</h2>
              <p className='text-gray-400'>Freely contact with us anytime. We're available here for you.</p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className='grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2'>
                <div className='col-span-2 lg:col-span-1'>
                  <label className='block text-sm font-medium text-gray-300'>Full Name</label>
                  <input
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    type='text'
                    className='w-full px-4 py-3 mt-2 rounded-full bg-transparent border border-white/20 text-white placeholder:text-gray-500 transition focus:border-[#6318F1] focus:outline-none'
                    placeholder='Enter your name'
                  />
                  {errors.name && <p className='mt-2 text-sm text-[#f87171]'>{errors.name}</p>}
                </div>

                <div className='col-span-2 lg:col-span-1'>
                  <label className='block text-sm font-medium text-gray-300'>Email</label>
                  <input
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                    type='email'
                    className='w-full px-4 py-3 mt-2 rounded-full bg-transparent border border-white/20 text-white placeholder:text-gray-500 transition focus:border-[#6318F1] focus:outline-none'
                    placeholder='Enter your email'
                  />
                  {errors.email && <p className='mt-2 text-sm text-[#f87171]'>{errors.email}</p>}
                </div>

                <div className='col-span-2'>
                  <label className='block text-sm font-medium text-gray-300'>Subject</label>
                  <input
                    name='subject'
                    value={formValues.subject}
                    onChange={handleChange}
                    type='text'
                    className='w-full px-4 py-3 mt-2 rounded-full bg-transparent border border-white/20 text-white placeholder:text-gray-500 transition focus:border-[#6318F1] focus:outline-none'
                    placeholder='Subject (optional)'
                  />
                </div>

                <div className='col-span-2'>
                  <label className='block text-sm font-medium text-gray-300'>Message</label>
                  <textarea
                    name='message'
                    value={formValues.message}
                    onChange={handleChange}
                    rows={5}
                    className='w-full px-6 py-4 mt-2 rounded-3xl bg-transparent border border-white/20 text-white placeholder:text-gray-500 transition focus:border-[#6318F1] focus:outline-none'
                    placeholder='Message...'
                  />
                  {errors.message && <p className='mt-2 text-sm text-[#f87171]'>{errors.message}</p>}
                </div>
              </div>

              <div className='flex flex-col gap-4 mt-6 sm:flex-row sm:items-center'>
                <button
                  type='submit'
                  disabled={!isFormValid || isSubmitting}
                  className={`px-6 py-3 rounded-full text-white transition-all duration-200 ${
                    !isFormValid || isSubmitting
                      ? 'bg-white/20 cursor-not-allowed'
                      : 'bg-[#6318F1] hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitSuccess && (
                  <div className='rounded-2xl bg-[#10B981]/10 px-4 py-3 text-sm text-[#6EE7B7] border border-[#10B981]/20'>
                    Your message was sent successfully (mock send).
                  </div>
                )}
              </div>
            </form>
          </section>
        </div>

        <div className='lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border rounded-3xl overflow-hidden bg-white/5'>
          <div className='flex flex-1 flex-col items-center justify-around w-full'>
            <div className='flex flex-col justify-center items-center py-6'>
              <FaPhoneAlt size={44} className='text-blue-700 my-4' />
              <div className='text-white text-lg py-1'>Phone</div>
              <div className='text-gray-400 text-lg'>0310 - 7756294</div>
            </div>
            <hr className='w-32 bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB]' />
          </div>

          <div className='flex flex-1 flex-col items-center justify-around w-full'>
            <div className='flex flex-col justify-center items-center py-6'>
              <MdMarkEmailUnread size={44} className='text-blue-700 my-4' />
              <div className='text-white text-lg py-1'>Email</div>
              <div className='text-gray-400 text-lg'>hello@example.com</div>
            </div>
            <hr className='w-32 bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB]' />
          </div>

          <div className='flex flex-1 flex-col items-center justify-around w-full'>
            <div className='flex flex-col justify-center items-center py-6'>
              <FaLocationDot size={44} className='text-blue-700 my-4' />
              <div className='text-white text-lg py-1'>Location</div>
              <div className='text-gray-400 text-lg text-center'>123 Innovation Drive, Suite 500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;