export const Home = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-2xl text-red-600 p-4 text-center">
        Wellcome to Climbify
      </h1>
      <div className="card glass">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to improve your climbing level</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
