import useFetch from "../hooks/useFetch";
import "./Photos.css";

const randomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 80%, 55%)`;

const randomNames = [
  "accusamus beatae ad facilis cum similique",
  "reprehenderit est deserunt velit ipsam",
  "officia porro iure quia iusto qui ipsa ut",
  "culpa odio esse rerum omnis laboriosam",
  "natus nisi omnis corporis facere molestiae",
  "accusamus ea aliquid et amet sequi nemo",
  "officia delectus consequatur vero aut",
  "aut porro officiis laborum odit ea laudantium",
  "atque autem ipsa optio doloribus maiores",
  "explicabo voluptates animi",
  "asperiores dignissimos debitis eveniet",
  "iste accusamus numquam tempora aliquam",
  "illo voluptas id qui magni consequatur",
  "eum et voluptas et perferendis voluptas",
  "unde ea accusantium"
];

const Photos = () => {
  const { loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return (
      <div className="status-screen">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-screen">
        <h2>Error: Failed to fetch</h2>
      </div>
    );
  }

  const boxes = Array.from({ length: 40 });

  return (
    <div className="photos-container">
      <h1>Photos</h1>

      <div className="grid">
        {boxes.map((_, index) => (
          <div className="card" key={index}>
            <div
              className="color-box"
              style={{ backgroundColor: randomColor() }}
            >
              <span>600 × 600</span>
            </div>

            <p>{randomNames[index % randomNames.length]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
