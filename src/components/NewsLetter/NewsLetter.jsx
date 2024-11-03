import React, { useState } from 'react'

const NewsLetter = () => {

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate an API call or subscription logic here
        console.log('Email submitted:', email);
        setEmail('');
        setIsSubmitted(true);
    };
  return (
    <div className="bg-transparent p-8 rounded-lg shadow-lg text-center mt-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Our Family!</h2>
            <p className="text-lg mb-6 text-gray-600">Sign up for our newsletter and unlock exclusive deals, updates, and a warm welcome gift!</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center">
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="p-3 rounded-l-md border border-gray-300 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <button 
                    type="submit" 
                    className="btn bg-primary text-background hover:bg-secondary px-8 rounded-2xl transition duration-200"
                >
                    Subscribe Now
                </button>
            </form>
            {isSubmitted && (
                <p className="mt-4 text-green-500 font-semibold">Thank you for subscribing! Check your inbox for exclusive offers.</p>
            )}
        </div>
  )
}

export default NewsLetter