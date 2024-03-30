import Image from "next/image";
import s1 from "../../public/s1.jpeg";
import s2 from "../../public/s2.jpeg";

export default function Sports({ theme }: { theme: any }) {
  const cardClass = theme === "dark" ? "bg-white" : "bg-slate-50";
  const PlayerName = theme === "dark" ? "dark:text-white" : "light:text-black";
  const collection = theme === "dark" ? "text-white" : "text-black";
  const main = theme === "dark" ? "bg-neutral-900" : "bg-slate-100";
  const ticketLeft = theme === "dark" ? "bg-neutral-900" : "bg-slate-100";

  return (
    <div className={main} style={{ minHeight: "100vh" }}>
      <div className="container mx-auto px-4 py-10">
        <p className="font-bold text-4xl mb-8 text-center">Collection Spotlight</p>
        <p className="text-lg mb-6 text-center">
          Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <div className={`rounded-lg shadow ${cardClass}`}>
            <Image src={s1} alt="" width={290.1} height={374.31} className="rounded-t-lg" />
            <div className="p-4">
              <p className={PlayerName}>Sacramento River Cats</p>
              <p className="text-center text-gray-500">Oct 15 | Sun | 4:30 PM</p>
              <p className="text-center mt-1 text-sm">Las Vegas Ballpark, Las Vegas, Nevada</p>
              <p className={`text-center mt-2 py-1 px-2 rounded ${collection}`}>Orange Collection</p>
            </div>
          </div>

          {/* Second Card */}
          <div className={`rounded-lg shadow ${cardClass}`}>
            <Image src={s2} alt="" width={290.1} height={374.31} className="rounded-t-lg" />
            <div className="p-4">
              <p className={PlayerName}>Sacramento River Cats</p>
              <p className="text-center text-gray-500">Oct 15 | Sun | 4:30 PM</p>
              <p className="text-center mt-1 text-sm">Las Vegas Ballpark, Las Vegas, Nevada</p>
              <p className={`text-center mt-2 py-1 px-2 rounded ${collection}`}>Orange Collection</p>
            </div>
          </div>

          {/* Third Card */}
          <div className={`rounded-lg shadow ${cardClass}`}>
            <Image src={s1} alt="" width={290.1} height={374.31} className="rounded-t-lg" />
            <div className="p-4">
              <p className={PlayerName}>Sacramento River Cats</p>
              <p className="text-center text-gray-500">Oct 15 | Sun | 4:30 PM</p>
              <p className="text-center mt-1 text-sm">Las Vegas Ballpark, Las Vegas, Nevada</p>
              <p className={`text-center mt-2 py-1 px-2 rounded ${collection}`}>Orange Collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
