const Box3 = () => {
    return (
      <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
        <div>
          <div className="pt-6 lg:px-6"></div>
          <div className="flex space-x-4 text-3xl">
            <div>
              <svg
                className="w-[48px] h-[48px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
              </svg>
            </div>
            <div>
              <svg
                className="w-[48px] h-[48px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Box3;
  