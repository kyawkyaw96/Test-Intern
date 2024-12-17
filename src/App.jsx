import { useState } from "react";
import "./App.css";

function App() {
  const [activeSlide, setActiveSlide] = useState(1);
  const handleClick = (slide) => {
    setActiveSlide(slide);
  };
  const [activeSlide2, setActiveSlide2] = useState(1);
  const handleClick2 = (slide) => {
    setActiveSlide2(slide);
  };
  return (
    <div className=" font-roboto static ">
      <div className=" md:static xxl:static smm:relative w-full md:h-full xxl:h-full smm:h-[550px] ">
        <img
          src="public/footballer 1.png"
          className=" absolute z-30 smm:top-[70px] smm:left-[70px] smm:w-[200px] smm:h-[281px]  xxl:top-[35px] xxl:left-[175px] xxl:w-[678px] xxl:h-[950px] md:top-[121px] md:left-[-161px] md:w-[498px] md:h-[699px]"
          alt=""
        />
        {/*start slag in md */}
        <div className="md:block xxl:hidden smm:hidden absolute z-10 md:w-[209.29px] md:h-[233.72px] md:mt-[139.98px] md:ml-[28.91px] ">
          <svg
            width="214"
            height="238"
            viewBox="0 0 214 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.91016 235.699L211.202 1.9823"
              stroke="#936EEA"
              strokeWidth="5"
            />
          </svg>
        </div>
        {/*end slag in md */}
        {/*start slag in smm */}
        <div className=" smm:block md:hidden xxl:hidden absolute z-10 w-[178.89px] h-[197.23px] mt-[82.91px] ml-[68.36px]  ">
          <svg
            width="178.89"
            height="197.23"
            viewBox="0 0 214 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.91016 235.699L211.202 1.9823"
              stroke="#936EEA"
              strokeWidth="3"
            />
          </svg>
        </div>
        {/*end slag in smm */}
        {/*start plus sign in md */}
        <div className=" xxl:hidden md:block absolute z-10 md:ml-[29px] md:mt-[102px] smm:ml-[52px] smm:mt-[81px] opacity-30">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_1_155"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="17"
              fill="#9173E6"
            >
              <rect fill="white" width="17" height="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              fill="#9173E6"
            />
            <path
              d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
              fill="#9173E6"
              mask="url(#path-1-outside-1_1_155)"
            />
          </svg>
        </div>
        <div className=" xxl:hidden md:block absolute z-10 md:ml-[51px] md:mt-[111px] smm:ml-[74px] smm:mt-[90px]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_1_155"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="17"
              fill="black"
            >
              <rect fill="white" width="17" height="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              fill="#5C37B7"
            />
            <path
              d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
              fill="#9173E6"
              mask="url(#path-1-outside-1_1_155)"
            />
          </svg>
        </div>
        {/*end plus sign in md */}
        {/* smm header start */}
        <h1 className=" text-[#E7E7E7] text-[50px] smm:h-[296px]  smm:pl-[18px] leading-[58.59px]  xxl:hidden md:hidden smm:block">
          ATHLETS
        </h1>
        {/* smm header end*/}

        {/* first card div start */}
        <div className="relative w-full  ">
          <div
            className={`xxl:relative md:relative smm:absolute xxl:h-[350px] md:h-[380px] smm:h-[286px] transition-transform transform ${
              activeSlide === 1 ? "smm:translate-x-0" : "smm:translate-x-full"
            } md:transform-none xxl:transform-none translate-x-0  w-full md:bg-white xxl:bg-white smm:bg-[#F5F4F9]`}
          >
            <div className=" xxl:w-1/2 md:w-3/5 h-full flex flex-col justify-center xxl:ml-auto md:ml-[291px] smm:mx-[18px] ">
              <h1 className=" text-[#E7E7E7] text-[90px] md:pt-[81px] leading-[105.47px] xxl:py-8 xxl:block md:block smm:hidden">
                ATHLETS
              </h1>
              <div className=" flex flex-row xxl:items-center gap-2 xxl:py-5 md:pt-11 ">
                <div className="">
                  <h4 className=" text-lg">01</h4>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="22" height="5" rx="2.5" fill="#603EBE" />
                  </svg>
                </div>
                <h2 className=" text-[#C2C2C2] xxl:text-4xl md:text-4xl smm:text-[28px] smm:leading-[32.8px] md:leading-[42.9px] xxl:leading-[42.19px] tracking-wide">
                  CONNECTION
                </h2>
              </div>
              <h3 className=" xxl:text-xl md:text-lg md:pt-5 xxl:mb-4">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </h3>
            </div>
          </div>
          <div
            className={`xxl:relative md:relative smm:absolute xxl:h-[256px] md:h-[235px] smm:h-[286px] transition-transform transform ${
              activeSlide === 2 ? "translate-x-0" : "translate-x-full"
            } md:transform-none xxl:transform-none  bg-[#F5F4F9] `}
          >
            <div className=" xxl:w-1/2 md:w-3/5 h-full flex flex-col justify-center gap-4 md:ml-[291px] xxl:ml-auto smm:mx-[18px] ">
              <div className="  flex flex-row xxl:items-center gap-2 xxl:pt-5 md:pt-11 ">
                <div className="">
                  <h4 className=" text-lg">02</h4>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="22" height="5" rx="2.5" fill="#603EBE" />
                  </svg>
                </div>
                <h2 className=" text-[#C2C2C2] xxl:text-4xl md:text-4xl smm:text-[28px] smm:leading-[32.8px] md:leading-[42.9px] xxl:leading-[42.19px]">
                  COLLABORATION
                </h2>
              </div>
              <h3 className=" xxl:text-xl xxl:w-3/4 md:pr-2 md:text-lg smm:text-[15px] smm:leading-[17.58px]">
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </h3>
            </div>
          </div>
          <div
            className={`xxl:relative md:relative smm:absolute  xxl:h-[297px] md:h-[207px] smm:h-[286px] transition-transform transform ${
              activeSlide === 3 ? "translate-x-0" : "translate-x-full"
            } md:transform-none xxl:transform-none  smm:bg-[#F5F4F9] md:bg-[#5E3DB3] xxl:bg-[#5E3DB3]`}
          >
            <div className=" xxl:w-1/2 md:w-3/5 h-full flex flex-col md:pb-8 xxl:pb-0 justify-center gap-4 md:ml-[291px] xxl:ml-auto smm:mx-[18px]">
              <div className="  flex flex-row xxl:items-center gap-2 xxl:pt-5 md:pt-11 ">
                <div className="">
                  <h4 className=" text-lg">03</h4>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#5E3DB3] md:fill-white lg:fill-white"
                  >
                    <rect width="22" height="5" rx="2.5" />
                  </svg>
                </div>
                <h2 className=" text-[#C2C2C2] xxl:text-4xl md:text-4xl smm:text-[28px] smm:leading-[32.8px] md:leading-[42.9px] xxl:leading-[42.19px]">
                  GROWTH
                </h2>
              </div>
              <h3 className="  xxl:text-xl xxl:w-3/4 md:pr-2 md:text-lg md:text-white xxl:text-white smm:text-black smm:text-[15px] smm:leading-[17.58px]">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </h3>
            </div>
          </div>
        </div>
        {/* first card div end */}
      </div>
      {/* btn div start */}
      <div className="space-x-4 smm:relative flex md:hidden xxl:hidden  justify-center items-center w-full">
        <button
          onClick={() => handleClick(1)}
          className=" w-[10px] h-[10px] rounded-full bg-blue-900"
          // onClick={showDiv(1)}
        ></button>
        <button
          onClick={() => handleClick(2)}
          className=" w-[10px] h-[10px] rounded-full bg-blue-900"
          // onClick={showDiv(2)}
        ></button>

        <button
          onClick={() => handleClick(3)}
          className=" w-[10px] h-[10px] rounded-full bg-blue-900"
          // onClick={showDiv(1)}
        ></button>
      </div>
      {/* btn div end */}

      {/* second div */}
      {/* baseball image */}
      <div className="md:static xxl:static smm:relative w-full md:h-full xxl:h-full smm:h-[550px] ">
        <img
          src="public/basketball.png"
          className="smm:hidden md:block xxl:block xxl:w-[991px] xxl:h-[815px] xxl:ml-[804px] xxl:pt-0  absolute z-20 md:w-[691px] md:h-[568px] md:ml-[331px] md:pt-[28px]"
          alt=""
        />
        {/* rectangles */}
        {/*start slag in */}
        <div className=" absolute smm:hidden md:block xxl:block  z-10 xxl:mt-[81px] xxl:ml-[1464.89px] md:ml-[490px] md:mt-[175px] ">
          <svg
            width="271"
            height="316"
            viewBox="0 0 271 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89062 313.16L268.516 2"
              stroke="#936EEA"
              strokeWidth="6"
            />
          </svg>
        </div>
        <div className=" absolute xxl:block md:hidden smm:hidden z-10 xxl:w-[262.52px] xxl:h-[304.12px] xxl:mt-[457.84px] xxl:ml-[989.13px]">
          <svg
            width="271"
            height="316"
            viewBox="0 0 271 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.89062 313.16L268.516 2"
              stroke="#936EEA"
              strokeWidth="6"
            />
          </svg>
        </div>
        {/*stop slag in  */}
        {/* smm second photo start */}
        <img
          src="public/Group 7.png"
          className=" absolute smm:block md:hidden xxl:hidden ml-1 mt-[120px] z-10"
          alt=""
        />
        {/* smm second photo end */}

        {/* stars in */}
        <div className=" absolute xxl:block md:block smm:hidden z-10 xxl:ml-[1098px] xxl:mt-[131px] md:ml-[533px] md:mt-[100px]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_1_155"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="17"
              fill="black"
            >
              <rect fill="white" width="17" height="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              fill="#5C37B7"
            />
            <path
              d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
              fill="#9173E6"
              mask="url(#path-1-outside-1_1_155)"
            />
          </svg>
        </div>
        <div className=" absolute xxl:block md:block smm:hidden z-10 xxl:ml-[1120px] opacity-30 xxl:mt-[148px] md:ml-[555px] md:mt-[117px]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_1_155"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="17"
              fill="black"
            >
              <rect fill="white" width="17" height="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              fill="#5C37B7"
            />
            <path
              d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
              fill="#9173E6"
              mask="url(#path-1-outside-1_1_155)"
            />
          </svg>
        </div>
        <div className=" absolute xxl:block md:hidden smm:hidden z-10 xxl:ml-[1578px] xxl:mt-[401px]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_1_155"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="17"
              fill="black"
            >
              <rect fill="white" width="17" height="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
              fill="#5C37B7"
            />
            <path
              d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
              fill="#9173E6"
              mask="url(#path-1-outside-1_1_155)"
            />
          </svg>
        </div>
        {/* stars in */}
        {/* rectangles */}
        {/* smm header */}
        <h1 className=" text-[#E7E7E7] text-[50px] smm:h-[340px]  smm:pl-[18px] pt-9 leading-[58.59px]  xxl:hidden md:hidden smm:block">
          PLAYERS
        </h1>
        {/* smm header */}
        <div className="relative w-full">
          <div
            className={` xxl:h-[480px] md:h-[335px] smm:absolute xxl:relative md:relative w-full bg-white smm:h-[238px] transition-transform transform ${
              activeSlide2 === 1 ? "smm:translate-x-0" : "smm:translate-x-full"
            } md:transform-none xxl:transform-none translate-x-0  w-full md:bg-white xxl:bg-white smm:bg-[#F5F4F9]`}
          >
            <div className=" xxl:w-1/2 mr-auto xxl:ml-[322px] h-full md:ml-[33px] flex flex-col justify-center smm:mx-[18px]">
              <h1 className=" text-[#E7E7E7] text-[90px] leading-[105.47px] xxl:pt-[124px] md:pt-[47px] xxl:block md:block smm:hidden">
                PLAYERS
              </h1>
              <div className=" flex flex-row xxl:items-center gap-2 xxl:pt-[68px] md:pt-[34px]">
                <div className="">
                  <h4 className=" text-lg">01</h4>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="22" height="5" rx="2.5" fill="#603EBE" />
                  </svg>
                </div>
                <h2 className=" text-[#C2C2C2] xxl:text-4xl md:text-4xl smm:text-[28px] smm:leading-[32.8px] md:leading-[42.9px] xxl:leading-[42.19px]">
                  CONNECTION
                </h2>
              </div>
              {/* xxl:text-xl md:text-lg xxl:pt-3 md:pt-5 */}
              <h3 className=" xxl:text-xl md:text-lg md:w-3/5 xxl:w-3/5 w-full md:leading-[28px] xxl:leading-[42.19px] xxl:pt-[21px] md:pt-[5px] xxl:pb-[56px]">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </h3>
            </div>
          </div>
          <div
            className={` xxl:h-[245px] md:h-[225px] smm:absolute xxl:relative md:relative w-full smm:h-[238px] transition-transform transform ${
              activeSlide2 === 2 ? "smm:translate-x-0" : "smm:translate-x-full"
            } md:transform-none xxl:transform-none translate-x-0  w-full bg-[#F5F4F9] `}
          >
            <div className=" xxl:w-1/2 md:w-1/2 h-full mr-auto xxl:ml-[322px] md:ml-[33px] flex flex-col justify-center smm:mx-[18px] gap-5">
              <div className=" flex flex-row xxl:items-center gap-2">
                <div className="">
                  <h4 className=" text-lg">02</h4>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="22" height="5" rx="2.5" fill="#603EBE" />
                  </svg>
                </div>
                <h2 className=" text-[#C2C2C2] xxl:text-4xl md:text-4xl smm:text-[28px] smm:leading-[32.8px]md:leading-[42.9px] xxl:leading-[42.19px]">
                  COLLABORATION
                </h2>
              </div>
              <h3 className=" xxl:text-xl md:text-lg xxl:w-3/4 md:w-full smm:w-full">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </h3>
            </div>
          </div>
          <div
            className={` xxl:h-[268px] md:h-[235px] smm:absolute xxl:relative md:relative w-full bg-white smm:h-[238px] transition-transform transform ${
              activeSlide2 === 3 ? "smm:translate-x-0" : "smm:translate-x-full"
            } md:transform-none xxl:transform-none translate-x-0  w-full md:bg-[#090C35] xxl:bg-[#090C35] smm:bg-[#F5F4F9]`}
          >
            <div className=" xxl:w-1/2 h-full mr-auto xxl:ml-[322px] md:ml-[33px] flex flex-col justify-center smm:mx-[18px] gap-5">
              <div className=" flex flex-row xxl:items-center gap-2">
                <div className="">
                  <h4 className=" text-lg text-[#8F6BE8]">03</h4>
                  <svg
                    width="22"
                    height="5"
                    viewBox="0 0 22 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#5E3DB3] md:fill-white lg:fill-white"
                  >
                    <rect width="22" height="5" rx="2.5" />
                  </svg>
                </div>
                <h2 className=" text-[#C2C2C2] xxl:text-4xl md:text-4xl smm:text-[28px] smm:leading-[32.8px] md:leading-[42.9px] xxl:leading-[42.19px]">
                  GROWTH
                </h2>
              </div>
              <h3 className=" xxl:text-xl md:text-lg md:w-3/5 xxl:w-3/5 w-full md:text-white xxl:text-white smm:text-black">
                Save your time, recruit proper athlets for your team.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* btn div start */}
      <div className="space-x-4 smm:relative flex md:hidden xxl:hidden  justify-center items-center w-full">
        <button
          onClick={() => handleClick2(1)}
          className=" w-[10px] h-[10px] rounded-full bg-blue-900"
          // onClick={showDiv(1)}
        ></button>
        <button
          onClick={() => handleClick2(2)}
          className=" w-[10px] h-[10px] rounded-full bg-blue-900"
          // onClick={showDiv(2)}
        ></button>

        <button
          onClick={() => handleClick2(3)}
          className=" w-[10px] h-[10px] rounded-full bg-blue-900"
          // onClick={showDiv(1)}
        ></button>
      </div>
      {/* btn div end */}
    </div>
  );
}

export default App;
