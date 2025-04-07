import Button from "./Button";

const CTA = () => {
  return (
    <section className="mx-4 md:mx-8 lg:mx-14">
      <div className="w-full flex flex-col gap-8  rounded-lg bg-lightgreen lg:h-[500px] place-items-center items-center justify-center px-6 py-10">
        <div className="flex flex-col gap-2 lg:w-2/3 lg:mx-auto justify-center items-center">
          <h1 className="text-2xl font-semibold md:text-5xl">
            Let&apos;s start something great
          </h1>
          <p className="text-sm lg:text-base text-center">
            Sign up with your email adress to be informed about discounts and
            new recruits from all campaigns!
          </p>
        </div>
        <div className="bg-white p-[4px] lg:w-1/2 lg:mx-auto pl-4 rounded-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.28065 10.5744L1.76743 10.4602L1.28065 10.5744ZM1.28065 5.72365L1.76743 5.83784L1.28065 5.72365ZM15.035 5.72366L15.5217 5.60947L15.035 5.72366ZM15.035 10.5744L15.5217 10.6885L15.035 10.5744ZM10.5832 15.0262L10.469 14.5394L10.5832 15.0262ZM5.73245 15.0262L5.61826 15.513L5.73245 15.0262ZM5.73245 1.27186L5.61826 0.785071L5.73245 1.27186ZM10.5832 1.27186L10.6973 0.78507L10.5832 1.27186ZM16.6464 17.3448C16.8417 17.54 17.1583 17.54 17.3536 17.3448C17.5488 17.1495 17.5488 16.8329 17.3536 16.6377L16.6464 17.3448ZM1.76743 10.4602C1.41086 8.94003 1.41086 7.35799 1.76743 5.83784L0.79386 5.60947C0.402047 7.27983 0.402047 9.0182 0.79386 10.6886L1.76743 10.4602ZM14.5482 5.83784C14.9047 7.35799 14.9047 8.94003 14.5482 10.4602L15.5217 10.6885C15.9136 9.01819 15.9136 7.27983 15.5217 5.60947L14.5482 5.83784ZM10.469 14.5394C8.94882 14.896 7.36678 14.896 5.84663 14.5394L5.61826 15.513C7.28862 15.9048 9.02698 15.9048 10.6973 15.513L10.469 14.5394ZM5.84663 1.75865C7.36678 1.40207 8.94882 1.40207 10.469 1.75864L10.6973 0.78507C9.02698 0.393258 7.28862 0.393258 5.61826 0.785071L5.84663 1.75865ZM5.84663 14.5394C3.8226 14.0646 2.24221 12.4842 1.76743 10.4602L0.79386 10.6886C1.35537 13.0824 3.22447 14.9514 5.61826 15.513L5.84663 14.5394ZM10.6973 15.513C13.0911 14.9514 14.9602 13.0823 15.5217 10.6885L14.5482 10.4602C14.0734 12.4842 12.493 14.0646 10.469 14.5394L10.6973 15.513ZM10.469 1.75864C12.493 2.23342 14.0734 3.8138 14.5482 5.83784L15.5217 5.60947C14.9602 3.21568 13.0911 1.34658 10.6973 0.78507L10.469 1.75864ZM5.61826 0.785071C3.22447 1.34658 1.35537 3.21567 0.79386 5.60947L1.76743 5.83784C2.24221 3.8138 3.82259 2.23342 5.84663 1.75865L5.61826 0.785071ZM13.3888 14.0871L16.6464 17.3448L17.3536 16.6377L14.0959 13.38L13.3888 14.0871Z"
                  fill="#979797"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-full bg-transparent outline-none placeholder:text-sm text-black font-semibold placeholder:font-normal  md:text-xl"
            />
          </div>
          <Button title={"Free Trial"} className={"py-2 text-sm text-white"} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
