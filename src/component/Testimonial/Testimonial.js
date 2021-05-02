import React from 'react';

const Testimonial = () => {
    return (
        <div className="row testimonials mb-50">
            <div className="col-md-12">
                <div className="subheading">
                    <h3>Testimonials</h3>
                </div>
                <div className="owl-carousel owl-theme">

                    <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>
                        </div>
                        <div className="testimonial-meta">
                            <img src="img/testimonials/author-1.jpg" alt="" />
                            <div className="meta-info">
                                <h4>Kate Fox</h4>
                                <p>Digital Marketing Executive</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>
                        </div>
                        <div className="testimonial-meta">
                            <img src="img/testimonials/author-2.jpg" alt="" />
                            <div className="meta-info">
                                <h4>Emma Jones</h4>
                                <p>Creative Director</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>
                        </div>
                        <div className="testimonial-meta">
                            <img src="img/testimonials/author-3.jpg" alt="" />
                            <div className="meta-info">
                                <h4>Jack Smith</h4>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Testimonial;