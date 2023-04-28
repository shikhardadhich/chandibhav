import { Card, Col, Grid, Row, Text } from "@nextui-org/react";

const HorizontalCards = ({silver_rates}:any) => {

  return (
    <Grid.Container gap={2} justify="flex-start" css={{ padding:25 }} >
      {silver_rates.map((_rate: any, _index: any) => {
      if(_rate.city === 'Mumbai' || _rate.city ===  "New Delhi"  || _rate.city === "Chennai" || _rate.city === "Kolkata")
        return  (

        <Grid xs={6} sm={3}  key={_index}>
          <Card isPressable>
            <Card.Body css={{ p: 10 }}>
              <Card.Image
                src={ '/assets/images/'+_rate.city+'.svg'}
                objectFit="cover"
                width="100%"
                height={140}
                alt={_rate.city}
              />
               <Col>
             
              <Row wrap="wrap" justify="space-between" align="center">
               
                <Text>{_rate.city}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$bold", fontSize: "$sm" }}>
                 ₹{_rate.rates}(1 KG).
                </Text>
              </Row>
              <Row wrap="wrap" justify="space-between" align="center">
               
                <Text></Text>
                <Text css={{ color: "$accents7", fontWeight: "$bold", fontSize: "$sm" }}>
                 ₹{_rate.rates/1000}  Per Gram
                </Text>
              </Row>
              </Col>
             
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
             
            </Card.Footer>
          </Card>
        </Grid>
      ) 
      }
      )}
    </Grid.Container>
  );
}
export { HorizontalCards };