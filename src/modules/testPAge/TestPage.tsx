import { GetServerSideProps } from "next";
import style from "./TestPage.module.scss";

const TestPage = () => {
  return <div className={style.ali}>Enter</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default TestPage;
