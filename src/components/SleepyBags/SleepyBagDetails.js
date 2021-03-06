import React, { Component } from "react";
import { connect } from "react-redux";
import { getSleepingBag } from "../../ducks/reducer";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';


class SleepyBagDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sleeping_bag: {},
      toggle: false
    };
  }

  notify = () => toast('Item Added!')
  

  componentWillMount() {
    axios
      .get(`/api/sleepybag/${this.props.match.params.id}`)
      .then(response => {
        console.log(this.state.sleeping_bag);

        this.setState({ sleeping_bag: response.data[0] });
      })
      .catch(console.log);
  }

  addToCart() {
    axios.post("/api/layaway", { itemId: this.props.match.params.id });
    this.setState({ toggle: !this.state.toggle });
    console.log("asdf");
  }

  render() {
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      pauseOnHover: false
    };
    return (
      <div className="SimpleSlider sleepy-details">
        <Navbar />
        <ToastContainer position = 'bottom-right'/>
        <div className = 'cartbtn'>
             <a>
             <button className="sleepyorders" onClick={() => {
                 this.addToCart(); this.notify();
               }}> 
               ADD TO CART!
             </button>
           </a>
        </div>
        <div className = 'sleepytitle'>{this.state.sleeping_bag.product_name}</div>
        <Slider {...settings}>
          <a>
            <img className="imrg sleepybag" src={this.state.sleeping_bag.img_2} alt="" />
          </a>
          <a>
            <img className="imrg sleepybag" src={this.state.sleeping_bag.img_3} alt="" />
          </a>
          <a>
            <img className="imrg sleepybag" src={this.state.sleeping_bag.img_4} alt="" />
          </a>
        </Slider>
        <div className="sleepydescription">{this.state.sleeping_bag.description}</div>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Raleway');
        </style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getSleepingBag })(SleepyBagDetails);



// was right under sleepingbag description


// {this.state.toggle ? (
//   <a href={process.env.REACT_APP_LOGIN}>
//     <button>Please Login</button>
//   </a>
// ) : null}
// <a>
//   <button
//     className="btn"
//     onClick={() => {
//       this.addToCart();
//     }}
//   >
//     add to cart
//   </button>
// </a>