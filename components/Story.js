function Story({ img, username }) {
  return (
    <div className="">
      <img
        className="rounded-full h-14 w-14 object-contain cursor-pointer p-[1.5px] border-2 border-red-500 hover:scale-110 transform duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}

export default Story;
