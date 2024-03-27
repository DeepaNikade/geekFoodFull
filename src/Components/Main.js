import Button from "./Button";
import "./Main.css";
// import  Button  from "./Button.js";

function MainPage() {
  return (
    <div className="themainpart">
      <div>
        <h1>
          <span>Let us find your</span>
          <br />
          <span id="span2">Forever Food</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br />
          Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="buttonsection">
          <Button
            padding="0.625rem 2rem"
            borderRadius="8px"
            backgroundColor="#aa1d1d"
            color="#ffffff"
          >
            Search Now
          </Button>
          <Button
            padding="0.625rem 2rem"
            borderRadius="8px"
            backgroundColor="#ffffff"
            color="#aa1d1d"

          >
            Know more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
