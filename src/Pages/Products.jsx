import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import LoadingCard from "../components/LoadingCard";
const categories = [
  {
    id: 1,
    title: "Rocking Chair",
  },
  {
    id: 2,
    title: "Side Chair",
  },
  {
    id: 3,
    title: "Lounge Chair",
  },
];
const Products = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { chairs, isLoading } = useAuth();
  const [datas, setDatas] = useState(chairs);
  const category = params.get("category");
  const itemPerPage = 6;
  const totalItem = datas.length;
  const totalPages = Math.ceil(totalItem / itemPerPage);
  const [startItem, setStartItem] = useState(1);
  const startData = (startItem - 1) * itemPerPage;
  const endData = (startItem * itemPerPage) - 1;

  useEffect(() => {
    if(chairs && chairs.length > 0){
      setDatas(chairs)
    }
    if(category){
      const newData = chairs.filter(
        (item) => item.category === category.toLowerCase()
      );
      setDatas(newData)
    }
  },[category, chairs])

  const handleQuery = (query) => {
    setStartItem(1)
    const str = "?category=" + query;
    navigate(str);
  };
  return (
    <div className="flex gap-10 mb-16">
      <div className="border rounded-md w-[270px] px-6 space-y-4 py-5">
        {categories.map((item) => (
          <h2
            onClick={() => handleQuery(item?.title)}
            className={`btn w-full hover:bg-slate-800 hover:text-white ${
              category === item.title && "bg-black text-white"
            }`}
            key={item.id}
          >
            {item.title}
          </h2>
        ))}
      </div>
      <div className="flex-1 ">
        <div className="grid grid-cols-3 gap-6">
          {
            isLoading && [...Array(6).keys()].map((item, ind) => (
              <LoadingCard key={ind}/>
            ))
          }
          {datas?.slice(startData, endData+1)?.map((data) => (
            <Card key={data?._id} data={data} />
          ))}
        </div>
        <div className="flex justify-center ">
          <Pagination startItem={startItem} setStartItem={setStartItem} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Products;
