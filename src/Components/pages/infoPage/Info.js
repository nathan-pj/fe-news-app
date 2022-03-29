import "./Info.css";
export default function Info() {
  return (
    <div>
      <h1 className="title">About this app </h1>
      <p className="paragraph">
        This app is built off the news API back end that I made:
        <br />
        <a
          href=" https://news-app-npj.herokuapp.com/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku
        </a>
        <br />
        <a
          href="https://github.com/nathan-pj/news-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br />
        <br />
        <p>
          To interact with my backend API, I created endpoints to receive and
          send data.
        </p>
        <div className="endpoints">
          <p>
            For example: <br /> <br />
            GET "https://news-app-npj.herokuapp.com/api/articles" - fetches all
            articles for me to display on the main page.
          </p>
          <p>
            GET "https://news-app-npj.herokuapp.com/api/articles/32/comments"
            fetches the comments for article 32.
          </p>
          Visit the heroku link given above to see all available endpoints
        </div>
      </p>
    </div>
  );
}
