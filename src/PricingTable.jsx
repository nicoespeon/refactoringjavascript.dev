import { useState } from "react";
import CheckIcon from "@heroicons/react/solid/CheckIcon";
import ArrowRightIcon from "@heroicons/react/solid/ArrowRightIcon";
import HeartIcon from "@heroicons/react/outline/HeartIcon";

const DiscountArrow = () => (
  <div className="absolute hidden md:block -top-6 -left-24">
    <div className="flex flex-col items-center justify-center">
      <p className="font-normal font-dm-sans"> Save 20% </p>
      <img src="/assets/pricing-tables/arrow.svg" alt="" />
    </div>
  </div>
);

const PricingTab = ({ isYearly, setIsYearly }) => (
  <div className="rounded-l-full rounded-r-full bg-slate-headline bg-opacity-5 p-[5px] max-w-[260px] m-auto relative">
    <div className="flex justify-center">
      <DiscountArrow />
      <div
        onClick={() => setIsYearly(true)}
        className={`w-full cursor-pointer px-8 py-3 transition-all duration-300 rounded-l-full rounded-r-full ${
          isYearly ? "bg-white" : ""
        }`}
      >
        <p> Yearly </p>
      </div>
      <div
        onClick={() => setIsYearly(false)}
        className={`w-full cursor-pointer px-8 py-3 transition-all duration-300 rounded-l-full rounded-r-full ${
          isYearly ? "" : "bg-white"
        }`}
      >
        <p> Monthly </p>
      </div>
    </div>
  </div>
);

const CenterGrid = ({ isYearly }) => (
  <div className="border-[3px] w-full md:min-w-[420px] bg-white relative border-slate-blue p-[32px] md:p-[60px] rounded-3xl">
    <span className="absolute top-6 right-6 text-xs font-bold text-white uppercase bg-slate-orange px-[18px] py-[6px] rounded-full">
      Popular
    </span>
    <div>
      <div className="flex text-left">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
          <img src="/assets/pricing-tables/growth.svg" alt="Growth" />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-medium"> Growth </h4>
          <p className="mt-1 text-desktop-paragraph text-slate-body">
            {isYearly ? "$240/year" : "$24/mo"}
          </p>
        </div>
      </div>
      <hr className="mt-6" />
      <div>
        <ul>
          <li className="flex items-center mt-6">
            <CheckIcon className="w-4 h-4 text-slate-blue" />
            <p className="ml-4">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex items-center mt-4">
            <CheckIcon className="w-4 h-4 text-slate-blue" />
            <p className="ml-4">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex items-center mt-4">
            <CheckIcon className="w-4 h-4 text-slate-blue opacity-20" />
            <p className="ml-4 opacity-20">Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="flex items-center justify-center w-full py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
          <span>Choose Plan</span>
          <ArrowRightIcon className="w-4 ml-3" />
        </button>
      </div>
    </div>
  </div>
);

const SmallerLeftGrid = ({ isYearly }) => (
  <div className="bg-white w-full relative p-[32px] rounded-3xl">
    <div>
      <div className="flex">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
          <img src="/assets/pricing-tables/growth.svg" alt="Growth" />
        </div>
        <div className="ml-4 text-left">
          <h4 className="text-xl font-medium"> Starter </h4>
          <p className="mt-1 text-desktop-paragraph text-slate-body">
            {isYearly ? "$160/year" : "$16/mo"}
          </p>
        </div>
      </div>
      <hr className="mt-6" />
      <div>
        <ul>
          <li className="flex items-center mt-6">
            <CheckIcon className="w-4 h-4 text-slate-blue" />
            <p className="ml-4">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex items-center mt-4">
            <CheckIcon className="w-4 h-4 text-slate-blue opacity-20" />
            <p className="ml-4 opacity-20">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex items-center mt-4">
            <CheckIcon className="w-4 h-4 text-slate-blue opacity-20" />
            <p className="ml-4 opacity-20">Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="flex items-center justify-center w-full py-4 transition-all duration-300 bg-white border-2 rounded-lg text-slate-blue border-slate-blue text-desktop-paragraph hover:bg-slate-blue hover:text-white">
          <span>Choose Plan</span>
          <ArrowRightIcon className="w-4 ml-3" />
        </button>
      </div>
    </div>
  </div>
);

const SmallerRightGrid = ({ isYearly }) => (
  <div className="bg-white w-full relative p-[32px] rounded-3xl">
    <div>
      <div className="flex">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
          <img src="/assets/pricing-tables/growth.svg" alt="Growth" />
        </div>
        <div className="ml-4 text-left">
          <h4 className="text-xl font-medium"> Pro </h4>
          <p className="mt-1 text-desktop-paragraph text-slate-body">
            {isYearly ? "$370/year" : "$37/mo"}
          </p>
        </div>
      </div>
      <hr className="mt-6" />
      <div>
        <ul>
          <li className="flex items-center mt-6">
            <CheckIcon className="w-4 h-4 text-slate-blue" />
            <p className="ml-4">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex items-center mt-4">
            <CheckIcon className="w-4 h-4 text-slate-blue" />
            <p className="ml-4">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex items-center mt-4">
            <CheckIcon className="w-4 h-4 text-slate-blue" />
            <p className="ml-4">Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <button className="flex items-center justify-center w-full py-4 transition-all duration-300 bg-white border-2 rounded-lg text-slate-blue border-slate-blue text-desktop-paragraph hover:bg-slate-blue hover:text-white">
          <span>Choose Plan</span>
          <ArrowRightIcon className="w-4 ml-3" />
        </button>
      </div>
    </div>
  </div>
);

export const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <section className="bg-slate-light font-dm-sans">
      <div className="md:m-auto max-w-default py-12 md:py-[90px] mx-6">
        <div className="text-center">
          <h5 className="text-base font-bold uppercase text-slate-orange">
            Learn effective refactoring moves
          </h5>
          <div className="mt-[18px]">
            <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
              Start cleaning up code as you go
            </h2>
          </div>
          <div className="relative mt-7">
            <PricingTab isYearly={isYearly} setIsYearly={setIsYearly} />
          </div>
          <div className="mt-[60px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-left md:space-y-0 md:flex-row">
              <SmallerLeftGrid isYearly={isYearly} />
              <CenterGrid isYearly={isYearly} />
              <SmallerRightGrid isYearly={isYearly} />
            </div>
          </div>

          <div className="mt-[60px] flex items-center justify-center">
            <HeartIcon className="w-6 h-6 mr-2" />
            <p className="font-medium text-slate-headline">or Sponsor me</p>
          </div>
        </div>
      </div>
    </section>
  );
};
