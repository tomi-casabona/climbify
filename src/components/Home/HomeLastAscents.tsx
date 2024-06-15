export const HomeLastAscents = ({ index }: { index: number }) => {
  const routeTitle = "Rescat emocional";
  console.log(routeTitle.length);
  const esPar = index % 2 === 0 ? true : false;
  return (
    <div className="inline-block mx-1 h-60">
      <div
        className={`w-56 h-56 p-3 active:scale-105 duration-200 rounded-full ${esPar ? "bg-neutral-content" : "bg-neutral my-4"} flex flex-col justify-center items-center text-center object-center font-bold`}
      >
        <div className="h-2/5 flex items-end">
          <p
            className={`${routeTitle.length < 9 ? "text-3xl" : `${routeTitle.length < 13 ? "text-2xl" : "text-xl"}`} uppercase text-wrap ${esPar ? "text-neutral" : "text-neutral-content"}`}
          >
            {routeTitle}
          </p>
        </div>
        <div className="h-3/5">
          <p className="text-7xl text-primary">6b+</p>
        </div>
      </div>
    </div>
  );
};
