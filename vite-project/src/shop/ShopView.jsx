import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGoods } from "./shopSlice";
import { ShopItem } from "../components/ShopItem";

export const ShopView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, []);
  return (
    <>
      <ShopItem />
    </>
  );
};
