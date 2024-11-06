import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Scatter,
} from "recharts";
import useTitle from "../../public/PageTitle/title";
import Heading from "../components/Heading";

const Statistics = () => {
  useTitle("Statistics");
  const allGadgets = useLoaderData();

  const chartData = allGadgets.map((gadget) => ({
    name: gadget.product_title,
    price: gadget.price,
    rating: gadget.rating,
  }));
  console.log(chartData[0].rating);

  return (
    <section>
      <div className="bg-[#9538E2] text-white py-10">
        <div className="md:w-7/12 w-11/12 mx-auto">
          <Heading
            title={"Statistics"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
        </div>
      </div>

      <div className="w-11/12 mx-auto my-10 h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
