import React from "react";
import Header from "../components/Header";
import { Button, ButtonGroup } from "flowbite-react";
import { Label, TextInput, Textarea } from "flowbite-react";
import { MdVerified } from "react-icons/md";
import EditProf from "../components/EditProf";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { Card } from "flowbite-react";

import { BsCashCoin } from "react-icons/bs";
import { useState } from "react";


function Profile() {

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    noOfPages: "",
    imageUrl: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadImage: []
  })

  const [preview,setPreview]=useState('')
  const [previewList,setPreviewList]=useState([])



  const { title, author, noOfPages, imageUrl, price, discountPrice, abstract, publisher, language, isbn, category } = bookDetails

  const handleUpload = (e) => {
    console.log(e.target.files[0]);

    let imgArray = bookDetails.uploadImage
    imgArray.push(e.target.files[0])
    console.log(imgArray);

    setBookDetails({ ...bookDetails, uploadImage: imgArray })

    // cover image file or url 
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)

    // to hold 3 img
    let imgList = previewList
    imgList.push(url)
    console.log(imgList);

    setPreviewList
    
    



  }

  const handleAddBook = async () => {
    // alert("addBook")
    console.log(bookDetails);
    if (title == "" ||
      author == "" ||
      noOfPages == "" ||
      imageUrl == "" ||
      price == "" ||
      discountPrice == "" ||
      abstract == "" ||
      publisher == "" ||
      language == "" ||
      isbn == "" ||
      category == "") {
      alert("Please Fill The form")
    }

  }


  return (
    <>
      <Header />

      <section>
        <div className="bg-black w-100% h-50"></div>
        <div className="-mt-[100px] ml-30">
          <img
            className="rounded-full w-50 h-50  "
            src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
        </div>
        <div>
          <span className="flex items-center gap-3">
            <h3 className="text-2xl ml-15 ">User Name </h3>
            <MdVerified color="blue" className="size-6" />
          </span>

          <span>
            <EditProf />
          </span>

          <p className="p-8 ml-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            cupiditate expedita nihil exercitationem debitis atque sequi nobis
            enim voluptatem id repudiandae cumque unde delectus necessitatibus
            voluptas omnis dolorem voluptates ducimus?
          </p>
        </div>
      </section>

      <section>
        {/* <div className="text-center mt-10">
          <ButtonGroup>
            <Button color="alternative">Sell Book</Button>
            <Button color="alternative">Book Status</Button>
            <Button color="alternative">Purchase History</Button>
          </ButtonGroup>
        </div> */}

        <div className="overflow-x-auto text-center mt-10 p-5">
          <Tabs aria-label="Full width tabs" variant="fullWidth">
            <TabItem active title="Sell Book" icon={BsCashCoin}>
              <span className="font-medium text-gray-800 dark:text-white"></span>
              <section>
                <form className="bg-gray-100 mt-20 m-32 p-5 rounded-3xl" action="">
                  <h2 className="text-2xl text-center mb-8">Book Details</h2>

                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div className="flex max-w-md flex-col gap-4 ml-12">
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })}
                        placeholder="Title"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })}
                        placeholder="Author"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, noOfPages: e.target.value })}
                        placeholder="No of pages"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })}
                        placeholder="Image url"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })}
                        placeholder="Price"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })}
                        placeholder="Discount Price"
                        required
                        color="white"
                      />
                      <Textarea
                        onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })}
                        color="white"
                        id="comment"
                        placeholder="Abstract"
                        required
                        rows={4}
                      />
                    </div>
                    <div className="flex max-w-md flex-col gap-4 ml-12">
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })}
                        placeholder="Publisher"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })}
                        placeholder="Language"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })}
                        placeholder="ISBN"
                        required
                        color="white"
                      />
                      <TextInput
                        onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })}
                        placeholder="Category"
                        required
                        color="white"
                      />

                      <div className="ms-40 mt-40">
                        <label htmlFor="imgfile" >
                          <input id="imgfile" type="file" hidden
                            onChange={(e) => handleUpload(e)} />
                          {
                            previewList.length<3? preview && preview ?
                            <div>
                              
                              <img src={preview} alt="" width={"120px"} />
                              <img src='https://media.istockphoto.com/id/1014086232/vector/plus-sign-icon-button-flat-round-positive-symbol-sticker.jpg?s=612x612&w=0&k=20&c=QTJS7zd6Qy2Og2V_WBFov-rJgdNDZd7iYj6Oo6_LsCg=' alt="" width={"50px"} height={"20px"} />
                            </div>
                            : 
                            <img src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Transparent-Image.png" alt="" width={"100px"} height={"100px"} />
                            :
                            ''
                          }

                          {/* Preview List Array */}

                          {
                            preview && 
                            <div className="flex justify-evenly flex-wrap">
                              {
                                previewList?.map(item=>(
                                  <img src={item} alt="" width={'80px'} height={'80px'}/>
                                ))
                              }
                            </div>
                          }





                        </label>
                      </div>

                      <div className="flex justify-end-safe">
                        <button
                          type="button"
                          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                          Reset
                        </button>

                        <button
                          onClick={handleAddBook}
                          type="button"
                          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                          Add Book
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </TabItem>


            <TabItem title="Book Status" icon={MdDashboard}>
              <span className="font-medium text-gray-800 dark:text-white"></span>
              <Card href="#" className="w-full ">
                <div className="flex justify-evenly">
                  <div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </div>
                  <div>
                    <img src="https://i.pinimg.com/564x/71/3f/f2/713ff2828de8fd471369fed7991d9cc7.jpg" alt="" width={"200px"} />
                  </div>
                </div>

              </Card>
            </TabItem>


            <TabItem title="Purchase History" icon={FaMoneyCheck}>
              This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
              Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
              control the content visibility and styling.
            </TabItem>

          </Tabs>
        </div>

      </section>


    </>
  );
}

export default Profile;
