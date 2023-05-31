import { Layout, Button, Card, Carousel, Image, Input, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
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
import "./App.css";

function App() {
  return (
    <Layout className="site-layout">
      <Header className="header">
        <img src={logo} alt="logo" className="logo" />
      </Header>
      <Content style={{ overflow: "initial" }}>
        <section>
          <div className="row home">
            <div className="home-left">
              <h1>Simplify blockchain Technology for Enterprises</h1>
              <p>
                Chainize simplifies blockchain Technology for Enterprises,
                abstracting all the complexities to make it more accessible.
                Focus on growing your business with our easy to use adapters for
                different industries
              </p>
              <Button type="primary" className="btn" size="large">
                Get in Touch
              </Button>
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
              autoplay
              arrows={true}
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
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
        <section className="gray-section">
          <div className="advisors">
            <h1>Advisors</h1>
            <div className="advisors-list">
              <div>
                <Image
                  width={200}
                  preview={false}
                  src="https://i.pinimg.com/564x/b6/5e/69/b65e69dadf225e338c2dfc9511ed9704.jpg"
                />
                <h4>SHIV KUMAR</h4>
                <img src={In} alt="LinkedIn" className="in" />
              </div>

              <div>
                <Image
                  width={200}
                  preview={false}
                  src="https://i.pinimg.com/564x/b6/5e/69/b65e69dadf225e338c2dfc9511ed9704.jpg"
                />
                <h4>Mike Gault</h4>
                <img src={In} alt="LinkedIn" className="in" />
              </div>
              <div>
                <Image
                  width={200}
                  preview={false}
                  src="https://i.pinimg.com/564x/b6/5e/69/b65e69dadf225e338c2dfc9511ed9704.jpg"
                />
                <h4>Arun Kothanath</h4>
                <img src={In} alt="LinkedIn" className="in" />
              </div>
            </div>
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
                <Input placeholder="Enter your email address" />
                <Button type="primary">Subscribe</Button>
              </Space.Compact>
              <img src={In} alt="LinkedIn" className="in" />
            </div>
          </div>
          <div className="footer-flex">
            <span>Contact Us</span>
            <span>Be part of our team</span>
            <span>Terms of use</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
          </div>
          <span> © 2023 www.chainize.com. All rights reserved. </span>
        </footer>
      </Content>
    </Layout>
  );
}
export default App;
