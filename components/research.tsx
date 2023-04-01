import Link from 'next/link';

import { research } from '@/const';

const Research = () => {
  return (
    <div className="mt-4 pb-4 sm:pl-4">
      <h2 className="text-2xl font-bold underline underline-offset-4 text-accent pb-4 decoration-sky-500">
        Research
      </h2>

      {research.map((item, index) => (
        <div className="flex align-items justify-content mb-10" key={index}>
          <img
            src={`${item.imagePath}`}
            alt="research paper image"
            className="max-w-full max-h-full"
            width={300}
            height={200}
          />
          <div className="pt-1 pb-2 pl-10">
            <p className="mb-2 text-lg font-bold">
              {item.link ? (
                <Link href={item.link} prefetch={false}>
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </p>
            <p className="text-gray-400 font-semibold">
              {item.authors} • {item.metadata}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Research;
