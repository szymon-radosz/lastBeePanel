import React, { Component } from "react";

class OfferListTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      page_url: "",
      img_url: "",
      brand: "",
      type: "",
      status: "",
      price: "",
      currency: "",
      confirmed_brand: "",
      id: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);
  }

  changeCheckbox() {
    if (this.state.status == 1) {
      this.setState({ status: 0 });
    } else {
      this.setState({ status: 1 });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.setState({
      id: this.props.offer.id,
      title: this.props.offer.title,
      description: this.props.offer.description,
      page_url: this.props.offer.page_url,
      img_url: this.props.offer.img_url,
      brand: this.props.offer.brand,
      type: this.props.offer.type,
      status: this.props.offer.status,
      price: this.props.offer.price,
      currency: this.props.offer.currency,
      confirmed_brand: this.props.offer.confirmed_brand
    });
  }

  render() {
    return (
      <tr
        className={
          this.props.offer.confirmed_brand == 1
            ? "OfferListTableRowTr"
            : "OfferListTableRowRed"
        }
      >
        <td className="text-center offerTitle">
          <div className="form-group">
            <textarea
              className="OfferListTableRowTitle form-control"
              name="title"
              value={this.state.title}
              onChange={async e => {
                await this.handleChange(e);
                await this.props.handleOfferChange(
                  this.props.offerIndex,
                  "title",
                  this.state.title
                );
              }}
            />
          </div>
        </td>
        {/*<td className="text-center">
                    <div className="form-group">
                        <textarea
                            className="OfferListTableRowDesc form-control"
                            name="description"
                            value={this.state.description}
                            onChange={async e => {
                                await this.handleChange(e);
                                await this.props.handleOfferChange(
                                    this.props.offerIndex,
                                    "description",
                                    this.state.description
                                );
                            }}
                        />
                    </div>
                </td>*/}
        {/*<td className="text-center">
                    <div className="form-group">
                        <input
                            name="page_url"
                            className="OfferListTableRowPageUrl form-control"
                            value={this.state.page_url}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>
                <td className="text-center">
                    <div className="form-group">
                        <input
                            name="img_url"
                            className="OfferListTableRowImgUrl form-control"
                            value={this.state.img_url}
                            onChange={this.handleChange}
                        />
                    </div>
                </td>*/}
        <td className="text-center">
          <div className="form-group">
            <input
              name="brand"
              className="OfferListTableRowBrand form-control"
              value={this.state.brand}
              onChange={async e => {
                await this.handleChange(e);
                await this.props.handleOfferChange(
                  this.props.offerIndex,
                  "brand",
                  this.state.brand
                );
              }}
            />
          </div>
        </td>
        <td className="text-center">
          <div className="form-group">
            <select
              name="type"
              className="OfferListTableRowType form-control"
              value={this.state.type}
              onChange={async e => {
                await this.handleChange(e);
                await this.props.handleOfferChange(
                  this.props.offerIndex,
                  "type",
                  this.state.type
                );
              }}
            >
              <option>{this.state.type}</option>
              <option>Flights</option>
              <option>Vacations</option>
              <option>Accomodation</option>
            </select>
          </div>
        </td>
        <td className="text-center offerPrice">
          <div className="form-group">
            <input
              name="price"
              className="OfferListTableRowBrand form-control"
              value={this.state.price}
              onChange={async e => {
                await this.handleChange(e);
                await this.props.handleOfferChange(
                  this.props.offerIndex,
                  "price",
                  this.state.price
                );
              }}
            />
          </div>
        </td>
        <td className="text-center">
          <div className="form-group ">
            <select
              name="currency"
              className="form-control"
              value={this.state.currency}
              onChange={async e => {
                await this.handleChange(e);
                await this.props.handleOfferChange(
                  this.props.offerIndex,
                  "currency",
                  this.state.currency
                );
              }}
            >
              <option>{this.state.currency}</option>
              <option>USD</option>
              <option>GBP</option>
            </select>
          </div>
        </td>
        <td className="text-center">
          <div className="form-group ">
            {/*<select
                            name="status"
                            className="form-control"
                            value={this.state.status}
                            onChange={async e => {
                                await this.handleChange(e);
                                await this.props.handleOfferChange(
                                    this.props.offerIndex,
                                    "status",
                                    this.state.status
                                );
                            }}
                        >
                            <option>{this.state.status}</option>
                            <option>0</option>
                            <option>1</option>
                        </select>*/}

            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  onChange={async e => {
                    await this.changeCheckbox();
                    await this.props.handleOfferChange(
                      this.props.offerIndex,
                      "status",
                      this.state.status
                    );
                  }}
                  checked={this.state.status == 1 ? true : false}
                />
              </label>
            </div>
          </div>
        </td>
        {/*<td className="text-center">
                    <div className="form-group ">
                        <select
                            name="confirmed_brand"
                            className="form-control"
                            value={this.state.confirmed_brand}
                            onChange={async e => {
                                await this.handleChange(e);
                                await this.props.handleOfferChange(
                                    this.props.offerIndex,
                                    "confirmed_brand",
                                    this.state.confirmed_brand
                                );
                            }}
                        >
                            <option>{this.state.confirmed_brand}</option>
                            <option>0</option>
                            <option>1</option>
                        </select>
                    </div>
                        </td>*/}
        <td className="text-center">
          <div
            className="btn blueBtn"
            onClick={() =>
              this.props.updateOffer(
                this.state.id,
                this.state.title,
                this.state.description,
                this.state.page_url,
                this.state.img_url,
                this.state.brand,
                this.state.type,
                this.state.status,
                this.state.price,
                this.state.currency,
                this.state.confirmed_brand
              )
            }
          >
            Save
          </div>
        </td>
      </tr>
    );
  }
}

export default OfferListTableRow;
