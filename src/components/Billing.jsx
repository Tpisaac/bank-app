import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Billing = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "0",
        transition: {
          type: "spring",
          duration: 3,
          ease: "easeInOut",
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "100vw" });
    }
  });

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[woo%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div ref={ref} className={layout.sectionInfo}>
        <div className="overflow-hidden">
          <m.h2 animate={animation} className={styles.heading2}>
            Easily control your <br className="sm:block hidden" />
            billing and invoicing.
          </m.h2>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed mssa etiam. Mauris eu adispiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
