import React from "react";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.article = props.article;
  }

  render() {
    return (
      <div className="article-card">
        <img className="article-image" src={this.article.image} />
        <h2 className="article-title">{this.article.articleName}</h2>
        <div className="article-details">
          <img className="article-user-pic" src={this.article.userPic} />
          <div className="size-price">
            <span className="article-price">{this.article.price} DT</span>
            <span>{this.article.size}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default ArticleCard;
