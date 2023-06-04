import { useRef, useState } from "react";
import {
  Layout,
  Button,
  Card,
  Carousel,
  Image,
  Input,
  Space,
  Form,
  message,
} from "antd";
const { Header, Content } = Layout;
import type { FormInstance } from "antd/es/form";
import axios from "axios";
import logo from "./assets/logo.png";
import frame from "./assets/frame.svg";
import abstraction from "./assets/abstraction.png";
import market from "./assets/market.png";
import reusable from "./assets/reusable.png";
import simple from "./assets/simple.png";
import scalability from "./assets/scalability.png";
import offerOne from "./assets/offerOne.png";
import offerTwo from "./assets/offerTwo.png";
import offerThree from "./assets/offerThree.png";
import In from "./assets/in.svg";
import logoWhite from "./assets/logoWhite.svg";
import shiv from "./assets/advisors/shiv.jpg";
import mike from "./assets/advisors/mike.jpg";
import arun from "./assets/advisors/arun.jpeg";

import "./App.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const advisorsList = [
  {
    name: "SHIV KUMAR",
    img: shiv,
    in: "https://www.linkedin.com/in/shiv-kumar-ramani-149a70205/",
  },
  {
    name: "Mike Gault",
    img: mike,
    in: "https://www.linkedin.com/in/mikegault1/",
  },
  {
    name: "Arun Kothanath",
    img: arun,
    in: "https://www.linkedin.com/in/arunk/",
  },
];
const baseUrl = "https://api.brevo.com/v3/smtp";

