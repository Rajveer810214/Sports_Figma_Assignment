import Image from "next/image";
import s1 from "../../public/s1.jpeg";
import s2 from "../../public/s2.jpeg";

export default function Sports({theme}:{ theme:any }) {
  console.log(theme);
  // const cardClass=?
  const cardClass =
    theme === "dark"
      ? "max-w-full bg-white  rounded-lg shadow dark:bg-gray-800 ml-9"
      : "max-w-full bg-slate-50  rounded-lg shadow light:bg-gray-800  ml-9";
  const PlayerName =
    theme === "dark"
      ? " text-center dark:text-white mb-2"
      : " text-center light:text-black mb-2";
  const collection =
    theme === "dark"
      ? "text-center mx-auto mt-1 p-1 text-white bg-black"
      : " text-white text-center  mx-auto mt-1 p-1 bg-black";
  const main = theme === "dark" ? "bg-neutral-900 " : "bg-slate-100";
  // const ticket = theme === "dark" ? " rounded-full " : " rounded-full ";
  const ticketLeft =
    theme === "dark"
      ? "absolute transform -translate-y-1/2 bg-neutral-900 w-4 h-4 rounded-full "
      : "absolute transform -translate-y-1/2 bg-slate-100 w-4 h-4 rounded-full ";
  return (
    <div
      className={main}
      style={{ width: "80%", height: "120vh", margin: "auto" }}
    >
      <div className="mt-10 text-center mx-auto" style={{ width: "80%" }}>
        {/* <div className="text-center mx-auto"> */}
        <p
          className="font-bold"
          style={{ paddingTop: "33px", fontSize: "50px", fontWeight: "700" }}
        >
          Collection Spotlight
        </p>
        <p style={{ marginTop: "13px", fontSize: "15px" }}>
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        {/* </div> */}
      </div>
      <div
        className="flex items-center justify-center mt-4  "
        // style={{ width: "80%", margin: "auto" }}
      >
        {/* Left Arrow */}
        <svg
          style={{
            position: "absolute",
            left: "190px",
            color: "blue",
            border: "2px solid #738FFF            ",
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          stroke="#738FFF
          "
          className="w-8 h-10 cursor-pointer ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>

        {/* First Card */}
        <div className={cardClass} style={{ width: "257px", height: "563px" }}>
          {/* Ticket cuts */}
          <div
            className={ticketLeft}
            style={{ bottom: "-102.5%", left: "38.9%" }}
          ></div>
          <div
            className={ticketLeft}
            style={{ bottom: "-102.5%", left: "20.7%" }}
          ></div>
          <div className="flex flex-col justify-center">
            <Image
              className="mx-auto mt-3"
              src={s1}
              alt=""
              width={290.1}
              height={374.31}
              style={{
                width: "236.1px",
                height: "374.31px",
                top: "-253.08px",
                left: "-1809px",
              }}
            />
            <p className="text-center mt-1" style={{ color: "gray" }}>
              - - - - - - - - - - - - - - - -
            </p>
            <p className={PlayerName}>Sacramento River Cats</p>
            <p className="text-center" style={{ color: "gray" }}>
              Oct 15 | Sun | 4:30 PM
            </p>
            <p className="text-center mt-1" style={{ fontSize: "15px" }}>
              Las Vegas Ballpark, Las Vegas, Nevada
            </p>
            <p style={{ width: "80%" }} className={collection}>
              Orange Collection
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className={cardClass} style={{ width: "257px", height: "563px" }}>
          {/* Ticket cuts */}
          <div
            className={ticketLeft}
            style={{ bottom: "-102.5%", left: "41.7%" }}
          ></div>
          <div
            className={ticketLeft}
            style={{ bottom: "-102.5%", left: "59.8%" }}
          ></div>
          <div className="flex flex-col justify-center">
            <Image
              className="mx-auto mt-3"
              src={s2}
              alt=""
              width={290.1}
              height={374.31}
              style={{
                width: "236.1px",
                height: "374.31px",
                top: "-253.08px",
                left: "-1809px",
              }}
            />
            <p className="text-center mt-1" style={{ color: "gray" }}>
              - - - - - - - - - - - - - - - -
            </p>
            <p className={PlayerName}>Sacramento River Cats</p>

            <p className="text-center" style={{ color: "gray" }}>
              Oct 15 | Sun | 4:30 PM
            </p>
            <p className="text-center mt-1" style={{ fontSize: "15px" }}>
              Las Vegas Ballpark, Las Vegas, Nevada
            </p>
            <p style={{ width: "80%" }} className={collection}>
              Orange Collection
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className={cardClass} style={{ width: "257px", height: "563px" }}>
          {/* Ticket cuts */}
          <div
            className={ticketLeft}
            style={{ bottom: "-102.5%", left: "62.58%" }}
          ></div>
          <div
            className={ticketLeft}
            style={{ bottom: "-102.5%", left: "80.75%" }}
          ></div>
          <div className="flex flex-col justify-center">
            <Image
              className="mx-auto mt-3"
              src={s1}
              alt=""
              width={290.1}
              height={374.31}
              style={{
                width: "236.1px",
                height: "374.31px",
                top: "-253.08px",
                left: "-1809px",
              }}
            />
            <p
              className="text-center mt-1"
              style={{
                color: "gray",
                borderStyle: "2dashed groove none dotted",
              }}
            >
              - - - - - - - - - - - - - - - -
            </p>
            <p className={PlayerName}>Sacramento River Cats</p>

            <p className="text-center" style={{ color: "gray" }}>
              Oct 15 | Sun | 4:30 PM
            </p>
            <p className="text-center mt-1" style={{ fontSize: "15px" }}>
              Las Vegas Ballpark, Las Vegas, Nevada
            </p>
            <p style={{ width: "80%" }} className={collection}>
              Orange Collection
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <svg
          style={{
            position: "absolute",
            right: "190px",
            color: "blue",
            border: "2px solid #738FFF",
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          stroke="#738FFF
          "
          className="w-8 h-10 cursor-pointer mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
