import React from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

interface props {
   placeholder: string;
   searchParamKey: string;
   onSearch: (value: string) => void;
}

const Index = ({ placeholder, searchParamKey, onSearch }: props) => {
   const navigate = useNavigate();
   const { search } = useLocation();

   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onSearch(value);
      const search_params = new URLSearchParams(search);
      search_params.set(searchParamKey, value);
      navigate(`?${search_params}`);
   };

   return (
      <Input
         placeholder={placeholder}
         onChange={handleSearch}
         allowClear
         className="w-[300px]"
      />
   );
};

export default Index;
