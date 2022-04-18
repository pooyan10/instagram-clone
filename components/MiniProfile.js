function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] h-16 w-16 "
        src="https://links.papareact.com/3ke"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">pooooyan</h2>
        <h3 className="text-sm text-gray-400">welcome to instagram </h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">switch</button>
    </div>
  );
}

export default MiniProfile;
