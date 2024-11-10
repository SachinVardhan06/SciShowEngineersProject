import React from "react";

function Homepage() {
  return (
    <>
      <div className="font-mono">
        <div className="h-16 bg-blue-500 flex justify-center items-center text-[20px] font-mono w-full">
          <h1 className="text-white">SciShowEngineers</h1>
        </div>
        <div className="w-full h-[500px] flex flex-row gap-28 mt-28 justify-center">
          <div className="h-[500px] w-[350px] bg-blue-300 flex flex-col rounded-lg">
            <img
              className="h-[300px] m-4"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/5/a/o/1-pglc-2005-provogue-men-original-imahfenvrgtyyfvr.jpeg?q=70"
              alt=""
            />
            <p className="ml-4">PROVOGUE</p>
            <p className="ml-4">Trending Day & Date Functioning for Boys</p>
            <p className="ml-4">Price : $325 </p>
            <a href="https://www.flipkart.com/provogue-pglc-2005-trending-day-date-functioning-boys-analog-watch-men/p/itm7bca14ad22c7f?pid=WATGHUHDR2KNGXZ8&lid=LSTWATGHUHDR2KNGXZ8IRKWBI&marketplace=FLIPKART&store=r18%2Ff13&srno=b_1_1&otracker=browse&fm=organic&iid=en_o_2NADSVDuwD4j4DLk0OwGSv2Ul9Ss9qFynvh7NXkdoWKtF88rI9m1_r_rejTnk_wSF62sPmAvhq4HO-nWyeOA%3D%3D&ppt=browse&ppn=browse" className="bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-
                    2 px-4 rounded-lg h-14 flex justify-center">
            <button
            >
              Buy Now
            </button>
            </a>
          </div>
          <div className="h-[500px] w-[350px] bg-blue-300 flex flex-col rounded-lg">
            <img
              className="h-[300px] m-4"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/z/d/1-drw001-daniel-radcliffe-women-original-imahfv8jsyt8cypd.jpeg?q=70"
              alt=""
            />
            <p className="ml-4">Daniel Radcliffe</p>
            <p className="ml-4">Round Rose Gold Analog Watch - For Women</p>
            <p className="ml-4">Price : $250 </p>
            <a href="https://www.flipkart.com/daniel-radcliffe-drw001-rose-gold-round-analog-watch-women/p/itmc8a963315cff1?pid=WATGW2B8YGEVHZGF&lid=LSTWATGW2B8YGEVHZGFAG5ERF&marketplace=FLIPKART&store=r18%2Ff13&srno=b_1_2&otracker=browse&fm=organic&iid=ef1f50d6-66e7-4911-9ec1-1db92c80fc7b.WATGW2B8YGEVHZGF.SEARCH&ppt=browse&ppn=browse" className="bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-
                    2 px-4 rounded-lg h-14 flex justify-center">
            <button
            >
              Buy Now
            </button>
            </a>
          </div>
          <div className="h-[500px] w-[350px] bg-blue-300 flex flex-col rounded-lg">
            <img
              className="h-[300px] m-4"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/d/f/f/1-pe-drm011-daniel-radcliffe-men-original-imagzd5tqgwxpfbz.jpeg?q=70"
              alt=""
            />
            <p className="ml-4">Daniel Radcliffe</p>
            <p className="ml-4">Analog Watch - For Men PE DRM011 Analog Watch</p>
            <p className="ml-4">Price : $364 </p>
            <a href="https://www.flipkart.com/daniel-radcliffe-drm011-black-analog-watch-men/p/itm4b4773b376981?pid=WATGZD682RNZZSFS&lid=LSTWATGZD682RNZZSFSFO3V9A&marketplace=FLIPKART&store=r18%2Ff13&srno=b_1_7&otracker=browse&fm=organic&iid=ef1f50d6-66e7-4911-9ec1-1db92c80fc7b.WATGZD682RNZZSFS.SEARCH&ppt=browse&ppn=browse" className="bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-
                    2 px-4 rounded-lg h-14 flex justify-center">
            <button
            >
              Buy Now
            </button>
            </a>
          </div>
        </div>
        <div className="h-16 flex justify-between items-center bg-blue-500 mt-20">
          <div className="flex gap-4 ml-7">
            <a href="https://www.scishowengineer.com/about-us" className="hover:cursor-pointer">
              <p>Terms and Conditions</p>
            </a>
            <a href="https://www.scishowengineer.com/about-us" className="hover:cursor-pointer">
              <p>FAQ</p>
            </a>
            <a href="https://www.scishowengineer.com/about-us" className="hover:cursor-pointer">
              <p>About Us</p>
            </a>
          </div>
          <div className="flex gap-5 mr-7">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8"
                src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-7"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
