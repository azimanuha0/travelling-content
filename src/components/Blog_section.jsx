import React from "react";
export default function Blog_section() {
    return (
        <section className="blog-section" id="blog">
            <h2>Latest Blog Posts</h2>
            <div className="blog-posts">
                <article className="blog-post">
                    <h3>Exploring the Alps</h3>
                    <p>Discover the breathtaking beauty of the Alps, from stunning mountain vistas to charming villages. Join us as we explore hiking trails, ski resorts, and local culture in this unforgettable destination.</p>
                    <a href="#">Read more...</a>
                </article>
                <article className="blog-post">
                    <h3>Beach Hopping in Thailand</h3>
                    <p>Thailand is home to some of the world's most beautiful beaches. In this blog post, we take you on a tour of the best beach destinations, from the bustling shores of Phuket to the tranquil islands of Koh Lipe.</p>
                    <a href="#">Read more...</a>
                </article>
                <article className="blog-post">
                    <h3>Cultural Highlights of Rome</h3>
                    <p>Rome is a city rich in history and culture. Join us as we explore iconic landmarks such as the Colosseum, Vatican City, and the Pantheon, while also uncovering hidden gems and local favorites.</p>
                    <a href="#">Read more...</a>
                </article>
            </div>
        </section>
    );
}