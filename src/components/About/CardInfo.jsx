
const CardInfo = ({ number, title }) => {
  return (
    <article className="h-36 w-full shadow p-4 space-y-2 border rounded-md hover:-translate-y-2 duration-300">
      <h1 className="text-blue-400 text-4xl"> {number} </h1>
      <p className="w-full text-white text-xl">{title}</p>
    </article>
  );
};

export default CardInfo;
