import useTitle from "../../public/PageTitle/title";
import Heading from "../components/Heading";

const Statistics = () => {
  useTitle("Statistics");
  return (
    <div>
      <div>
        <Heading
          title={"Statistics"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>
    </div>
  );
};

export default Statistics;
