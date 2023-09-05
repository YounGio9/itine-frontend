import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="full">
                <form action="index.html">
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Enter subject"
                      name="subject"
                      required
                    />
                    <textarea
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <input type="submit" value="Submit" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="arrival_section">
        <div class="container">
          <div class="box">
            <div class="arrival_bg_box">
              <img src="images/arrival-bg.png" alt="" />
            </div>
            <div class="row">
              <div class="col-md-6 ml-auto">
                <div class="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p style={{ marginTop: 20, marginBottom: 30 }}>
                  Vitae fugiat laboriosam officia perferendis provident aliquid
                  voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                  Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem
                  similique ex unde!
                </p>
                <Link to="">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
