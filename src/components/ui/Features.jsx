import { features } from "../../../constants";
import Button from "./Button";
import Heading from "./Heading";

const Features = () => {
  return (
    <section>
      <div>
        <Heading
          heading={"More than just a newsletter"}
          subheading={
            "Unlock the automated quality experience for everyone in the team."
          }
        />
      </div>

      <div className="py-24 flex md:mx-14  xl:mx-16 md  flex-col gap-4 md:gap-16 lg:grid lg:grid-cols-2">
        {/* <div className="feature w-[90%] flex flex-col justify-center items-center place-items-center  md:w-full mx-auto">
          <div className="bg w-full h-[400px] bg-lightgreen  mx-auto lg:mx-0 place-items-center flex justify-center items-center rounded-[24px]">
            <div className="w-[300px] lg:w-[400px] lg:h-[350px]  h-[270px] mx-auto lg:mx-0 flex place-items-center">
              <img
                src="./assets/images/feature_img-1.png"
                alt=""
                className="w-full text-center place-items-center h-full justify-center items-center object-contain"
              />
            </div>
          </div>

          <div className="py-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">
                Collect the needed information and see the result easily
              </h1>
              <p>Collect the needed information and see the result easily</p>
            </div>
            <div className="mt-6">
              <Button title={"Get start for free"} />
            </div>
          </div>
        </div> */}

        {features.map((feature) => (
          <Feature
            title={feature.title}
            key={feature.id}
            description={feature.description}
            imageUrl={feature.image}
          />
        ))}

        {/* <div className="feature w-[90%] lg:w-[700px]  mx-auto">
          <div className="bg bg-lightgreen w-[383px] mx-auto place-items-center flex justify-center items-center  h-[326px] rounded-[30px]">
            <div className="w-[313px] h-[270px] mx-auto flex place-items-center">
              <img
                src="./assets/images/feature_img-1.png"
                alt=""
                className="w-full h-full justify-center items-center"
              />
            </div>
          </div>
        </div>

        <div className="feature w-[90%] lg:w-[700px]  mx-auto">
          <div className="bg bg-lightgreen w-[383px] mx-auto place-items-center flex justify-center items-center  h-[326px] rounded-[30px]">
            <div className="w-[313px] h-[270px] mx-auto flex place-items-center">
              <img
                src="./assets/images/feature_img-1.png"
                alt=""
                className="w-full h-full justify-center items-center"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

const Feature = ({ title, description, imageUrl }) => {
  return (
    <div className="feature w-[80%] max-h-[720px] flex flex-col justify-center  items-center place-items-center  md:w-full mx-auto">
      <div className="bg w-full min-h-[350px] max-h-[350px] md:min-h-[450px] md:max-h-[450px] bg-lightgreen  mx-auto lg:mx-0 place-items-center flex justify-center items-center rounded-[24px]">
        <div className="w-[300px] lg:w-[400px] lg:h-[350px]  h-[270px] mx-auto lg:mx-0 flex place-items-center">
          <img
            src={imageUrl}
            alt=""
            className="w-full text-center place-items-center h-full justify-center items-center object-contain"
          />
        </div>
      </div>

      <div className="py-8  md:h-[290px] flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p> {description} </p>
        </div>
        <div className="my-10 lg:my-0">
          <Button title={"Get start for free"} className={"text-white"} />
        </div>
      </div>
    </div>
  );
};

export default Features;
