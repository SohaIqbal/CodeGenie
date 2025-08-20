// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function Landingmain() {
// //   const phrases = [
// //     "Highlight issues, get instant solutions, and improve your code with AI."
// //   ];
// //   const [text, setText] = useState("");
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const [loopIndex, setLoopIndex] = useState(0);
// //   const [charIndex, setCharIndex] = useState(0);

// //   useEffect(() => {
// //     const currentPhrase = phrases[loopIndex];

// //     const timeout = setTimeout(() => {
// //       if (!isDeleting) {
// //         setText(currentPhrase.substring(0, charIndex + 1));
// //         setCharIndex((prev) => prev + 1);

// //         if (charIndex + 1 === currentPhrase.length) {
// //           setTimeout(() => setIsDeleting(true), 1500);
// //         }
// //       } else {
// //         setText(currentPhrase.substring(0, charIndex - 1));
// //         setCharIndex((prev) => prev - 1);

// //         if (charIndex === 0) {
// //           setIsDeleting(false);
// //         }
// //       }
// //     }, isDeleting ? 50 : 100);

// //     return () => clearTimeout(timeout);
// //   }, [charIndex, isDeleting, loopIndex]);

// const texts = ["Highlight issues", "Get instant solutions", "And improve your code with AI."]; // Text list
//     const [text, setText] = useState("");
//     const [index, setIndex] = useState(0);
//     const [charIndex, setCharIndex] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);

//     useEffect(() => {
//         const currentText = texts[index];
//         let typingSpeed = isDeleting ? 150 : 100; // Typing speed

//         const type = setTimeout(() => {
//             if (!isDeleting && charIndex < currentText.length) {
//                 // Typing forward
//                 setText((prev) => prev + currentText[charIndex]);
//                 setCharIndex((prev) => prev + 1);
//             } else if (isDeleting && charIndex > 0) {
//                 // Deleting
//                 setText((prev) => prev.slice(0, -1));
//                 setCharIndex((prev) => prev - 1);
//             } else {
//                 // Switch mode when done typing or deleting
//                 setIsDeleting(!isDeleting);

//                 if (!isDeleting) {
//                     setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
//                 } else {
//                     setIndex((prev) => (prev + 1) % texts.length); // Move to next text
//                     setCharIndex(0);
//                 }
//             }
//         }, typingSpeed);

//         return () => clearTimeout(type);
//     }, [charIndex, isDeleting, index, texts]);


   
     

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
//       <motion.h1
//         className="text-4xl font-bold mb-4"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         CodeGeniew
//       </motion.h1>

//       <motion.p
//         className="text-xl font-mono h-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {text}
//         <span className="animate-blink">|</span>
//       </motion.p>

//       <div className="mt-6 flex gap-4">
//         <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition">
//           Login
//         </button>
//         <button className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 transition">
//           Signup
//         </button>
//       </div>

//       <style>{`
//         @keyframes blink {
//           50% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s step-end infinite;
//         }
//       `}</style>
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Landingmain() {
  const texts = [
    "Highlight issues effortlessly.",
    "Get instant solutions.",
    "Improve your code with AI.",
  ]; // List of phrases

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let typingSpeed = isDeleting ? 100 : 80;

    const type = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);

        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(type);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center px-6">
      {/* Header */}
      <motion.h1
        className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CodeGenie
      </motion.h1>

      {/* Typing Animation */}
      <motion.p
        className="text-2xl font-mono mt-4 h-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
        <span className="animate-blink text-blue-400">|</span>
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex gap-6">
        
        <a href="/login">
        <button className="px-6 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg">
          Get Started
        </button>
        </a>
         

        
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CodeGenie. All rights reserved.
      </footer>

      {/* Cursor Blinking Animation */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
