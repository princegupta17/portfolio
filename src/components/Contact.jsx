function Contact() {
  return (
    <>
      <div className="h-fit py-16 px-4  grid gap-y-3 md:grid-cols-2 md:p-20 md:gap-x-3">
        {/* connect coding code */}

        <div className="px-4">
          {/* Heading */}

          <div className="p-2">
            <h1 className="text-lg font-semibold font-mono text-[#FFFFFF] md:text-4xl">
              LET&apos;S CONNECT
            </h1>
          </div>

          {/* mail id && resume */}

          <div className="pt-5">
            <p className="text-[#C7C7C7] text-xs p-1">
              Say hello at{" "}
              <span className="underline decoration-green-200 underline-offset-4">
                princegupta444555@gmail.com
              </span>
            </p>
            <p className="text-[#C7C7C7] text-xs p-1">
              For more info, here&apos;s my{" "}
              <span className="underline decoration-green-200 underline-offset-4">
                resume
              </span>
            </p>
          </div>

          {/* social media links */}

          <div className="pt-5 flex gap-5">
            <a href="https://www.linkedin.com/in/prince-gupta-946164227/">
              <img
                className="w-8 h-8"
                src="public\bxl-linkedin.svg.png"
                alt="linkedin"
              ></img>
            </a>
            <a href="https://github.com/princegupta17">
              <img
                className="w-8 h-8"
                src="public\bxl-github.svg.png"
                alt="github"
              ></img>
            </a>
            <a href="https://x.com/princeg27407353">
              <img
                className="w-8 h-8"
                src="public\bxl-twitter.svg (1).png"
                alt="twitter"
              ></img>
            </a>
            <a href="https://www.instagram.com/17gupta_prince?igsh=b2I3ZDd5eDA1OHBh">
              <img
                className="w-8 h-8"
                src="public\bxl-instagram.svg.png"
                alt="instagram"
              ></img>
            </a>
          </div>

          {/* caption */}

          <div className="hidden md:inline-block md:pt-96">
            <p className="text-[#C7C7C7]">@ 2024 Prince Gupta</p>
          </div>
        </div>

        {/* form coding below */}

        <div>
          <form className="shadow-md rounded px-4 pt-6 pb-8 mb-4 md:px-8">
            <div className="mb-4">
              <label className="block text-[#C7C7C7] text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="border-[#1A1A1A] rounded w-full py-2 px-3 text-[#FFFFFF] bg-[#1A1A1A]"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#C7C7C7] text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="border-[#1A1A1A] rounded w-full py-2 px-3 text-[#FFFFFF] bg-[#1A1A1A]"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#C7C7C7] text-sm font-bold mb-2">
                Subject
              </label>
              <input
                className="border-[#1A1A1A] rounded w-full py-2 px-3 text-[#FFFFFF] bg-[#1A1A1A]"
                id="subject"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#C7C7C7] text-sm font-bold mb-2">
                Message
              </label>
              <input
                className="border-[#1A1A1A] rounded w-full h-40 py-2 px-3 text-[#FFFFFF] bg-[#1A1A1A]"
                id="message"
                type="text"
              />
            </div>
            <div className="flex items-center justify-between pt-6">
              <button
                className="bg-[#D3E97A] text-[#0A0A0A] font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* caption for mobile && small devices */}

        <div className="inline-block pt-10 md:hidden">
          <p className="text-[#C7C7C7]">@ 2024 Prince Gupta</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
