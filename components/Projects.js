export default function Projects({ data, title }) {
  return (
    <div className="cards">
      <h3>{title}</h3>
      <div className="cards-container">
        {data &&
          data.map((item) => {
            return (
              <div className="card">
                {/* <div style={{ width: 20, height: 20 }}>
                <img src={item.imageurl} style={{ width: 20, height: 20 }} />
              </div> */}
                <h5>{item.title}</h5>
                <div>{item.description}</div>
                <div className="tags">
                  {item.tags &&
                    item.tags.map((tag) => {
                      return <span>{tag}</span>;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
