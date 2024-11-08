// import React from "react";
// import style from "./index.module.css";
// import copy from "../../asset/FrontPage/img/copy.png";
// import rotate from "../../asset/FrontPage/img/rotate.png";
// import { Link } from "react-router-dom";

// const FrontPage: React.FC = () => {
//     return (
//         <div>
//             <div className="font-custom-font">
//                 <div
//                     data-testid="main-container"
//                     className="mx-auto my-[3rem] lg:my-[5rem] w-[70%] h-[40rem] rounded-[2rem] bg-white flex flex-col "
//                 >
//                     <p className="uppercase text-center pt-4 lg:text-[3.5rem] md:text-[2rem] sm:text-[1.5rem]  font-black font-custom-font">
//                         Password Gen 🔑
//                     </p>
                    
//                     <div className="flex items-center justify-center">
//                     <p
//                         className={`text-grey-shade-color text-[8px] lg:text-[22px] text-center  md:text-[15px] sm:text-[12px] ${style.typingEffect}`}
//                     >
//                         Create a strong password that no one can hack!
//                     </p>
//                     </div>

                   
//                         <form action="">
//                         <div className="flex flex-row lg:border  border-solid border-custom-border-grey justify-between p-3 lg:w-[48rem] rounded-[7px] mx-auto mt-8">
//                         <p className="font-semibold font-custom-font lg:text-[20px]" >Alphabets (A-Za-z)</p>
//                         <input type="checkbox" name="" id="" className="lg:w-[20px] lg:h-[20px] rounded-[5px] cursor-pointer" />
//                         </div>

//                         <div className="flex flex-row lg:border  border-solid border-custom-border-grey justify-between p-3 lg:w-[48rem] rounded-[7px] mx-auto lg:mt-8">
//                         <p className="font-semibold font-custom-font lg:text-[20px]" >Numbers (0-9)</p>
//                         <input type="checkbox" name="" id="" className="lg:w-[20px] lg:h-[20px] rounded-[5px] cursor-pointer" />
//                         </div>


//                         <div className="flex flex-row lg:border  border-solid border-custom-border-grey justify-between p-3 lg:w-[48rem] rounded-[7px] mx-auto lg:mt-8">
//                         <p className="font-semibold font-custom-font lg:text-[20px]" >Symbols (&@#$%)</p>
//                         <input type="checkbox" name="" id="" className="lg:w-[20px] lg:h-[20px] rounded-[5px] cursor-pointer" />
//                         </div>
 
//                         <div className="lg:border border-solid border-custom-border-grey lg:w-[48rem] rounded-[7px] mx-auto lg:mt-8 lg:text-[20px]">
//                         <input 
//                             type="text"  
//                             name="passwordLength" 
//                             id="passwordLength" 
//                             placeholder="Input password length (4-50)" 
//                             className="w-full h-[3rem] outline-none rounded-[5px] pl-4" 
//                         />
//                         </div>


//                         <div className="flex flex-row justify-between lg:mt-8 px-[121px]">


//                             <div className="bg-custom-blue-color w-[40rem] h-[3rem] rounded-[5px]">

//                             </div>
                             

//                              <div className="flex flex-row gap-5">

//                                     <div className="lg:border border-solid border-custom-border-grey p-2 rounded-[8px] cursor-pointer">
//                                         <img src={rotate} alt="rotate"/>
//                                     </div>

//                                     <div className="lg:border border-solid border-custom-border-grey p-2 rounded-[8px] cursor-pointer">
//                                     <img src={copy} alt="copy"/>
//                                     </div>

//                              </div>


//                         </div>
//                         </form>
//                         <div className="flex justify-end mt-5 pr-[8rem] cursor-pointer">
//                             {/* <Link to={"/history"}>Password Generated History</Link> */}
          
//                         </div>
                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FrontPage;



import React, { useState } from "react";
import style from "./index.module.css";
import copy from "../../asset/FrontPage/img/copy.png";
import rotate from "../../asset/FrontPage/img/rotate.png";
import { Link } from "react-router-dom";
import axios from "axios";

