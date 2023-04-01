import { work } from '@/const';

const Stepper = () => {
  return (
    <div className="mt-4 pb-4 sm:pl-4">
      <h2 className="text-2xl font-bold underline underline-offset-4 text-accent pb-4 decoration-sky-500">
        Education & Work
      </h2>

      {work.map((item, index) => (
        <div className="flex" key={index}>
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  className="w-4 text-gray-300"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="19,15 12,22 5,15"
                  />
                </svg>
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="pt-1 pb-2">
            <p className="mb-2 text-lg font-bold">{item.place}</p>
            <p className="text-gray-400 font-semibold">
              {item.position} • {item.timeline}
            </p>
          </div>
        </div>
      ))}

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
              <svg
                className="w-6 text-gray-300"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <p className="mb-2 text-lg font-bold">END</p>
          <p className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
