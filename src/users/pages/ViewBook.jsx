import React from "react";
import Header from "../components/Header";
import { FaEye } from "react-icons/fa";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { IoCamera } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";



const BookDetails = () => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Header />
            <section>

                <div className="min-h-screen bg-gray-100 py-10 px-5">
                    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 md:flex gap-6">

                        <div className="flex justify-center md:w-1/3">
                            <img
                                src="https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg"
                                alt="Becoming Book"
                                className="rounded-lg shadow-md w-80 h-auto object-cover"
                            />
                        </div>

                        <div className="md:w-2/3 mt-6 md:mt-0">

                            <FaEye className="float-right"  onClick={() => setOpenModal(true)}/>
                            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                <ModalHeader>Book Photos</ModalHeader>
                                <ModalBody>
                                    <ModalHeader>Books Photos
                  <a
                    href=""
                    className="text-blue-600 text-xl flex items-center gap-2 mt-5"
                  >
                    <BsCamera />
                    Camera click of the book in the hand of seller
                  </a>
                </ModalHeader>
                                </ModalBody>
                                
                            </Modal>
                            <h2 className="text-3xl font-semibold text-center md:text-left mb-1">
                                Atomic Habits
                            </h2>
                            <p className="text-blue-600 text-center md:text-left mb-4">
                                - James Clear
                            </p>

                            <div className="text-gray-700 text-sm space-y-1">
                                <p>
                                    <span className="font-medium">Publisher :</span>
                                </p>
                                <p>
                                    <span className="font-medium">Language :</span>
                                </p>
                                <p>
                                    <span className="font-medium">No. of pages :</span>
                                </p>
                                <p>
                                    <span className="font-medium">Seller Mail :</span>
                                </p>
                                <p>
                                    <span className="font-medium">Real Price :</span>
                                </p>
                                <p>
                                    <span className="font-medium">ISBN :</span>
                                </p>
                            </div>

                            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, praesentium laboriosam. Rem, quaerat autem dolore, sed et molestias dolores, unde deserunt architecto omnis iusto cupiditate totam? Doloremque dolor placeat distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit doloremque ipsa placeat cupiditate amet optio odio laboriosam debitis consectetur animi ullam dolorem, blanditiis quaerat accusantium, eligendi laborum veritatis temporibus eos.
                            </p>

                            <div className="mt-6 flex justify-center md:justify-start gap-3">
                                <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                                    Back
                                </button>
                                <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookDetails;