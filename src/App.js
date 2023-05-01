import { useEffect, useRef, useState } from "react";
import Input from "components/Input";
function App() {
  const ref = useRef();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const enable = username && password;
  useEffect(() => {
    // @ts-ignore
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);
  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
      <div className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32_634.15] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[20px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0  transition-opacity duration-1000 ease-linear"
            // @ts-ignore
            src={require("./image/image1.jpg")}
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0  transition-opacity duration-1000 ease-linear"
            // @ts-ignore
            src={require("./image/image2.jpg")}
            alt=""
          />

          <img
            className="w-full h-full absolute top-0 left-0 opacity-0  transition-opacity duration-1000 ease-linear"
            // @ts-ignore
            src={require("./image/image3.jpg")}
            alt=""
          />

          <img
            className="w-full h-full absolute top-0 left-0 opacity-0  transition-opacity duration-1000 ease-linear"
            // @ts-ignore
            src={require("./image/image4.jpg")}
            alt=""
          />
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border p-[40px] pt-10 pb-2">
          <a href="" className="flex justify-center mb-8">
            <img
              className="h-[51px]"
              // @ts-ignore
              src={require("./image/logo.png")}
              alt=""
            />
          </a>
          <form className="grid gap-y-1.5">
            <Input
              type="text"
              value={username}
              label="Phone number, username or email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={!enable}
              className="h-[30px] rounded bg-brand font-semibold text-white text-sm disabled:opacity-50 mt-1"
            >
              Log In
            </button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div>
              <a
                href="#"
                className="flex justify-center items-center gap-x-2 text-sm mb-2 font-semibold text-facebook"
              >
                Log in with Facebook
              </a>
              <a
                href=""
                className="text-xs flex items-center justify-center text-link"
              >
                Forget password?
              </a>
            </div>
          </form>
        </div>
        <div className="bg-white border p-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="" className="font-semibold text-brand">
            Sign up.
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