const FrontPage: React.FC = () => {
    const [passwordLength, setPasswordLength] = useState('');
    const [password, setPassword] = useState('');
    const [isAlphabet, setIsAlphabeth] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isSymbol, setIsSymbol] = useState(false);

    const handleCheckboxChange = (e:any) => {
        const { name, checked } = e.target;
    
        if (name === 'alphabet') setIsAlphabeth(checked);
        if (name === 'number') setIsNumber(checked);
        if (name === 'symbol') setIsSymbol(checked);
      };

      const handleLengthChange = (e:any) => {
        setPasswordLength(e.target.value);
      };

   

      const sendData = async (data:any, url:string) => {
        try {
          const response = await axios.post(url, data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
         console.log(response)
         const result = response.data.body.password

         if(response.status === 201){
                setPassword(result);
                console.log("okay")
         }else{

         }
       
        //   if (response.status === 200) {
        //     setPassword("p")
        //     console.log('Success:', response.data);
        //   } else {
        //     throw new Error('Network response was not ok');
        //   }
        } catch (error) {
          console.error('Error sending data:', error);
        
        }
      };


  const handleGeneratePassword = () => {
    const data = { length: passwordLength };

  
    if (isAlphabet && isNumber && isSymbol) {
      sendData(data, "https://password-generator-java.onrender.com/api/v1/passwordGen/allCharacter");
    } else if (isAlphabet && isNumber) {
      sendData(data, 'https://password-generator-java.onrender.com/api/v1/passwordGen/alphaNum');
    } else if (isAlphabet && isSymbol) {
      sendData(data, 'https://password-generator-java.onrender.com/api/v1/passwordGen/alphaSymbol');
    } else if (isNumber && isSymbol) {
      sendData(data, 'https://password-generator-java.onrender.com/api/v1/passwordGen/numSymbol');
    } else if (isAlphabet) {
      sendData(data, 'https://password-generator-java.onrender.com/api/v1/passwordGen/alphabet');
    } else if (isNumber) {
      sendData(data, 'https://password-generator-java.onrender.com/api/v1/passwordGen/numbers');
    } else if (isSymbol) {
      sendData(data, 'https://password-generator-java.onrender.com/api/v1/passwordGen/specialCharacters');
    }
  };

      



    return (
        <div>
            <div className="font-custom-font">
                <div
                    data-testid="main-container"
                    className="mx-auto my-[3rem] lg:my-[5rem] w-[70%] h-[40rem] rounded-[2rem] bg-white flex flex-col "
                >
                    <p className="uppercase text-center pt-4 lg:text-[3.5rem] md:text-[2rem] sm:text-[1.5rem]  font-black font-custom-font">
                        Password Gen 🔑
                    </p>
                    
                    <div className="flex items-center justify-center">
                    <p
                        className={`text-grey-shade-color text-[8px] lg:text-[22px] text-center  md:text-[15px] sm:text-[12px] ${style.typingEffect}`}
                    >
                        Create a strong password that no one can hack!
                    </p>
                    </div>

                   
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-row lg:border  border-solid border-custom-border-grey justify-between p-3 lg:w-[48rem] rounded-[7px] mx-auto mt-8">
                        <p className="font-semibold font-custom-font lg:text-[20px]" >Alphabets (A-Za-z)</p>
                        <input type="checkbox" name="alphabet" checked={isAlphabet} onChange={handleCheckboxChange} id="" className="lg:w-[20px] lg:h-[20px] rounded-[5px] cursor-pointer" />
                        </div>

                        <div className="flex flex-row lg:border  border-solid border-custom-border-grey justify-between p-3 lg:w-[48rem] rounded-[7px] mx-auto lg:mt-8">
                        <p className="font-semibold font-custom-font lg:text-[20px]" >Numbers (0-9)</p>
                        <input type="checkbox" name="number" checked={isNumber} onChange={handleCheckboxChange} id="" className="lg:w-[20px] lg:h-[20px] rounded-[5px] cursor-pointer" />
                        </div>


                        <div className="flex flex-row lg:border  border-solid border-custom-border-grey justify-between p-3 lg:w-[48rem] rounded-[7px] mx-auto lg:mt-8">
                        <p className="font-semibold font-custom-font lg:text-[20px]" >Symbols (&@#$%)</p>
                        <input type="checkbox" name="symbol" checked={isSymbol} onChange={handleCheckboxChange} id="" className="lg:w-[20px] lg:h-[20px] rounded-[5px] cursor-pointer" />
                        </div>
 
                        <div className="lg:border border-solid border-custom-border-grey lg:w-[48rem] rounded-[7px] mx-auto lg:mt-8 lg:text-[20px]">
                        <input 
                            type="text"  
                            name="passwordLength" 
                            id="passwordLength" 
                            value={passwordLength}
                            onChange={handleLengthChange}
                            placeholder="Input password length (4-40)" 
                            className="w-full h-[3rem] outline-none rounded-[5px] pl-4" 
                        />
                        </div>


                        <div className="flex flex-row justify-between lg:mt-8 px-[121px]">


                            <div className="bg-custom-blue-color w-[40rem] h-[3rem] rounded-[5px]">
                                        {password && <p className="text-center mt-3">{password}</p>}
                            </div>
                             

                             <div className="flex flex-row gap-5">

                                    <div className="lg:border border-solid border-custom-border-grey p-2 rounded-[8px] cursor-pointer" onClick={handleGeneratePassword}>
                                        <img src={rotate} alt="rotate"/>
                                    </div>

                                    <div className="lg:border border-solid border-custom-border-grey p-2 rounded-[8px] cursor-pointer">
                                    <img src={copy} alt="copy"/>
                                    </div>

                             </div>


                        </div>
                        </form>
                        <div className="flex justify-end mt-5 pr-[8rem] cursor-pointer">
                            {/* <Link to={"/history"}>Password Generated History</Link> */}
          
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FrontPage;
