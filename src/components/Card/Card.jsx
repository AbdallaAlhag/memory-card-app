import './Card.css'

const Card = ({ content, onClick }) => {
   
 return (
    <button className='card' onClick={onClick}>
      {content}
    </button>
 );
};

export default Card;