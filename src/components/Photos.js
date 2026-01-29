import useFetch from "../hooks/useFetch";
import "./Photos.css";

const Photos = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="photos-container">
      <h1>Products from API</h1>

      <div className="grid">
        {data.slice(0, 20).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
