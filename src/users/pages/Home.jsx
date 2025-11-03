import React from "react";
import Header from "../components/Header";
import { Card } from "flowbite-react";

import BookstoreFooter from "../../components/BookstoreFooter";



function Home() {
  return (
    <>
      <Header />

      <section className="relative bg-center bg-cover bg-no-repeat h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2018/04/15/18/02/books-3322275_1280.jpg')",
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Wonderful Gifts
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
            Give your family and friends a book
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center bg-white rounded-full overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Search Books"
                className="w-full px-5 py-3 rounded-full text-gray-700 focus:outline-none"
              />
              <button className="absolute right-4 text-green-700 hover:text-green-800 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* new arrival */}

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">NEW ARRIVALS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Explore Our Latest Collection
          </h2>
        </div>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
         <Card
      className="max-w-sm !bg-amber-700"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://m.media-amazon.com/images/I/A1Wad8LO08L._AC_UF1000,1000_QL80_.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology
      </p>
    </Card>

     <Card
      className=" !bg-amber-700 max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://m.media-amazon.com/images/I/A1Wad8LO08L._AC_UF1000,1000_QL80_.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

     <Card
      className=" !bg-amber-700 max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://m.media-amazon.com/images/I/A1Wad8LO08L._AC_UF1000,1000_QL80_.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

     <Card
      className=" !bg-amber-700 max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://m.media-amazon.com/images/I/A1Wad8LO08L._AC_UF1000,1000_QL80_.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
        </div>

        <div className="text-center">
          <button className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors">
            Explore More
          </button>
        </div>
      </div>
    </section>

    {/* featured authers */}
    <section className=''>
        <div className="text-center mb-12">
          <p className=" text-gray-600 mb-2">FEATURED AUTHORS</p>
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-8">
            Captivates with every word
          </h2>
        </div>

      <div class="grid grid-cols-2 md:grid-cols-2 gap-10 p-12">
        <div className="">
          <p className="text-gray-700 leading-relaxed mt-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio 
              eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem 
              nulla iste." Modi, molestias. Ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum 
              possimus accusantium necessitatibus id neque soluta quisquam explicabo laborum." Deserunt 
              vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio 
              eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem 
              nulla iste." Modi, molestias. Ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum 
              possimus accusantium necessitatibus id neque soluta quisquam explicabo laborum." Deserunt 
              vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
            </p>
        </div>

        <div className=''>
          <img  src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="" />
        </div>
      </div>
    </section>

    {/* testimonial */}
    <section>
      <div className="text-center mb-12">
        <div className="mt-10">
          <p className='text-sm text-gray-600 mb-2'>TESTIMONIALS</p>
          <h2 className='text-3xl text-black font-bold'>See What Others Are Saying</h2>
        </div>

        <div className="flex flex-col items-center text-center mt-8">
          <img className='rounded-full w-40 h-40 mb-6' src="https://ca-times.brightspotcdn.com/dims4/default/d104f58/2147483647/strip/true/crop/4529x3729+0+0/resize/1200x988!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5e%2F40%2F9c27c9564a2babd92b264faedb3f%2Fgarner-author-photo-publicity.jpg" alt="" />
           <h3 className="text-xl font-bold text-gray-900 mb-6">Helen Garner </h3>
           <p className="text-gray-700 leading-relaxed max-w-3xl">HHelen Garner (née Ford,[2] born 7 November 1942) is an Australian novelist, short-story writer, screenwriter and journalist. Garner's first novel, Monkey Grip, published in 1977, immediately established her as an original voice on the Australian literary scene—it is now widely considered a classic.[3] She has a reputation for incorporating and adapting her personal experiences in her fiction, something that has brought her widespread attention, particularly with her novels Monkey Grip and The Spare Room (2008).</p>
        </div>
        <div class="flex flex-row">  
          {/* justify-evenly items-center */}
          <div className="basis-3xs">1</div>
          <div className="basis-2xs">2</div>
          <div className="basis-xs">3</div>
          <div className="basis-sm">4</div>
        </div>
      </div>
    </section>

    <BookstoreFooter/>



    </>
  );
}

export default Home;
