import React from 'react';
import Item from './Item/Item';
import logo from '../../../images/logo.png'

const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center">
                    <a href="/" class="mb-6 sm:mx-auto">
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        <img src={logo} className="-mt-4 w-20 " alt="" />
                        </div>
                    </a>
                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span class="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span class="relative">The</span>
                            </span>{' '}
                            Some Commonly Asked Questions About Us.
                        </h2>
                        <p class="text-base text-gray-700 md:text-lg">
                            We try give top rated attentions to our clients. And you can ask away any query you have. Here are some commonly asked queries. Hope you find it usefull.
                        </p>
                    </div>
                </div>
                <div class="space-y-4">
                    <Item title="The quick, brown fox jumps over a lazy dog?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="The first mate and his Skipper too will do?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="Is the Space Pope reptilian!?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="How much money you got on you?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Faq;