import Image from "next/image";

const page = () => {
  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold  text-gray-900 dark:text-gray-50">
          Our Story
        </h1>
        <Image src="/assets/about.jpg" width={600} height={600} />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-gray-50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          officia asperiores, saepe illum veritatis perspiciatis, reprehenderit
          placeat nisi a nobis voluptatem dolore numquam porro necessitatibus
          rerum? Aliquam id repudiandae culpa!
        </p>
        <Image
        src='/assets/signature.png'
        width={300}
        height={300}
        alt="blog-talk"/>
      </div>
    </div>
  );
};

export default page;
