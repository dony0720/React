import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
  /*
  1. create-react-app은 무작위 랜덤 클래스를 생성한다.
  CSS 클래스 이름이 다른 관계 없는 곳에서 사용한 CSS클래스 이름과 중복되는 일이 없게 하기 위함이다. 
  2. className을 설정할때는 styles.btn와 같아 import로 불러온 styles 객체 안에 값을 참조해야한다. 
  */ 

/*Line 2:8:  'styles' is defined but never used  no-unused-vars 
-> styles를 inmport 했지만 사용하지 않았기 때문에 발생한 경고 */ 
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;