export const POST = ({ items, title }) => {
  return (
    <>
      <h3>{title}</h3>
      {items &&
        items.map((item) => {
          return (
            <>
              <div className="post-item">
                <h6>{item.title}</h6>
                <div>{item.subtitle}</div>
                <div>{item.description}</div>
              </div>
            </>
          );
        })}
    </>
  );
};
