export const POST = ({ items, title }) => {
  return (
    <div className="m-1 p-3 bg-white-100">
      <h3 className="text-4lx mb-2">{title}</h3>
      <div className="grid grid-cols-2">
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
      </div>
    </div>
  );
};
