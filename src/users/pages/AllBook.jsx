import React from "react";
import Header from "../components/Header";
import BookstoreFooter from "../../components/BookstoreFooter";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function AllBooks() {
  return (
    <>
      <Header />

      <section className="mb-15">
        <div>
          <div className="text-center mt-10 text-3xl">
            <h1>Collections</h1>
          </div>
          <div className="mt-5">
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by Title"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="ml-10 mt-15 text-2xl">
            <h1>Filters</h1>
          </div>
          <div className="flex justify-evenly">
            <ul className="ml-10 mt-2 space-y-2">
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="pari" />
                <label htmlFor="pari">Literary Fiction</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="razi" />
                <label htmlFor="razi">Philosophy</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Thriller</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Romance</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Horror</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Auto/Biography</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Self-Help</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">Politics</label>
              </li>
              <li className="flex items-center gap-3">
                <input type="radio" name="person" id="junaid" />
                <label htmlFor="junaid">No-filter</label>
              </li>
            </ul>

            <div>
        <Link to={'/veiwbook/:id'}>
            <Card href="#" className="max-w-sm">
              <img src="https://images.unsplash.com/photo-1502979932800-33d311b7ce56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
            </Card>
        </Link>
        </div>


          </div>
          
             
        
     
          
        </div>
      </section>

     

      <BookstoreFooter />
    </>
  );
}

export default AllBooks;