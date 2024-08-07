//import GiveBackPrice from "../Components/GiveBackPrice";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
// import { fetchProducts } from "../actions/productActions";
import Attributes from "./Attributes";
import GiveBackPrice from "./GiveBackPrice";

let priceUSD,
  symbolUSD,
  priceRUB,
  symbolRUB,
  priceJPY,
  symbolJPY,
  priceAUD,
  symbolAUD,
  priceGBP,
  symbolGBP,
  description,
  attributes;
let pictures = [];
let product = [];

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures,
      product,
      priceUSD,
      symbolUSD,
      priceRUB,
      symbolRUB,
      priceJPY,
      symbolJPY,
      priceAUD,
      symbolAUD,
      priceGBP,
      symbolGBP,
      description,
      attributes,
    };
  }
  //<button> click={(e) => this.props.addToCart(this.props.cartItems, item)}</button>
  componentDidMount() {
    const itemID = window.location.href.split("/item/")[1];
    //console.log(itemID);

    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query:
          `
            query {
                product(id: "` +
          itemID +
          `"){
                  name
                  inStock
                  gallery
                  description
                  category
                  brand
                  prices{
                    currency{
                      label
                      symbol
                    }
                    amount
                  }
                   attributes{
                      id
                      name
                      type
                      items{
                        displayValue
                        value
                        id
                      }
                    }
                  
                }
              }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        this.setState({ priceUSD: data.data.product.prices[0].amount });
        this.setState({
          symbolUSD: data.data.product.prices[0].currency.symbol,
        });

        this.setState({ priceGBP: data.data.product.prices[1].amount });
        this.setState({
          symbolGBP: data.data.product.prices[1].currency.symbol,
        });

        this.setState({ priceRUB: data.data.product.prices[4].amount });
        this.setState({
          symbolRUB: data.data.product.prices[4].currency.symbol,
        });

        this.setState({ priceJPY: data.data.product.prices[3].amount });
        this.setState({
          symbolJPY: data.data.product.prices[3].currency.symbol,
        });

        this.setState({ priceAUD: data.data.product.prices[2].amount });
        this.setState({
          symbolAUD: data.data.product.prices[2].currency.symbol,
        });
        let productwithID = data.data.product;
        productwithID.id = itemID;
        //console.log(productwithID);

        //let newObj = Object.assign(data.data.product, { 3: { name: "Lucas" } });
        //productwithID.push({id:itemID});
        this.setState({ product: productwithID });
        let cleanText = data.data.product.description.replace(
          /<\/?[^>]+(>|$)/g,
          ""
        );
        this.setState({ description: cleanText });

        this.setState({ pictures: data.data.product.gallery });
        this.setState({ attributes: data.data.product.attributes });
      });
  }

  render() {
    //console.log("toimin")
    //console.log(this.state)
    /*return (<div>jou</div>) */
    const onAttributeSelect = () => {
      const itemID = window.location.href.split("/item/")[1];

      let productwithID = this.state.product;
      let howmanyAttributes = this.state.product.attributes.length;
      let attributes = [];
      let integer;
      let json;
      let name = itemID;

      for (integer = 0; integer < howmanyAttributes; integer++) {
        if (
          this.state.product.attributes[integer].name === "With USB 3 ports" ||
          this.state.product.attributes[integer].name === "Touch ID in keyboard"
        ) {
          if (
            this.state.product.attributes[integer].name === "With USB 3 ports"
          ) {
            //console.log(this.state.product.attributes[integer].name)
            //console.log(document.querySelector('input[name='+this.state.product.attributes[integer].name+']:checked').value)
            let name2 = this.state.product.attributes[integer].name;
            let nimeke = name + name2;
            json = {
              name: nimeke,
              value: document.querySelectorAll(
                '[name="apple-imac-2021With USB 3 ports"]:checked'
              )[0].value,
            };
          } else if (
            this.state.product.attributes[integer].name ===
            "Touch ID in keyboard"
          ) {
            let name2 = this.state.product.attributes[integer].name;
            let nimeke = name + name2;
            json = {
              name: nimeke,
              value: document.querySelectorAll(
                '[name="apple-imac-2021Touch ID in keyboard"]:checked'
              )[0].value,
            };
          }
        } else {
          //for some reason this doesnt work with the macbook
          let name2 = this.state.product.attributes[integer].name;
          let nimeke = name + name2;
          json = {
            name: nimeke,
            value: document.querySelector("input[name=" + nimeke + "]:checked")
              .value,
          };
        }

        //console.log(document.querySelectorAll('[name="With USB 3 ports"]:checked')[0].value)

        attributes[integer] = json;
      }
      productwithID.selectedAttributes = attributes;
      //console.log(productwithID);

      this.props.addToCart(this.props.cartItems, productwithID);
    };
    const itemID = window.location.href.split("/item/")[1];
    if (this.state.pictures.length === 1) {
      if (this.state.product.inStock === true) {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <button
                  onClick={(e) => {
                    //console.log(document.querySelector('input[name=Color]:checked').value);
                    onAttributeSelect();
                    //this.props.addToCart(this.props.cartItems, this.state.product)
                  }}
                >
                  Add to Cart{" "}
                </button>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <div>PRODUCT IS NOT IN STOCK</div>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      }
    } else if (pictures.length === 2) {
      if (this.state.product.inStock === true) {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <button
                  onClick={(e) => {
                    //console.log(document.querySelector('input[name=Color]:checked').value);
                    onAttributeSelect();
                    //this.props.addToCart(this.props.cartItems, this.state.product)
                  }}
                >
                  Add to Cart{" "}
                </button>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <div>PRODUCT IS NOT IN STOCK</div>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      }
    } else if (pictures.length === 3) {
      if (this.state.product.inStock === true) {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <button
                  onClick={(e) => {
                    //console.log(document.querySelector('input[name=Color]:checked').value);
                    onAttributeSelect();
                    //this.props.addToCart(this.props.cartItems, this.state.product)
                  }}
                >
                  Add to Cart{" "}
                </button>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                style={{ opacity: 0 }}
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <div>PRODUCT IS NOT IN STOCK</div>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      if (this.state.product.inStock === true) {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <button
                  onClick={(e) => {
                    //console.log(document.querySelector('input[name=Color]:checked').value);
                    onAttributeSelect();
                    //this.props.addToCart(this.props.cartItems, this.state.product)
                  }}
                >
                  Add to Cart{" "}
                </button>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Detailed view</h1>
            <div className="grid-container">
              <img
                className="itemPicturel itemPicture1"
                src={this.state.pictures[1]}
              ></img>

              <img
                className="itemPicturel itemPicture2"
                src={this.state.pictures[3]}
              ></img>

              <img className="itemPicture4" src={this.state.pictures[0]}></img>
              <img
                className="itemPicturel itemPicture3"
                src={this.state.pictures[2]}
              ></img>
              <div className="innerdetails-grid">
                <h2 className="brandName">{this.state.product.brand}</h2>
                <p className="itemNamel">{this.state.product.name}</p>

                <GiveBackPrice
                  currency={this.props.currency}
                  priceUSD={this.state.priceUSD}
                  symbolUSD={this.state.symbolUSD}
                  priceGBP={this.state.priceGBP}
                  symbolGBP={this.state.symbolGBP}
                  priceRUB={this.state.priceRUB}
                  symbolRUB={this.state.symbolRUB}
                  priceAUD={this.state.priceAUD}
                  symbolAUD={this.state.symbolAUD}
                  priceJPY={this.state.priceJPY}
                  symbolJPY={this.state.symbolJPY}
                />
                <div className="allOptions">
                  <Attributes
                    attributes={this.state.attributes}
                    itemid={itemID}
                  />
                </div>
                <br />
                <br />
                <div>PRODUCT IS NOT IN STOCK</div>
                <br />
                <br />
                <div className="description">{this.state.description}</div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.items,
  currency: state.currency.value,
});
export default connect(mapStateToProps, { addToCart })(SingleItem);
