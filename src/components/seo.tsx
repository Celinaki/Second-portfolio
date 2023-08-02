import React from "react";

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
    </>
  );
};

export default Seo;
