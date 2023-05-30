export default function Hero({ data }) {
  console.log(data);
  return (
    <div className="p-24">
      <h4 className="text-lg">Manjunath Kalburgi</h4>
      <h5>Building Passive income ideas | All in One other cool things</h5>
      <p>
        {data && data.bio ? data.bio : ''}Find me on Twitter for tech updates
        and memes.
      </p>
    </div>
  );
}
