import React, { useState } from "react";

interface FeedbackFormState {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    post: string;
    pin: string;
    visitedDate: string;
    visitedTime: string;
    purpose: string;
    serviceDetails: string;
    message: string;
}

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState<FeedbackFormState>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        post: "",
        pin: "",
        visitedDate: "",
        visitedTime: "",
        purpose: "",
        serviceDetails: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            phone,
            email,
            address,
            post,
            pin,
            visitedDate,
            visitedTime,
            purpose,
            serviceDetails,
            message,
        } = feedback;

        if (
            firstName &&
            lastName &&
            phone &&
            email &&
            address &&
            post &&
            pin &&
            visitedDate &&
            visitedTime &&
            purpose &&
            serviceDetails &&
            message
        ) {
            alert("Thank you for your feedback!");
            console.log(feedback);
            setFeedback({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                address: "",
                post: "",
                pin: "",
                visitedDate: "",
                visitedTime: "",
                purpose: "",
                serviceDetails: "",
                message: "",
            });
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 px-2 py-4">
            <form
                className="bg-white shadow-lg rounded-lg p-4 w-full max-w-3xl border-t-4 border-blue-500"
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    Share Your Feedback
                </h2>
                <p className="text-gray-600 text-xs mb-4 text-center">
                    We value your input and look forward to improving your
                    experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={feedback.firstName}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={feedback.lastName}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={feedback.phone}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={feedback.email}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <label
                            htmlFor="address"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Address<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={feedback.address}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            rows={2}
                            required
                        ></textarea>
                    </div>

                    {/* Post */}
                    <div>
                        <label
                            htmlFor="post"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Post<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="post"
                            name="post"
                            value={feedback.post}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* PIN */}
                    <div>
                        <label
                            htmlFor="pin"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            PIN<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="pin"
                            name="pin"
                            value={feedback.pin}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Visited Date */}
                    <div>
                        <label
                            htmlFor="visitedDate"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Visited Date<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="visitedDate"
                            name="visitedDate"
                            value={feedback.visitedDate}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Visited Time */}
                    <div>
                        <label
                            htmlFor="visitedTime"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Visited Time<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="time"
                            id="visitedTime"
                            name="visitedTime"
                            value={feedback.visitedTime}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Purpose */}
                    <div className="md:col-span-2">
                        <label
                            htmlFor="purpose"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Purpose<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="purpose"
                            name="purpose"
                            value={feedback.purpose}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Service Details */}
                    <div className="md:col-span-2">
                        <label
                            htmlFor="serviceDetails"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Service Details
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="serviceDetails"
                            name="serviceDetails"
                            value={feedback.serviceDetails}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            rows={3}
                            required
                        ></textarea>
                    </div>

                    {/* Additional Comments */}
                    <div className="md:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium text-sm mb-1"
                        >
                            Additional Comments / Suggestions
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={feedback.message}
                            onChange={handleChange}
                            className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            rows={4}
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none mt-4"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
