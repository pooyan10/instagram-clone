import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid md:grid-cols-1 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto  ">
      <section className="col-span-2 overflow-hidden">
        <Stories />
        <Posts />
      </section>

      <section className=" ">
        {/* mini profile */}
        {/* suggestions */}
      </section>
    </main>
  );
}

export default Feed;
