import { NextPage } from "next";
import { ApodDataType, Props } from "pages/index.D";
import React from "react";
import Image from "next/image";
const ApodToday: NextPage<Props> = (props) => {
  const { data, error, loading } = props;

  const { date, explanation, hdurl, media_type, service_version, title, url } =
    data || {};

  console.log(data);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="text-center bg-base-content text-neutral-content">
        <h2>
          {title} <br />
        </h2>
        <h4>{date}</h4>
      </div>
      <div className="text-center bg-neutral text-neutral-content">
        <img className="p-10" src={url} alt={title} />
        <p>{explanation}</p>
      </div>
    </div>
  );
};
export default ApodToday;
