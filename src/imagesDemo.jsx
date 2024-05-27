import Laky from './images/LAKY4976.jpeg';
import './App.css';

const ImagesDemo = () => {
  const styles = {
    image: {
      height: 400,
      width: 800,
      borderRadius: 16,
      borderTopLeftRadius: 100,
    },
  };

  return (
    <>
      <div>ImagesDemo</div>
      {/* Inline Style */}
      <img
        src={Laky}
        style={{
          height: 400,
          width: 800,
          borderRadius: 16,
          borderTopLeftRadius: 100,
        }}
      />
      <img src={Laky} style={styles.image} />
      <img src={Laky} className="image" />
    </>
  );
};

export default ImagesDemo;
