import React from "react";

const blogs = [
  {
    title: "Why Every Product Business Needs a Website",
    desc: "A professional product website builds trust, showcases your products 24/7, and helps you reach customers beyond physical boundaries. It also improves brand credibility and boosts sales.",
  },
  {
    title: "How a Reseller Website Can Increase Your Sales",
    desc: "A reseller website allows you to manage distributors, control pricing, track performance, and scale your business efficiently with centralized product management.",
  },
  {
    title: "Key Features of a Successful Product Website",
    desc: "High-quality product images, fast loading speed, secure checkout, SEO optimization, and mobile responsiveness are essential features for any successful product-based website.",
  },
  {
    title: "Product Website vs Marketplace: Which Is Better?",
    desc: "While marketplaces offer visibility, your own product website gives you full control over branding, customer data, pricing, and long-term business growth.",
  },
  {
    title: "How Reseller Dashboards Improve Business Efficiency",
    desc: "Reseller dashboards help track orders, commissions, inventory, and payments in real time, making reseller management more transparent and efficient.",
  },
  {
    title: "Why Tailwind CSS Is Perfect for Product Websites",
    desc: "Tailwind CSS enables fast UI development, consistent design, and excellent responsiveness—making it ideal for modern product and reseller websites.",
  },
  {
  title: "How a Product Website Builds Brand Trust",
  desc: "A well-designed product website creates a strong first impression, provides clear product information, and reassures customers through reviews, certifications, and secure payment options."
},
{
  title: "Benefits of Having a Dedicated Reseller Portal",
  desc: "A dedicated reseller portal simplifies order management, commission tracking, and communication, helping resellers work efficiently while strengthening long-term partnerships."
},
{
  title: "Scaling Your Product Business with a Digital Platform",
  desc: "Digital platforms allow product businesses to automate sales, manage inventory in real time, analyze customer data, and expand into new markets without increasing operational complexity."
}

];

const ProductBlog = () => {
  return (
    <div className="lg:w-[1100px] mx-auto w-[95%] my-16">
      <h1 className="text-3xl font-bold text-white mb-10 text-center">
        Product & Reseller Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#1b1b1b] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-white mb-3">
              {blog.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {blog.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBlog;
