import React from "react";
import { connect } from "react-redux";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddArticleDisplayed: false,
      newArticle: []
    };
  }
  toggleIsAddArticleDisplayed = () => {
    this.setState({
      isAddArticleDisplayed: !this.state.isAddArticleDisplayed
    });
  };

  handleState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let user = this.props.user;
    return (
      <div className="user-profile">
        {!this.state.isAddArticleDisplayed ? (
          <div>
            <img src={user.coverPhoto} className="cover-photo" />
            <img className="profile-pic" src={user.profilePic} />
            <h4 className="profile-text">Bienvenue {user.name} !</h4>
            <div className="profile-article">
              <input
                type="button"
                value="+ Je vends un article"
                className="profile-add-button"
                onClick={this.toggleIsAddArticleDisplayed}
              />
              <div className="user-numbers">
                <div className="user-numbers-item">
                  <div>Article</div>
                  <div>{user.nbrArticle}</div>
                </div>
                <div className="user-numbers-item">
                  <div>Abonnées</div>
                  <div>{user.nbrAbonnées}</div>
                </div>
                <div className="user-numbers-item">
                  <div>Suivies</div>
                  <div>{user.nbrSuivies}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="add-article">
            <h2 className="add-article-title">Décris ton article !</h2>
            <input
              type="text"
              placeholder="Objet à vendre"
              name="articleName"
              className="add-article-input"
            />
            <input
              type="text"
              placeholder="Taille"
              name="size"
              onChange={this.handleState}
              value={this.state.name}
              className="add-article-input"
            />
            <input
              type="text"
              placeholder="Prix"
              name="price"
              onChange={this.handleState}
              value={this.state.name}
              className="add-article-input"
            />
            <input
              type="text"
              placeholder="Lien de l'image"
              name="image"
              onChange={this.handleState}
              value={this.state.name}
              className="add-article-input"
            />
            <input
              className="add-article-button"
              type="button"
              value="Je vends"
              onClick={() => {
                this.props.addArticle({
                  ...this.state,
                  id: this.props.articles[this.props.articles.length - 1].id + 1
                });
              }}
            />
            {console.log(this.state.articles)}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addArticle: data => {
      dispatch({
        type: "ADD_ARTICLE",
        data: data
      });
    }
  };
};
const ArticleListContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserProfile
);

export default ArticleListContainer;
