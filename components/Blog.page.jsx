import React from 'react'
import Image from 'next/image'
import men1 from '../assets/men1.png'
import men2 from '../assets/men2.png'
import men3 from '../assets/men3.png'

const Blog = () => {
  return (
    <section className="py-6 md:py-24 mt-24 bg-darkwhite2 dark:text-gray" id='blog'>
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Latest News & Blog</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="w-[80%] m-auto grid grid-cols-1  gap-x-12 gap-y-8 md:grid-cols-3">
			<article className="flex flex-col bg-darkwhite3">
				<a rel="noopener noreferrer" href="https://www.apetogentleman.com/best-parka-jackets/" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="" className="object-cover w-full h-full dark:bg-gray-500" src={men1} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-black font-bold">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The best fashion sartorial inspiration</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-darkwhite3">
				<a rel="noopener noreferrer" href="https://www.apetogentleman.com/mens-outdoor-clothing/" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="" className="object-cover w-full h-full dark:bg-gray-500" src={men2} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline  dark:text-black font-bold">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The best fashion sartorial inspiration</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			
			<article className="flex flex-col bg-darkwhite3">
				<a rel="noopener noreferrer" href="https://www.apetogentleman.com/best-winter-coats-men/" aria-label="Te nulla oportere reprimique his dolorum">
					<Image alt="" className="object-cover w-full dark:bg-gray-500 h-full" src={men3}/>
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-black font-bold">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The best fashion sartorial inspiration</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
  )
}

export default Blog