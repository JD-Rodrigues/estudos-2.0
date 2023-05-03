import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ActivityCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&rsquos content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ActivityCard;