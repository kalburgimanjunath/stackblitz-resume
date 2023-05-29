export default function Hero({ data }) {
  console.log(data);
  return (
    <div>
      <h4>Manjunath Kalburgi</h4>
      <h5>Building Passive income ideas | All in One other cool things</h5>
      <p>
        {data && data.bio ? data.bio : ''}Find me on Twitter for tech updates
        and memes.
      </p>
    </div>
  );
}
