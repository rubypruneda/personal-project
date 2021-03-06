import React, { Component } from "react";
import { connect } from "react-redux";
import "./Tent.css";
import { getTent } from "../../ducks/reducer";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';

class TentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tent: {},
      toggle: false
    };
  }




  
  notify = () => toast('Item Added!')

  componentWillMount() {
    axios
      .get(`/api/tent/${this.props.match.params.id} `)
      .then(response => {
        console.log(response);
        this.setState({
          tent: response.data[0]
        });
      })
      .catch(console.log);
  }

  addToCart() {
    axios.post("/api/layaway", {
      itemId: this.props.match.params.id
    });
    this.setState({
      toggle: !this.state.toggle
    });
    console.log("asdf");
    console.log(this.props.match.params.id);
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
      <div className="SimpleSlider tent-details">
        
        <Navbar />
        <ToastContainer position = 'bottom-right'/>
        <div className = 'cartbtn'>
             <a>
             <button className="order" onClick={() => {
                 this.addToCart(); this.notify();
               }}> 
               ADD ME TO CART!
             </button>
           </a>
        </div>
        <div className="title"> {this.state.tent.product_name} </div>
        <Slider {...settings}>
          <a>
            <img className="imrg tent" src={this.state.tent.img_2} alt="" />
          </a>
          <a>
            <img className="imrg tent" src={this.state.tent.img_3} alt="" />
          </a>
          <a>
            <img className="imrg tent" src={this.state.tent.img_4} alt="" />
          </a>
        </Slider>
        <div className="description">{this.state.tent.description}</div>
        
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

export default connect(mapStateToProps, { getTent })(TentDetails);



// was right under tent description

// {this.state.toggle ? (
//           <a href={process.env.REACT_APP_LOGIN}>
//             <button> Login </button>
//           </a>
//         ) : null}
//         <div className="cartbtn">
//           <a>
//             <button
//               className="btn"
//               onClick={() => {
//                 this.addToCart();
//               }}
//             >
//               {" "}
//               add to cart
//             </button>
//             <button onClick={this.notify}>Notify !</button>
//           </a>
//         </div>
