import React from "react";
import Advertising from "../../img/1998087.png";
import user from "../../img/user.png";
import news from "../../img/news.png";
import group from "../../img/group.png";
import tolu from "../../img/tolu.png";
import peoples from "../../img/694642.png";
function Product() {
  const Product = [
    {
      id: "0",
      img: user,
      name: "Profile Optimization",
      describe:
        "These days, it’s important to have a strong social media presence. This means creating a profile on popular platforms like Facebook, Twitter, and Instagram. But it’s not enough to simply create a profile.",
    },
    {
      id: "1",
      img: news,
      name: "Posting",
      describe:
        "When posting content online, there are a few things to keep in mind. First and foremost, make sure that you are only posting appropriate things and that you are comfortable with sharing with the world.",
    },
    {
      id: "2",
      img: group,
      name: "Engaging",
      describe:
        "When you’re giving a presentation, it’s important to engage your audience from the very beginning. This means starting your presentation with something that will grab their attention and make them want to listen to what you have to say.",
    },
    {
      id: "3",
      img: Advertising,
      name: "Advertising",
      describe:
        "Advertising is a form of marketing communication that employs an openly sponsored, non-personal message to promote or sell a product, service, or idea.",
    },
    {
      id: "4",
      img: tolu,
      name: "Measuring",
      describe:
        "As social media marketing increasingly becomes a staple of businesses’ marketing strategies, it’s more important than ever to have a way to measure the effectiveness of those efforts.",
    },
    {
      id: "5",
      img: peoples,
      name: "Audience Insights",
      describe:
        "Social media is a powerful tool that one can use to connect with potential customers and learn more about your target audience. By using social media audience insights, you can identify trends and patterns in the way people interact with your brand online.",
    },
  ];
  return (
    <>
      <div className="gap-10 md:p-16 p-0 md:px-0 px-2 flex flex-wrap justify-center ">
        {Product.map((items, key) => (
          <div
            className="w-full max-w-sm bg-[#5f71e2] hover:bg-[#5f71e2] hover:bg-opacity-70 rounded-lg  shadow-lg     hover:-translate-y-1 hover:scale-110 duration-700 hover:shadow-2xl"
            key={key}
          >
            <div
              className="flex flex-col items-center gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src={items.img} alt="" className="w-16" />
              <div>
                <p className="text-xl font-bold text-[#001039]">{items.name}</p>
              </div>
              <div>
                <p className="text-[#001039] text-justify">{items.describe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
