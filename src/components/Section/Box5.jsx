const Box5 = () => {
    return (
      <div className="glass-box col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
        <div className="h-full grid sm:grid-cols-2">
          <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
            <div className="relative aspect-square rounded-full size-12 flex border before:absolute before:-inset-2 before:border before:rounded-full"></div>
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950">
                Keep your loved ones safe
              </h2>
              <p className="text-gray-700">
                Voluptate. magnam magni doloribus dolores voluptates a sapiente
                inventore nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Box5;