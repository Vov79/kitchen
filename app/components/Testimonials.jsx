import placeholder from "@images/Img-225.jpg";
import logo from "@images/Frame 1000001357.png";
import Image from "next/image";
import Form from "./Form";
export default function Testimonials() {
  return (
    <section className="testiomonials">
      <div className="testiomonials__header">
        <h2 className="testiomonials__header-title">RĂMÂI CONECTAT</h2>
        <p className="testiomonials__header-text">
          Deja peste 5000 de bucătării finisate au fost livrate și instalate în
          casele clienților noștri și în continuare menținem relații bune.
        </p>
      </div>
      <div className="testiomonials__content">
        <div className="testiomonials__share">
          <div className="testiomonials__share-image">
            <Image alt="" src={placeholder} />
          </div>
          <div className="testiomonials__share-content">
            <Image alt="" src={logo} />
            <div className="testiomonials__share-text">
              <h3 className="testiomonials__share-title">Bucătării Croitoru</h3>
              <p className="testiomonials__share-body">
                11K aprecieri • 12K urmăritori
              </p>
            </div>
            <Form buttonClassName="intro-button contact">
            CONSULTAȚIE GRATUITĂ
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                  fill="#1B2221"
                />
              </svg>
        </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
