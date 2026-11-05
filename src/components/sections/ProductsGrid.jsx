import wineImg from '../../assets/hero_1.jpg'
import beerImg from '../../assets/hero_2.jpg'
import licorImg from '../../assets/hero_3.jpg'
import champagneImg from '../../assets/hero_4.jpg'
import noAlcoholImg from '../../assets/hero_5.jpg'
import saucissonImg from '../../assets/hero_6_1.jpg'
import delicatessenImg from '../../assets/hero_6_2.jpg'
import '../../styles/components/ProductsGrid.css'
import '../../styles/components/ScrollAnimation.css'
import ScrollAnimation from '../ScrollAnimation'

function ProductsGrid() {
  return (
    <section className="products-grid">
      <ScrollAnimation>
        <div className="section-header">
          <h2>Nos Produits</h2>
          <p>Découvrez notre sélection de produits soigneusement choisis pour vous</p>
        </div>
      </ScrollAnimation>
      
      <div className="products-container">
        <ScrollAnimation className="from-left">
          <div className="product-block">
            <div className="product-image">
              <img src={wineImg} alt="Vins" />
            </div>
            <div className="product-content">
              <h3>Une sélection soignée</h3>
              <p>Des petites pépites aux grands crus,<br />
              Des grandes appellations aux petits glouglous de chaque région,<br />
              Notre sélection de vins saura ravir les curieux comme les connaisseurs, en toutes occasions.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-right">
          <div className="product-block">
            <div className="product-image">
              <img src={beerImg} alt="Bières" />
            </div>
            <div className="product-content">
              <h3>Des bières brassées avec passion</h3>
              <p>Découvrez notre gamme de bières locales, née du savoir-faire de brasseurs passionnés.<br />
              Laissez-vous guider et savourez pleinement une bière qui vous ressemble.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-left">
          <div className="product-block">
            <div className="product-image">
              <img src={licorImg} alt="Spiritueux" />
            </div>
            <div className="product-content">
              <h3>L'art de la distillation</h3>
              <p>Rhums, whiskys, liqueurs artisanales… notre sélection met à l'honneur la diversité et la qualité.<br />
              À déguster pour le plaisir ou à offrir, chaque flacon reflète un savoir-faire unique.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-right">
          <div className="product-block">
            <div className="product-image">
              <img src={champagneImg} alt="Champagnes" />
            </div>
            <div className="product-content">
              <h3>La magie des bulles pour vos instants précieux</h3>
              <p>Nos champagnes et vins pétillants sont choisis avec soin pour leur finesse et leur fraîcheur.<br />
              De l'apéritif à la grande occasion, notre sélection apporte une touche d'élégance à vos instants festifs.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-left">
          <div className="product-block">
            <div className="product-image">
              <img src={noAlcoholImg} alt="Sans alcool" />
            </div>
            <div className="product-content">
              <h3>Le plaisir sans modération</h3>
              <p>Parce que le plaisir ne dépend pas du degré, découvrez notre sélection sans alcool ou presque.<br />
              Des boissons originales, équilibrées et pleines de goût.</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="from-right">
          <div className="product-block">
            <div className="product-image product-image-gallery">
              <img src={saucissonImg} alt="Charcuteries et fromages" width="2000" height="1496" />
              <img src={delicatessenImg} alt="Terrines, tartinables et biscuits apéritifs" width="2000" height="1496" />
            </div>
            <div className="product-content">
              <h3>Le goût du terroir dans chaque bouchée</h3>
              <p>Saucissons et charcuteries fines, fromages, terrines et tartinables : découvrez notre sélection de produits artisanaux.<br />
              Des saveurs du terroir à partager à l'apéritif et à associer à nos vins et spiritueux.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default ProductsGrid 