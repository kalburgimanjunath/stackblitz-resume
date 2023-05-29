export default function Projects({ data }) {
  return (
    <div>
      <h3>Projects</h3>
      {data &&
        data.projects.map((item) => {
          return (
            <>
              <div style={{ width: 20, height: 20 }}>
                <img src={item.imageurl} style={{ width: 20, height: 20 }} />
              </div>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div>
                {item.tags &&
                  item.tags.map((tag) => {
                    return <span>{tag}</span>;
                  })}
              </div>
            </>
          );
        })}
    </div>
  );
}
