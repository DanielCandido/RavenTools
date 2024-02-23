"use client";

import Image from "next/image";
import { normalizeImageName } from "@/helpers/normalizeImageName";
import React from "react";

interface Props {
  name: string;
  type: "products" | "tradepacks";
  width?: number;
  height?: number;
  ext?: string;
}

const Icon = ({ name, height = 40, width = 40, type, ext = "png" }: Props) => {
  const [error, setError] = React.useState(false);
  const defaultSrc = "/assets/not_found.png";
  const src = `/assets/${type}/${normalizeImageName(name)}.${ext}`;

  return (
    <Image
      alt={name}
      src={!error ? src : defaultSrc}
      width={width}
      height={height}
      onError={(event) => setError(true)}
      onEmptied={() => setError(true)}
    />
  );
};

export default Icon;
