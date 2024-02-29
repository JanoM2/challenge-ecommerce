const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function HomeSkeleton() {
  return (
    <div className="flex items-center">
      esqueleto
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      />
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function ProductsSkeleton() {
  return (
    <div>
      <div className="flex flex-wrap gap-3 animate-pulse">
        <div className="w-1/3">
          <div className="flex flex-col items-center p-4 bg-white rounded shadow">
            <div className="w-24 h-6 bg-gray-300 mb-4"></div>
            <div className="font-bold text-2xl border-t-2 border-gray-300 pt-3 w-2/3 h-8 mb-4"></div>
            <div className="text-xl font-bold mb-2 w-1/2 h-6 bg-gray-300 mb-4"></div>
            <div className="text-gray-700 w-full h-6 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton() {
  return (
    <div>
      LOCURAAAAAAAAAAAAAAAAA
      <div className="flex flex-col justify-between bg-white rounded-lg hover:shadow-lg p-3">
        <div className="flex flex-col justify-center items-center w-1/2 m-auto border-solid border-2 border-sky-500">
          <div className="rounded-md h-48 w-40 p-3" />
          <div className="font-bold text-2xl border-t-2 border-slate-200 pt-3"></div>
          <div className="text-xl font-bold mb-2"></div>
          <div className="text-gray-700 text-nowrap"></div>
        </div>
        <div />
      </div>
    </div>
  );
}
