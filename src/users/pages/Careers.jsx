import { useRef, useState } from "react";
import Header from "../components/Header";
import { Card, Badge, ModalFooter } from "flowbite-react";
import { HiLocationMarker, HiExternalLink } from "react-icons/hi";
import {  Textarea } from "flowbite-react";
import { FileInput, HelperText } from "flowbite-react";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import BookstoreFooter from "../../components/BookstoreFooter";

function Careers() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > null;

  return (
    <>
      <Header />

      <section>
        <div className="text-center mt-20">
          <h2 className="text-3xl">Careers</h2>
          <p className="font-normal text-gray-700  p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, beatae minima nobis alias reiciendis, error neque
            laborum suscipit hic a impedit! Debitis consequuntur voluptatum sed
            non odit quod dolores repellendus dolorum a. Inventore, quis sunt!
            Quaerat quae repudiandae excepturi nulla officiis totam fugiat
            consectetur omnis nobis adipisci error exercitationem, eligendi
            necessitatibus ab delectus minus temporibus vitae mollitia suscipit
            quo. Soluta.
          </p>
        </div>

        <div className="">
          <h2 className="mt-14 ml-10 text-2xl">Current Opening</h2>

          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative mb-5">
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
                placeholder="Job Title"
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
          <div className="max-w-5xl mx-auto bg-white border shadow p-6 rounded-lg mb-10">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Hr Assistant</h3>
                <hr className="my-2" />
                <p> Kochi</p>
                <p>Job Type: Full-time</p>
                <p>Salary: 20000 - 30000 / month</p>
                <p>Qualification:</p>
                <p>Experience: 1-2 yr</p>
                <p>Description:</p>
              </div>

              <Button onClick={() => setOpenModal(true)}>Apply</Button>
              <Modal
                show={openModal}
                size="md"
                popup
                onClose={() => setOpenModal(false)}
                initialFocus={emailInputRef}
              >
                <ModalHeader />
                <ModalBody>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Application form
                    </h3>
                    <hr />

                   <div className="grid gap-2 grid-cols-2">
                    <div className="">
                     <div className="mb-2">
                      <TextInput id="name" placeholder="Full name" required/>
                    </div>
                    <div>
                      <TextInput id="email" placeholder="Email Id" required/>
                    </div>
                   </div>
                    
                    <div className="">
                        <div className="mb-2">
                      <TextInput id="name" placeholder="Qualification" required/>
                    </div>
                    <div>
                      <TextInput id="number" placeholder="Phone" required/>
                    </div>
                    </div>
                   </div>
            
                    
                    <div className="max-w-md">
                      <Textarea id="comment" placeholder="Cover Letter" required rows={4} />
                    </div>

                    <div id="fileUpload" className="max-w-md">
                      <Label className="mb-2 block" htmlFor="file"> Upload file</Label><FileInput id="file" />
                      </div>
            
                  </div>
                </ModalBody>
                
                <ModalFooter className="ms-auto">
          <Button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Reset</Button>
          <Button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</Button>
        </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </section>
      <BookstoreFooter/>
    </>
  );
}

export default Careers;
