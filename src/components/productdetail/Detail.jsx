import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className=""> 
      <div className="mt-10 ">
        <img className="mx-auto  shadow  p-10 " src={data.photo} alt="" />
        <p className="text-3xl text-left  border-black md:ml-10 text-rose-400 font-bold mt-10">Product name - <span className="text-black"> {data.name}</span></p>
        <p className="text-justify p-10  text-slate-500">
          This brands products  is a globally recognized Swedish
          fashion retail powerhouse that has become synonymous with accessible
          and diverse clothing options. The brand offers an extensive and varied
          selection of clothing and accessories tailored to individuals of all
          ages and genders, making it a versatile one-stop shop for the entire
          family. H&M has established a stellar reputation for its ability to
          swiftly adapt to the ever-changing world of fashion, making it a
          preferred destination for those looking to keep up with the latest
          trends. Whether you're in search of casual attire, formal wear,
          activewear, or even children's clothing, H&M has you covered with a
          range of options designed to fit various tastes and styles. One of
          H&M's defining characteristics is its commitment to affordability.
          With a mission to make fashion accessible to a wide range of
          consumers, H&M consistently offers budget-friendly choices, allowing
          customers to update their wardrobes without straining their budgets.
          This affordability does not come at the expense of quality, as the
          brand maintains a strong focus on producing clothing that meets
          standards of durability and comfort. In recent years, H&M has also
          taken substantial steps to address environmental and ethical concerns
          in the fashion industry. The company has launched initiatives like the
          "Conscious Collection," which highlights its commitment t00
          sustainability and responsible fashion practices. This includes using
          eco-friendly materials, reducing waste, and improving the ethical and
          environmental impact of their products and operations. H&M has
          established itself as a globally influential player in the fashion
          industry, known for its trendy, accessible, and inclusive approach to
          clothing and accessories, with a growing emphasis on environmental
          responsibility and sustainability. Whether you're looking to stay in
          vogue, dress your family, or make more environmentally conscious
          fashion choices, H&M offers a diverse and affordable array of products
          that cater to a wide range of customer preferences and values.
        </p>
      </div>
    </div>
  );
};

export default Detail;
