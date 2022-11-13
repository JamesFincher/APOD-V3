import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { Props, ApodDataType } from "../../../types";
const ApodToday: NextPage<Props> = (props) => {
  const { data, error, loading } = props;

  const { date, explanation, hdurl, media_type, service_version, title, url } =
    data || {};

  console.log(data);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="text-center p-1.5 bg-base-content text-neutral-content">
        <h2>
          {title} <br />
        </h2>
        <h4>{date}</h4>
      </div>
      <div className="text-center bg-neutral text-neutral-content">
        <img
          className="mx-auto justify-center items-center pt-5"
          src={url}
          alt={title}
        />
        <p className="p-5 mx-10 flex text-center justify-center">
          {explanation}
        </p>
      </div>
    </div>
  );
};
export default ApodToday;
