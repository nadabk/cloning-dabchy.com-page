import React from "react";
import NavMenu from "./NavMenu.js";
import UserProfile from "./UserProfile.js";
import Articles from "./Articles.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.articlesList = [
      {
        id: 0,
        image:
          "http://www.clicepi.fr/1395-large_default/chaussure-de-securite-predator-s3.jpg",
        price: 35,
        articleName: "Chaussure",
        size: "38/M",
        userPic:
          "data:image/jpeg;base64,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"
      },
      {
        id: 1,
        image:
          "https://img.bonoboplanet.com/products_images/prod_65971/i_robe-ceinture-ethnique-bonobo-BLEU-NIGHT-frontg-590.jpg",
        price: 50,
        articleName: "Robe",
        size: "37/S",
        userPic: "http://www.allwhitebackground.com/images/3/4218.jpg"
      },
      {
        id: 3,
        image:
          "https://www.monsieur-max.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/D/U/DUKE-LONDON-H17-D555-PULL-COL-ROND-REINDEER-KS18338-BLEU-1.jpg",
        price: 50,
        articleName: "Pull",
        size: "38/M",
        userPic: "http://www.allwhitebackground.com/images/3/4218.jpg"
      }
    ];
  }

  render() {
    return (
      <div className="main">
        <UserProfile
          user={{
            name: "Sarrah",
            profilePic:
              "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_1.0,f_auto,fl_lossy,q_80,w_1100/teresa_mosqueda_city_council_position_8_jl9akj.jpg",
            coverPhoto:
              "http://financeblvd.com/wp-content/uploads/2017/05/woman-shopping.jpg",
            nbrArticle: 0,
            nbrAbonnées: 0,
            nbrSuivies: 0
          }}
        />
        <Articles articles={this.articlesList} />
      </div>
    );
  }
}

export default Main;
