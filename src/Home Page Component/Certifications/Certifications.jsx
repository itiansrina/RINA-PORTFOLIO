import ThreeDTextEffect from "../../3-D Text/ThreeDTextEffect";
import pp from "../Certifications/pp.jpg";
import pb from "../Certifications/pb.jpg";
import css from "../Certifications/css.jpg";
export default function Certifications() {
  return (
    <>
      <div className="mt-24 pb-3" data-aos="fade-right">
        <ThreeDTextEffect title="Certifications" />
      </div>
      <div
        className="max-w-screen-xl mx-auto p-10 sm:p-10 md:p-16"
        data-aos="fade-in"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mb-4">
          {data.map((d, index) => (
            <div className="rounded overflow-hidden shadow-lg" key={index}>
              <div className="relative">
                <img className="w-full" src={d.img} alt="Certificates" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <a href={d.link} target="_blank">
                  <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Link
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const data = [
  {
    link: "https://www.hackerrank.com/certificates/0e42523f2c47",
    img: pb,
  },
  {
    link: "https://www.linkedin.com/posts/rinakushwaha_certificate-activity-7195129536643043329-Z7-M/?utm_source=share&utm_medium=member_desktop",
    img: pp,
  },
  {
    link: "https://www.hackerrank.com/certificates/6752cc378690",
    img: css,
  },
];
