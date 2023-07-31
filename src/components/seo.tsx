import React from "react";
import image from '../images/LinkedIn_icon.svg'

interface SeoProps {
  title: string;
  description: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const seo = {
    title,
    description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:image" content={image} />
    </>
  );
};

export default Seo;
