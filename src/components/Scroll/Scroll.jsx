import { useEffect, useRef, useState } from 'react';
import './Scroll.scss'

const Scroll = () => {
    const [status, setStatus] = useState(false);
    const main = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setscrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(document.documentElement.scrollTop);
            setscrollHeight(document.documentElement.scrollHeight);
            setStatus(document.documentElement.scrollTop >= 500);
        };        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <div className="Scroll" ref={main}>
            <div className="container">
                <div className="Scroll-block" >
                    <p className='Scroll-block-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum ut molestias impedit nesciunt. Assumenda sed ullam voluptatum quod illo delectus temporibus. Quos quo impedit tempora voluptatum ratione asperiores voluptatem?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ex error perferendis, est dignissimos recusandae aperiam nam voluptatem blanditiis dolore officia, culpa fugiat nesciunt repudiandae eligendi qui sit fugit maiores?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aperiam consequatur ut officia veritatis quos, nostrum libero ratione repudiandae dolorem molestiae quasi ducimus, quisquam eaque, suscipit cum veniam sunt fuga.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit aliquam nisi, accusamus aliquid expedita ipsum deleniti aut reiciendis vel provident quae magnam quisquam dolor esse in ipsam molestiae sapiente?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas beatae deleniti nemo accusantium sed est eum, error quasi aliquid exercitationem minus possimus, aliquam, harum molestias inventore consequatur perspiciatis quod dignissimos?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit perferendis commodi sunt. Optio facere in aut, harum distinctio quod, unde tempora officiis temporibus, deleniti quo odit earum nam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque dolorem, quos, voluptates corrupti molestiae vel nesciunt recusandae soluta laborum accusantium nemo aut, rerum ut dicta nihil minus! Adipisci, veniam.lore
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa aut nihil, error possimus reprehenderit consectetur cum! Cum quia rerum fugit dicta dolore, voluptatibus delectus commodi, totam iusto quibusdam explicabo?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus, repudiandae totam beatae dignissimos quaerat delectus at reiciendis quasi placeat sint reprehenderit nemo neque enim hic similique non dolorem voluptas.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur architecto harum suscipit, ad reprehenderit necessitatibus? Incidunt inventore ex quo tempore, rerum ea, vitae quam repellendus porro minima alias nobis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora officiis dolor ut accusamus id, nam quo et iusto sit totam in vitae nulla dolorum architecto. Omnis ipsa doloremque blanditiis dicta.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat blanditiis, temporibus consequuntur alias ab reiciendis quo voluptate similique consectetur fugit qui quod aliquam ipsum aliquid est et ea! Optio.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at aspernatur reprehenderit nisi? Minima libero autem accusamus ab natus doloribus sed id culpa possimus itaque iusto placeat, voluptas, asperiores repudiandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati facere facilis ea molestiae quos cupiditate inventore, itaque accusamus labore voluptatibus mollitia quis. Velit adipisci minus blanditiis officia repudiandae cum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ratione, optio ullam quam repellat hic? Cumque cum unde excepturi tempore laudantium. Aspernatur exercitationem odio labore deserunt assumenda culpa saepe quo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint, qui sapiente explicabo voluptatem atque illum reprehenderit accusantium facere! Exercitationem, nisi aliquid sequi doloremque ipsum fugiat consequatur deleniti ea ut?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat illum in voluptates deleniti autem quae corrupti odio dolores suscipit, numquam perferendis nisi magnam, modi vero. Sequi accusantium incidunt ad molestias!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officia repudiandae eius eos quae soluta eum, labore at voluptatem delectus nisi dolorem architecto nesciunt sunt. Possimus saepe accusamus necessitatibus veniam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo modi tenetur iste? Aperiam sint voluptatibus illum dicta praesentium commodi? Saepe cum vero est. Dicta dolorem adipisci quo, quas atque nostrum.lore
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus sed, perspiciatis totam qui maiores maxime porro, autem optio, dicta cum. Eius placeat aliquam soluta aspernatur tenetur pariatur aliquid nostrum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptas animi, dignissimos repellat perferendis delectus modi atque necessitatibus quibusdam fugit nemo ex deleniti, similique dicta doloremque magni quis culpa nesciunt!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, inventore necessitatibus accusamus non soluta magni voluptates magnam ipsam doloribus laudantium quaerat et incidunt fugit dicta amet aperiam hic? Omnis, placeat.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi cupiditate laudantium, ducimus aspernatur dolorem, aperiam exercitationem nostrum, cumque id dolores rerum ea quia est quo recusandae? Vel, ducimus earum! Praesentium.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci fugiat natus perferendis non? Nihil aut voluptatum modi quas iste, facilis perferendis possimus repellendus nesciunt dignissimos minus, eos libero illo ut?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ipsam pariatur harum doloribus expedita reiciendis labore voluptatibus vitae quas voluptas explicabo aliquid, saepe veritatis, dolore itaque eligendi sit vel non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ratione. Aspernatur similique quos voluptatem cumque assumenda, beatae totam amet harum consectetur veniam, unde pariatur saepe, dolore repellendus. Vitae, pariatur at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nostrum laborum ratione. Amet suscipit alias sequi dicta ipsum officiis iure beatae culpa facilis, voluptas sapiente perspiciatis itaque eius. Minima, officiis.
                    </p>
                    <div className="Scroll-block-button">
                        <button style={{ display: status ? "block" : "none" }} onClick={ScrollUp}><i className="fa-solid fa-arrow-up"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scroll;