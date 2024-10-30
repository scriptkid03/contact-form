'use client';
// import Image from "next/image";

// export default function Home() {

//   const checked = false;

//   return (
//     <main className="flex flex-col justify-center items-center h-screen w-screen bg-green200">
//       <div className="flex flex-col bg-white p-10 rounded-2xl w-[40%] h-fit gap-8 text-green-950">
//         <h1 className="font-semibold text-3xl ">Contact Us</h1>
//         <div className="w-full flex gap-5 justify-between">
//           <div className="flex flex-col w-full">
//             <label htmlFor="firstName">
//               First Name <span className="text-green600">*</span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="border border-gray-500 p-2 rounded-lg hover:border-green600 outline-none focus:border-green600"
//             />
//           </div>
//           <div className="flex flex-col w-full">
//             <label htmlFor="lastName">
//               Last Name <span className="text-green600">*</span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="border border-gray-500 p-2 rounded-lg hover:border-green600 outline-none focus:border-green600"
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="email">
//             Email Address <span className="text-green600">*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="border border-gray-500 p-2 rounded-lg w-full hover:border-green600 outline-none focus:border-green600"
//           />
//         </div>
//         <div className="w-full flex gap-5 justify-between">
//           <div className="flex flex-col w-full">
//             <label htmlFor="queryType">
//               Query Type <span className="text-green600">*</span>
//             </label>
//             <div className="flex gap-4">
//               <div className="flex flex-row-reverse border w-full h-fit gap-5 justify-end items-center px-6 py-3 rounded-lg hover:cursor-pointer">
//                 <label htmlFor="generalEnquiry" className="hover:cursor-pointer"> General Enquiry</label>
//                 <Image
//                   src={"/images/icon-radio-selected.svg"}
//                   width={20}
//                   height={20}
//                   alt="checked icon"
//                   className={checked ? `block` : `hidden`}
//                 />
//                 <input type="checkbox" name="generalEnquiry" className="rounded-full w-4 h-4" />
//               </div>
//               <div className="flex flex-row-reverse border w-full h-fit gap-5 justify-end items-center px-6 py-3 rounded-lg hover:cursor-pointer">
//                 <label htmlFor="supportRequest" className="hover:cursor-pointer"> Support Request</label>
//                 <input type="checkbox" name="generalEnquiry" className="rounded-full w-4 h-4" />
//               </div>
//             </div>

//           </div>
//         </div>
//         <div>
//           <label htmlFor="message">
//             Message <span className="text-green600">*</span>
//           </label>
//           <textarea
//             id="message"
//             className="border border-gray-500 p-2 rounded-lg w-full hover:border-green600 outline-none focus:border-green600"
//           ></textarea>
//         </div>
//         <div className="flex gap-4 items-center hover:cursor-pointer">
//           <input type="checkbox" name="consent" className="h-4 w-4" />
//           <span>
//             I consent to being contacted by the team
//             <span className="text-green600"> *</span>
//           </span>
//         </div>
//         <div className="flex bg-green600 text-white p-4 justify-center rounded-lg">
//           <input type="button" value="Submit" />
//         </div>
//       </div>
//     </main>
//   );
// }


import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState({
    generalEnquiry: false,
    supportRequest: false,
    consent: false,
  });

  const handleCheckboxChange = (name: keyof typeof isChecked) => {
    setIsChecked((prevState) => ({
      ...prevState,
      generalEnquiry: name === "generalEnquiry" ? !prevState.generalEnquiry : false,
      supportRequest: name === "supportRequest" ? !prevState.supportRequest : false,
      consent: name === "consent" ? !prevState.consent : false,
    }));
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen bg-green200">
      <div className="flex flex-col bg-white p-10 rounded-2xl w-[40%] h-fit gap-8 text-green-950">
        <h1 className="font-semibold text-3xl">Contact Us</h1>

        <div className="w-full flex gap-5 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName">
              First Name <span className="text-green600">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="border border-gray-500 p-2 rounded-lg hover:border-green600 outline-none focus:border-green600"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName">
              Last Name <span className="text-green600">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="border border-gray-500 p-2 rounded-lg hover:border-green600 outline-none focus:border-green600"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">
            Email Address <span className="text-green600">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-500 p-2 rounded-lg w-full hover:border-green600 outline-none focus:border-green600"
            required
          />
        </div>

        <div className="w-full flex gap-5 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="queryType">
              Query Type <span className="text-green600">*</span>
            </label>
            <div className="flex gap-4">
              {/* Radio for General Enquiry */}
              <div
                className={`flex flex-row-reverse border w-full h-fit gap-5 justify-end items-center px-6 py-3 rounded-lg hover:cursor-pointer ${isChecked.generalEnquiry ? 'bg-green200 border-green600' : ''}`}
                onClick={() => handleCheckboxChange("generalEnquiry")}
              >
                <label htmlFor="generalEnquiry" className="hover:cursor-pointer">
                  General Enquiry
                </label>

                {/* Conditional rendering of SVG icon or radio button */}
                {isChecked.generalEnquiry ? (
                  <Image
                    src={"/images/icon-radio-selected.svg"}
                    width={20}
                    height={20}
                    alt="checked radio icon"
                  />
                ) : (
                  <span className="w-5 h-5 rounded-full border-2 border-gray-400"></span>
                )}

                <input
                  type="radio"
                  id="generalEnquiry"
                  name="queryType"
                  className="hidden"
                  checked={isChecked.generalEnquiry}
                  onChange={() => handleCheckboxChange("generalEnquiry")}
                />
              </div>

              {/* Radio for Support Request */}
              <div
                className={`flex flex-row-reverse border w-full h-fit gap-5 justify-end items-center px-6 py-3 rounded-lg hover:cursor-pointer ${isChecked.supportRequest ? 'bg-green200 border-green600' : ''}`}
                onClick={() => handleCheckboxChange("supportRequest")}
              >
                <label htmlFor="supportRequest" className="hover:cursor-pointer">
                  Support Request
                </label>

                {/* Conditional rendering of SVG icon or radio button */}
                {isChecked.supportRequest ? (
                  <Image
                    src={"/images/icon-radio-selected.svg"}
                    width={20}
                    height={20}
                    alt="checked radio icon"
                  />
                ) : (
                  <span className="w-5 h-5 rounded-full border-2 border-gray-400"></span>
                )}

                <input
                  type="radio"
                  id="supportRequest"
                  name="queryType"
                  className="hidden"
                  checked={isChecked.supportRequest}
                  onChange={() => handleCheckboxChange("supportRequest")}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message">
            Message <span className="text-green600">*</span>
          </label>
          <textarea
            id="message"
            className="border border-gray-500 p-2 rounded-lg w-full hover:border-green600 outline-none focus:border-green600"
            required
          ></textarea>
        </div>

        <div
          className="flex gap-4 items-center hover:cursor-pointer"
          onClick={() => handleCheckboxChange("consent")}
        >
          <div className="flex justify-center items-center w-4 h-4 border-2 rounded border-gray-500">
            {isChecked.consent && (
              <Image
                src={"/images/icon-checkbox-check.svg"}
                width={20}
                height={20}
                alt="checked icon"
              />
            )}
          </div>
          <label htmlFor="consent">
            I consent to being contacted by the team<span className="text-green600"> *</span>
          </label>
        </div>

        <div className="flex bg-green600 text-white p-4 justify-center rounded-lg cursor-pointer">
          <button type="submit">Submit</button>
        </div>
      </div>
    </main>
  );
}
