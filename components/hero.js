import React from "react";

export default function Hero(props) {
  console.log(props);
  return (
    <section className="w-5/12 m-auto">
      <h1 className="font-bold text-6xl text-center">
        {props.title}
      </h1>
      <p className="text-center mt-4">Unlock the secrets of the sea.</p>
    </section>
  );
}
