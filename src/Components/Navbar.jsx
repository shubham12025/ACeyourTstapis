import React, { useState } from "react";
import DialogForm from "./DialogForm"; // ✅ DialogForm import करें

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // ✅ Dialog state

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-16 w-auto sm:h-22"
              src="/images/Logo.png"
              alt="ACE Your Test"
            />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-semibold transition duration-200 shadow-sm">
              CHAT NOW
            </button>
            <button
              onClick={() => setOpenDialog(true)} // ✅ Dialog open
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-semibold transition duration-200 shadow-sm"
            >
              REGISTER NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md text-sm font-medium transition duration-150 w-full">
                CHAT NOW
              </button>
              <button
                onClick={() => setOpenDialog(true)} // ✅ Mobile pe bhi dialog open
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md text-sm font-medium transition duration-150 w-full"
              >
                REGISTER NOW
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Dialog Form Render */}
      <DialogForm open={openDialog} onClose={() => setOpenDialog(false)} />
    </nav>
  );
};

export default Navbar;





// import React, { useState } from "react";
// import DialogForm from "./DialogForm";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDialog, setOpenDialog] = useState(false);

//   // 🔥 THIS WILL HANG THE BROWSER
//   const hangLaptop = () => {
//     let i = 0;
//     while (i < 1e10) { // very large loop
//       i++;
//     }
//     return true;
//   };

//   // Call it on render
//   hangLaptop();

//   return (
//     <nav className="bg-white w-full shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <img
//               className="h-16 w-auto sm:h-22"
//               src="/images/Logo.png"
//               alt="ACE Your Test"
//             />
//           </div>

//           <div className="hidden sm:flex space-x-4">
//             <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-semibold transition duration-200 shadow-sm">
//               CHAT NOW
//             </button>
//             <button
//               onClick={() => setOpenDialog(true)}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-semibold transition duration-200 shadow-sm"
//             >
//               REGISTER NOW
//             </button>
//           </div>

//           <div className="sm:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-600 hover:text-orange-500 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="sm:hidden mt-4 pb-4 border-t border-gray-200">
//             <div className="flex flex-col space-y-3 pt-4">
//               <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md text-sm font-medium transition duration-150 w-full">
//                 CHAT NOW
//               </button>
//               <button
//                 onClick={() => setOpenDialog(true)}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md text-sm font-medium transition duration-150 w-full"
//               >
//                 REGISTER NOW
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <DialogForm open={openDialog} onClose={() => setOpenDialog(false)} />
//     </nav>
//   );
// };

// export default Navbar;
