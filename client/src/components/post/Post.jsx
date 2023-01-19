import "./post.scss";

const Post = () => {
  return (
    <article>
      <div className="postWrapper">
        <section className="left">
          <img src="https://images.unsplash.com/photo-1619676289827-3b6eefa7ff93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </section>

        <section className="middle">
          <h1>Tower Street Aparment</h1>
          <span>500m from center</span>

          <span className="free">Free airport taxi</span>

          <span className="bold">Studio aparment with air conditioning</span>
          <span className="size">Entire studio - 1 bathroom - 210sqft 1 full bed</span>

          <div className="cancel">
            <h2>Free cancellation</h2>
            <p>You can cancel later, so lock in this great price today!</p>
          </div> 
        </section>

        <section className="right">
            <div className="rating">
              <span>Execllent</span>
              <button>8.9</button>
            </div>

            <div className="price">
              <h3>$112</h3>
              <span>Includes taxes and fees</span>
              <button>See availability</button>
            </div>
        </section>
      </div> 
    </article>
  )
}

export default Post
