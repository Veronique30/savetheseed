import styles from "../styles/Cards.module.css";
import Link from "next/link";
export default function TutoCard(props) {
  return (
    //entre accolade pour faire comprendre que j'accede à cette clé là ; props clé/valeur
    <div className={styles.card}>
      <h4 className={styles.sousTitle}>{props.sousTitle}</h4>
      <img src={props.img} className={styles.img} alt={props.sousTitle} />

      <p>{props.desc}</p>
      {/* on créer un lien dans le bouton qui va rappler notre slug pagename  */}
      <Link href={`/tutos/${props.pagename}`}>
        <button className={styles.button}>En Savoir Plus</button>
      </Link>
    </div>
  );
}
