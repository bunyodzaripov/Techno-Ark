import { useParams } from "react-router";

const Index = () => {
   const { id } = useParams();
   return <div className="text-3xl">Product Details: {id}</div>;
};

export default Index;
