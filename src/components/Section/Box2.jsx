const Box2 = () => {
    return (
      <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
        <div>
          <div className="relative aspect-square rounded-full size-32 flex border mx-auto before:absolute before:-inset-2 before:border before:rounded-full"></div>
          <div className="mt-6 text-center relative z-10 space-y-2">
            <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950">About Me</h2>
            <p className="text-gray-700">
              Provident fugit and vero voluptate. magnam magni doloribus dolores
              voluptates a sapiente nisi.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Box2;
  