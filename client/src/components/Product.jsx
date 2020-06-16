import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return <div>This is one product with id {id}</div>;
}
