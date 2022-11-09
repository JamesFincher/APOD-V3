import { useEffect, useState } from "react";
import { ReactElement } from "react";
import Layout from "./layout";
import ApodToday from "./components/APOD/ApodToday";
import type { NextPageWithLayout } from "./_app";
import { ApodDataType } from "./index.D";

const Page: NextPageWithLayout = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const apodUrl = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/apod");
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return <ApodToday data={data} error={error} loading={loading} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
