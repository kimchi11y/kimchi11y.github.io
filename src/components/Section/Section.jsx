import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";

const Section = () => {
  return (
    <section>
      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-6">
              <Box1 />
              <Box2 />
              <Box3 />
              <Box4 />
              <Box5 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
