import React from "react";

const Highlight = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly font-family mt-16 md:mt-28 lg:mt-32 ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div className="relative  bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow ">
            <div className=" shadow-xl text-white mx-20 mb-3 absolute rounded-full py-4 px-4  bg-lime-600 left-4 -top-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                  <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                  <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </div>
            </div>

            <div className="mt-12">
              <div className="border-t-2"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-5 mt-8 ">
                    Delivery
                  </h3>
                  <p className=" text-sm leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                    Free delivery over orders above 1000 /-
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  bg-white py-6 px-6 rounded-3xl w-64 my-4   shadow">
            <div className="shadow-xl text-white mx-20 mb-3 absolute rounded-full py-4 px-4  bg-lime-600 left-4 -top-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-12">
              <div className="border-t-2"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl leading-5 font-semibold text-gray-800 lg:mt-5 mt-8">
                    Customer Care
                  </h3>
                  <p className=" text-sm leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                    Our customer care is available 24/7 at{" "}
                    <span className=" font-semibold cursor-pointer text-sm">
                      +8801711-735378
                    </span>{" "}
                    and{" "}
                    <span className=" font-semibold cursor-pointer text-sm">
                      customercare@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  bg-white py-6 px-6 rounded-3xl w-64 my-4  shadow ">
            <div className="shadow-xl text-white mx-20 mb-3 absolute rounded-full py-4 px-4  bg-lime-600 left-4 -top-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm-.97 6.53a.75.75 0 10-1.06-1.06L7.72 9.22a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06l-.97-.97h3.065a1.875 1.875 0 010 3.75H12a.75.75 0 000 1.5h1.125a3.375 3.375 0 100-6.75h-3.064l.97-.97z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-12">
              <div className="border-t-2"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-5 mt-8 ">
                    Return Policy
                  </h3>
                  <p className=" text-sm leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                    Our Return and Replacement policy are easy and flexible.
                    Returns if not satisfied with Products quality, size.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative  bg-white py-6 px-6 rounded-3xl w-64 my-4  shadow ">
            <div className="shadow-xl text-white mx-20 mb-3 absolute rounded-full py-4 px-4  bg-lime-600 left-4 -top-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-12">
              <div className="border-t-2"></div>

              <div className="flex justify-between">
                <div>
                  <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-5 mt-8 ">
                    Payment Gateway
                  </h3>
                  <p className=" text-sm leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                    We receive Bkash, Rocket and masters card. We have cash on
                    delivery system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