function App() {
  const [successOne, setSuccessOne] = useState(false as boolean);
  const [successTwo, setSuccessTwo] = useState(false as boolean);
  const formOneRef = useRef<FormInstance>(null);
  const formTwoRef = useRef<FormInstance>(null);
  const inputRef = useRef(null);

  const onSubscribe = async (values: any) => {
    const { email = "" } = values;
    const emailConfig: any = {
      sender: {
        name: "Chainize",
        email: "ontact@chainize.io",
      },
      to: [
        {
          email: "ontact@chainize.io",
          name: "Chainize",
        },
      ],
      subject: "Subscribe to our Newsletter",
      htmlContent: `<html><head></head><body><p>Hello, <table><tr><td>Email:</td><td>${email}</td></tr></table></body></html>`,
    };
    await axiosCall(emailConfig);
    setSuccessTwo(true);
    formTwoRef.current?.resetFields();
  };

  const getAdvisors = () =>
    advisorsList.map((list: any) => (
      <div key={list?.in}>
        <Image width={200} preview={false} src={list?.img} />
        <h4>{list?.name}</h4>
        <a rel="noopener" href={list?.in} target="_blank">
          <img src={In} alt="LinkedIn" className="in" />
        </a>
      </div>
    ));
  const axiosInstance: any = axios.create({
    baseURL: baseUrl,
    headers: {
      accept: "application/json",
      "api-key":
        "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",
      "content-type": "application/json",
    },
  });

  const axiosCall = async (requestConfig: any) => {
    try {
      await axiosInstance.post("/email", {
        ...requestConfig,
      });
    } catch (error: unknown) {
      console.error(error);
    }
  };

  // clean useAxios
  const onFinish = async (values: any) => {
    const { name = "", phone = "", email = "", company = "" } = values;
    //contact@chainize.io
    //kgrgraju@gmail.com
    const emailConfig: any = {
      sender: {
        name,
        email: "ontact@chainize.io",
      },
      to: [
        {
          email: "ontact@chainize.io",
          name: "Chainize",
        },
      ],
      subject: "GET IN TOUCH",
      htmlContent: `<html><head></head><body><p>Hello, <table><tr><td>Name:</td><td>${name}</td></tr><tr><td>Phone Number:</td><td>${phone}</td></tr><tr><td>Email:</td><td>${email}</td></tr><tr><td>Company Name:</td><td>${company}</td></tr></table></body></html>`,
    };
    await axiosCall(emailConfig);
    setSuccessOne(true);
    formOneRef.current?.resetFields();
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="slick-prev slick-arrow"
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    ></button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className="slick-next slick-arrow"
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    ></button>
  );
  const year = new Date().getFullYear();
  return (
    <Layout className="site-layout">
      <Header className="header">
        <a href="#home">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </Header>
      <Content style={{ overflow: "initial" }}>
        <section id="home">
          <div className="row home">
            <div className="home-left">
              <h1>Simplify blockchain Technology for Enterprises</h1>
              <p>
                Chainize simplifies blockchain Technology for Enterprises,
                abstracting all the complexities to make it more accessible.
                Focus on growing your business with our easy to use adapters for
                different industries
              </p>
              <a href="#getInTouch">
                <Button type="primary" className="btn" size="large">
                  Get in Touch
                </Button>
              </a>
            </div>
            <div className="home-right">
              <img src={frame} alt="frame" />
            </div>
          </div>
        </section>
        <section className="gray-section">
          <div className="row benefits">
            <h1>Benefits of Chainize</h1>
            <div>
              <p>
                With our platform, you can take advantage of the benefits of
                blockchain without the complexity and cost of building and
                maintaining your own infrastructure
              </p>
            </div>
            <div className="benefits-item">
              <Card
                className="benefits-card"
                cover={
                  <img alt="abstraction" className="img" src={abstraction} />
                }
              >
                <h2>Abstraction</h2>
                <p>
                  Our platform hides all the complexities of blockchain
                  technology, making it easier for you to adopt and integrate it
                  into your business.
                </p>
              </Card>
              <Card
                className="benefits-card"
                cover={<img alt="reusable" className="img" src={reusable} />}
              >
                <h2>Reusable Components</h2>
                <p>
                  Readily available components for configuration and extension,
                  making development easier and faster.
                </p>
              </Card>
              <Card
                className="benefits-card"
                cover={<img alt="simple" className="img" src={simple} />}
              >
                <h2>Simple integration</h2>
                <p>
                  Easy to integrate existing web 2 stacks seamlessly with
                  blockchain technology.
                </p>
              </Card>
              <Card
                className="benefits-card"
                cover={
                  <img alt="scalability" className="img" src={scalability} />
                }
              >
                <h2>Scalability</h2>
                <p>
                  Designed to scale with your business and handle any volume of
                  data, it is easy to grow and adapt quickly.
                </p>
              </Card>
              <Card
                className="benefits-card"
                cover={<img alt="market" className="img" src={market} />}
              >
                <h2>Faster time-to-market</h2>
                <p>
                  Accelerate your time-to-market with pre-built blockchain
                  components and tools that can be easily configured and
                  customized.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div className="offerings">
            <h1>Our Offerings</h1>
            <Carousel
              // autoplay
              arrows={true}
              prevArrow={<SlickArrowLeft />}
              nextArrow={<SlickArrowRight />}
            >
              <div>
                <div className="group-inner">
                  <div>
                    <h1>AssetVigil</h1>
                    <p>
                      Ensure the cryptographic integrity of all assets in your
                      network by using digital twinning and tokenization with
                      AssetVigil. Conduct audits of patches, updates,
                      configurations, and other network devices to ensure that
                      they are secure and protected against any potential
                      threats. Design a high level security framework that
                      safeguards against unauthorized access and tampering,
                      ensuring that all assets in the network are secure and
                      protected.
                    </p>
                    <Button type="primary" className="btn" size="large">
                      Know More
                    </Button>
                  </div>
                  <div className="offer-img">
                    <img src={offerOne} alt="offerOne" />
                  </div>
                </div>
              </div>
              <div>
                <div className="group-inner">
                  <div className="offer-img">
                    <img src={offerTwo} alt="offerTwo" />
                  </div>
                  <div>
                    <h1>Supply Trace</h1>
                    <p>
                      Supply Trace is a powerful solution that provides
                      end-to-end track and trace capabilities, along with
                      provenance, transparency, collaboration, and efficiency
                      for various industries such as Pharma, Agriculture,
                      Manufacturing, Mining, and more. Businesses can gain
                      unparalleled visibility into their supply chain, enabling
                      them to optimize processes, increase efficiency, and
                      ultimately drive growth.
                    </p>
                    <Button type="primary" className="btn" size="large">
                      Know More
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <div className="group-inner">
                  <div>
                    <h1>Tokenize</h1>
                    <p>
                      Tokenize enables monetization, interoperability, and
                      liquidity of assets in various industries such as gaming,
                      education, and content creation. By providing a standard
                      format for in-game assets, tokenization creates
                      interoperability between different games and platforms,
                      increasing the value of assets, ensuring transparency and
                      security, and creating new revenue streams for developers
                      and content creators
                    </p>
                    <Button type="primary" className="btn" size="large">
                      Know More
                    </Button>
                  </div>
                  <div className="offer-img">
                    <img src={offerThree} alt="offerThree" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="gray-section advisors-section">
          <div className="advisors">
            <h1>Advisors</h1>
            <div className="advisors-list">{getAdvisors()}</div>
          </div>
        </section>
        <section className="get-in-touch-section" id="getInTouch">
          <div className="get-in-touch">
            <h1>Get in touch</h1>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{ width: 400 }}
              validateMessages={validateMessages}
              autoComplete="off"
              ref={formOneRef}
            >
              <Form.Item
                name={["name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the name" />
              </Form.Item>
              <Form.Item
                name={["phone"]}
                label="Phone Number"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the phone number" />
              </Form.Item>

              <Form.Item
                name={["email"]}
                label="Email"
                rules={[{ type: "email" }, { required: true }]}
              >
                <Input placeholder="Enter the email" />
              </Form.Item>
              <Form.Item
                name={["company"]}
                label="Company Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter the company name" />
              </Form.Item>
              <div>
                <Button type="primary" className="btn" htmlType="submit">
                  Submit
                </Button>
              </div>

              {successOne && (
                <div className="success-msg">
                  Thanks for contacting us. We will get back to you soon.
                </div>
              )}
            </Form>
          </div>
        </section>
        <footer>
          <div className="footer-flex">
            <div>
              <img src={logoWhite} alt="logo" className="logo" />
            </div>
            <div className="contact-info">
              <div>
                <h4>Tel:</h4>
                +XXXXXXXXXXX
              </div>
              <div>
                <h4>E-Mail:</h4>
                info@chainize.com
              </div>
            </div>
            <div className="subscribe-info">
              <h4>Subscribe to our Newsletter</h4>
              <Space.Compact style={{ width: "100%" }}>
                <Form
                  name="customized_form_controls"
                  layout="inline"
                  onFinish={onSubscribe}
                  style={{ width: 415 }}
                  validateMessages={validateMessages}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  autoComplete="off"
                  ref={formTwoRef}
                >
                  <Form.Item
                    name={["email"]}
                    rules={[{ type: "email" }, { required: true }]}
                  >
                    <Input
                      placeholder="Enter your email address"
                      ref={inputRef}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Subscribe
                    </Button>
                  </Form.Item>
                  {successTwo && (
                <div className="success-msg">
                  Thanks for Subscribing to the Newsletter.
                </div>
              )}
                </Form>
               
              </Space.Compact>
              {/* <img src={In} alt="LinkedIn" className="in" /> */}
            </div>
          </div>
          <div className="footer-flex">
            {/* <span>Contact Us</span>
            <span>Be part of our team</span>
            <span>Terms of use</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span> */}
          </div>
          <span> © {year} www.chainize.com. All rights reserved. </span>
        </footer>
      </Content>
    </Layout>
  );
}
export default App;
