import React from "react";
import { Button, message } from "antd";
import "./../styles/styles.scss";

const HeroSection = () => {
  // Ant Design's message hook for creating notifications
  const [messageApi, contextHolder] = message.useMessage();

  // Function to handle the download button click event
  const handleDownload = () => {
    messageApi.open({
      type: 'success',
      content: 'Download started successfully!',
    });
  };
  return (
      //Hero Section
      <div className="hero-content">
        <div className="hero-text-content">
          <h1 className="hero-h1">Get <span>Exclusive Access</span> Today</h1>
          <h2 className="hero-h2">Join us and be the first to access premium content and special offers.</h2>
          <div className="cta-button">
            {contextHolder}
            {/*Download button */}
            <Button type="primary" size="large" onClick={handleDownload}>
              Download Now
            </Button>
          </div>
        </div>
      </div>
    
  );
};

export default HeroSection;
