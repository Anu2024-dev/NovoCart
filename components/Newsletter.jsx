"use client";

import React, { useState, useEffect } from "react";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [typedText, setTypedText] = useState("");

    const fullText = "Stay Rooted in Nature";

    // 🌿 Typing Effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(interval);
        }, 80);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setSubscribed(true);
        setEmail("");

        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <section className="relative mt-28 py-24 px-4 text-center overflow-hidden">

            {/* 🌿 Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3ea] via-[#e8e1d3] to-[#f0ead6] -z-10"></div>

            {/* 🌿 Glow Effect */}
            <div className="absolute w-[350px] h-[350px] bg-[#6b8f71]/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2 animate-pulse"></div>

            {/* 🌿 Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-[#2f4f34]">
                {typedText}
                <span className="animate-pulse ml-1 text-[#6b8f71]">|</span>
            </h1>

            {/* 🌿 Subtext */}
            <p className="text-[#5c6f5c] mt-4 mb-10 text-base md:text-lg max-w-xl mx-auto">
                Get eco-friendly deals, bamboo products, and handcrafted collections directly in your inbox.
            </p>

            {/* 🌿 Form */}
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto flex items-center rounded-full overflow-hidden border border-[#d6d0c4] bg-white shadow-md"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 outline-none text-[#2f4f34] bg-transparent"
                />

                <button
                    type="submit"
                    className="px-8 py-4 bg-[#2f4f34] text-white font-medium hover:bg-[#1f3a28] transition duration-300"
                >
                    Subscribe →
                </button>
            </form>

            {/* 🌿 Success Message */}
            {subscribed && (
                <p className="mt-5 text-[#2f4f34] font-medium animate-bounce">
                    Subscribed successfully!
                </p>
            )}
        </section>
    );
};

export default NewsLetter;