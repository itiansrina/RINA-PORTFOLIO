import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import ThreeDTextEffect from "../3-D Text/ThreeDTextEffect";

function Allprofile() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className='space-y-4 '>
          <div className='pt-36 mb-28' data-aos="fade-right">
            <ThreeDTextEffect title="Coding Profiles"/>
          </div>
        </div>
        <div className='mt-10 pb-9 max-w-screen-lg mx-auto ' data-aos="fade-in"  >
          <Slider {...settings}>
            {data.map((d, index) => (
                <div key={index} style={{border:'1px solid var(--main-heading)'}} className="w-full shadow-lg hover:shadow-full hover:shadow-blue-700 max-w-xs  p-6 bg-opacity-20 border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                  <img className="w-7 h-7 rounded-md" src={d.img} alt={d.heading} />
                  <h5 style={{color: 'var(--font)'}} className="pt-4 mb-2 text-xl font-semibold tracking-tight text-white dark:text-white">{d.heading}</h5>
                  <a href={d.link} className="inline-flex font-medium items-center text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Profile
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                  </a>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    heading: "LeetCode",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABGlBMVEUAAAD/////oRazs7O2tra5ubmFhYVHR0f/phf/oxb/pxf/nAD///1jPwn//Pf/ngC3dBDz8/PShRJxSAr1mxWQkJAjIyPX19ccHBw6Ojrh4eF4eHicnJzp6enx8fE2NjZOTk5iYmJILgbHfhHijxRdOwiDUwyIf3N6Tguoag9NMQfslRTcixODd2Y0IQVqQwm1rJ8RERFSSDorHAQZDgCcYw4kFwPNzc2Pj49tbW364cSsaACMWAf/69L/8eD/pyn/rD3/tFT/u2T/w3nZ0cb/y4z/0p3Kv6//3rihmo9xZlXakCeRZy5GPCxbSC4yKhzr4tackoNpaWnx6d+lmISLfmtcVk46NSxPQzE/NCBmSh8oIRSshVU9JwXul1z9AAAHEUlEQVR4nO2da1vaSBSASQBNomJAxLsgoBWhWC+wrUvVbru9uNvVrq176fr//8aGm8XMOZMLY2aS57wf+snwnPeZ65nkTFMpgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIglCe0mylLDuGp2RjJa9p+fVl2XE8Favr2ojtWdmxPAlree0HO7KjeQJKk4Katio7HuEcbT0S1LKyAxLOuuZCdkCiWXELahuyQxLLT4ygtik7JqFkWcFkGWYAQe2l7KgEkoYEtTXZYYljExTckh2WOGZAwQRNpRuwYHIW/Few4IrsuISxAwuuy45LGGuw4LbsuISBCSYmryhvg4L5xKyEq1ugoFaRHZgwEi/IJIRDknN8AeRLfZKzlUEEZ2THJQwoIXRIzkEpnC8lKOmF8yUtLTsuYbyEBc9+7lVlhyYGJF96PWcaZrG2Jzu86UHypfM5vY9jWTuUHeJ07CCCpj7GtOr7sqOcggoieLGo/8A0mrFtxzIsmHskOHAsnMiONRTlPCx46RLsO+px7KolOJ2Yf8MKOhi27HiDg6QTv8xBgo5ivSs74oAgCSEm2O+pu7JjDsQNLPgWFew79mRHHYB3sOCvPEFdt+IzGD/Agu/5gs5gbJ3KDt0fYQWdjlo8kB28H17Agh+9BfuOMdiNf4IFz4broOnA76kN2QJePIMFXy86uzPLrBdqtVbRMgxc0yjIVuCDCppFe+lhHql2CrqBD0aVk+PnsOA5mwiedIqYo8rb1Kt5WPA3aIo8baDNqOxgPM6Bgrnfkb8/KGLDUdHB+BkR/AN/pIA1o9G8jy5wv1zDCeH8Me8htKea+lJUgfvl+y08y1zxH9vHB2MnmsB9gwg+93qOMxhrUcTtGyRf+ub95GkLHYwq7cSRfOmLr4dtS/0pFUknPvl8vId1VEuVjTgi+ML3D+xig7H5hFEHAMmX/AumUt06PBhNJRJGJF96F+xXbFDRUKGbfhEimEp1IEVDgeMpRPAm+C/t6uxgVMAQyZduw6xkbXYwmtJPUa9gwVzIpbrmViyKDTc4x3BCmLsO+4Odx4u/JXtv+heSL30O/5OHk4PRrIuLNRRdeLed4+ZLXlSbDz3VaLZFhRoSZDPqkS95cWpbg2Y0rZrs91HISu+ZL3lStZuG0bSlb2eOYcFnsuMSB5wR+suXYgF89us3X4oD4EIRJJ1QHXCa+SA7KpFATRg4nVAZaD+aKEFosQ+RLynMCdtJQ+VL6gJ8N3onOyaxsIdrSVon+jDfdOW8nij9uTEzHRs7EVaBXTPD0KMJy8vZbGZastmZyBzZb2P5OW8lnUmLIJOOqtaNOX665f75rBi/gWIpGsOvbkNusfKRoBYcKEZUicIc43/l/fWrrDDBdDpbicSQKWXivibcFNeETiNGc8MEY8g7uTgS2YTpdDTdNJBhSaxhJhLDQONwVaxhNDVhzFzKXfCF+kU0mX5zG3JTw2WRM002mtraO7fhPC91mhXaTaNZ8tn3FdxjYIGNGFETAp8HcbvpkbAVMRtZ9TB7iPE39+83syIcM9no6r/ZV9sex1CVTacBpiOdXo7wFg3gzajXC5nVtdnpKB9FojaGfXOYT9ZJFHTknazTxFSbNUzWmT78/jdZisy2JnmK4Ev8RL26ABsxWYrwR6VJUmSPhROniFRxJWldRL4YSlArniI1FtMptvd6vX1VtoDIp4nTdNSDlmk46DVF7spAyvHCK3as0aeJytQ9IZ8Iazfhutnk5+zGguBYQ4JMqOFa0fW9vuhYQ8KcLI7gv3ADcQkqU0mKddTAH2cw5U/SP/Iegyp+D/QzQEmJ9C9Mx6CKQWZ8QNBQ5wYpbNHY9q8IVegpZIgr+i1LgKueVLp6AFX0V5gACypSmjfiDlP8x8fDSN2a7HISF8h1A1rOWxGukjWVWSzGoIr8VxpYC+qmSqNwCKrIr6FBBHWFJtIHQrUiIqjKvtsFUunFuzkCqVSXX3eIgCnm/kUeYAoOR4JqtmAfTPEMnPnvsQpudQVxxTd1dmpsILdiKS2I3nHyftEqLEy+47xvYFdFGaqOwTGw4us53bSatb2Favvkfnep0TLQa1vUbsE+15Di+eC+NtPxKhaLJuc6M8W76BCoFc/Bm1kBQdW76BDgqPjM16WCcRGEFN/6a8M4dNEhXVeFae7CVwvGR9BpxceKHpezxqyLjphU9HO1Z9xuEk5NviT2cTlrXG5nfcx/Z4Mh+PHSh6CSl+x5s7d4cXkxN+djGlXoVq9gYMmDu4fq8i/aCU0Hv4r1Aaug3pFMALq2xb052LSKirwLDU/b1tGNtmnE+r/weKDbqZuspOk0n63iiVo4qp3C4A7o/m3X/X8My6jbh6p8ciGK+/2GXSjUm61Cze7tyr5ehyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIggjD/3VNoHXyPE2hAAAAAElFTkSuQmCC",
    link: "https://leetcode.com/u/rinakushwaha/"
  },
  {
    heading: "GeekForGeeks",
    img: "data:image/png;base64,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",
    link: "https://www.geeksforgeeks.org/user/kushwaha123rina/"
  },
 
];

export default Allprofile;


