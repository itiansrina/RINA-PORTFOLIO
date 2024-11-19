import React from 'react';
import ThreeDTextEffect from '../3-D Text/ThreeDTextEffect';
export default function GetInTouch() {
  return (
    <section id="GetInTouch" style={{backgroundColor: 'var(--bg-clr)'}} class="body-font relative bg-gray-900 text-gray-400">
      <div class="container mx-auto px-5 py-24"> 
        <div class="mb-12 flex w-full flex-col text-center" data-aos="fade-right">
          <ThreeDTextEffect title="Get In Touch"/>
          <p class="mx-auto mt-16 text-base leading-relaxed lg:w-2/3">Feel free to reach out to Me! Whether you have a suggestions,
            feedback, or a collaboration proposal, I'd love to hear from you.
          </p>
        </div>
      <form 
       
        >
        <div class="mx-auto md:w-2/3 lg:w-1/2" data-aos="fade-in">
          <div class="-m-2 flex flex-wrap">
          {/* <div class="w-1/2 p-2">
              <div class="relative">
                <input type="text" id="name" name="name" class="w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
                <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
              </div>
            </div>
          <div class="w-1/2 p-2">
              <div class="relative">
                <input type="email" id="email" name="email" class="w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
                <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
              </div>
            </div>*/}
            <div class="mt-4 w-full p-2">
              <div class="relative">
                <textarea id="message" name="message" class="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Please contect through email"></textarea>
                <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Please contect through email</label>
              </div>
            </div>
            <div class="w-full p-2">
              <button class="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send 🚀</button>
            </div>
            <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a href="mailto:kushwaha123rina@gmail.com" className="text-indigo-400">kushwaha123rina@gmail.com</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  );
}
